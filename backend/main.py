from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time

from agent import TechSupportAgent
from database import init_db, save_issue, get_last_issue
from gemini_services import ask_gemini

from tools.device_tool import get_device_info
from tools.troubleshooting_tool import get_troubleshooting_guide

app = FastAPI(title="TechSupport AI Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Database
init_db()

# Agent Instance
agent = TechSupportAgent()


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {
        "message": "TechSupport AI Agent Running",
        "status": "online"
    }


@app.post("/chat")
def chat(data: ChatRequest):

    start_time = time.time()

    user_query = data.message.strip()

    if not user_query:
        return {
            "status": "Error",
            "response": "Please enter a valid question."
        }

    # Memory
    previous_issue = get_last_issue("Bhargav")

    # Save Current Issue
    save_issue("Bhargav", user_query)

    # Tool Execution
    device_info = get_device_info()

    troubleshooting_guide = get_troubleshooting_guide(
        user_query
    )

    # Agent Planning + Decision Making
    result = agent.process_query(
        query=user_query,
        previous_issue=previous_issue,
        device_info=device_info
    )

    category = result["category"]
    plan = result["plan"]

    # Show Tool Usage in Plan
    if category == "Technical Support":

        plan.insert(
            0,
            "Fetch Device Information"
        )

        plan.insert(
            1,
            "Load Troubleshooting Guide"
        )

    try:

        if category == "Greeting":

            response = """
Hello 👋

I am your TechSupport AI Agent.

I can help with:

• Printer Issues
• WiFi Problems
• Login Issues
• Software Installation
• Hardware Troubleshooting
• Performance Problems

How can I assist you today?
"""

        elif category == "Non-Technical":

            response = """
I specialize in technical support only.

Please ask questions related to:

• Printer Troubleshooting
• WiFi & Internet Issues
• Login Problems
• Software Errors
• Hardware Diagnostics
• System Performance
"""

        else:

            response = ask_gemini(
                query=user_query,
                previous_issue=previous_issue,
                device_info=device_info,
                troubleshooting_guide=troubleshooting_guide
            )

        execution_time = round(
            time.time() - start_time,
            2
        )

        return {
            "status": result["status"],
            "category": category,

            # Memory
            "previous_issue": previous_issue,
            "current_issue": user_query,

            # Tool Results
            "device_info": device_info,
            "troubleshooting_guide": troubleshooting_guide,

            # Agent
            "plan": plan,
            "response": response,

            # Metrics
            "execution_time": f"{execution_time}s"
        }

    except Exception as e:

        execution_time = round(
            time.time() - start_time,
            2
        )

        print("Gemini Error:", e)

        return {
            "status": "Error",
            "category": category,

            "previous_issue": previous_issue,
            "current_issue": user_query,

            "device_info": device_info,
            "troubleshooting_guide": troubleshooting_guide,

            "plan": plan,

            "response": (
                f"Gemini Error: {str(e)}"
            ),

            "execution_time": f"{execution_time}s"
        }