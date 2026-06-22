# 🛠 AI Tech Support Agent

> Intelligent Technical Troubleshooting Assistant using Planning, Memory, Tool Usage, and Google Gemini AI

---

# 📌 Project Overview

AI Tech Support Agent is an intelligent troubleshooting assistant developed as part of the **GENAI Internship Milestone 2 Project**.

The system assists users in diagnosing and resolving common technical support issues through AI-driven reasoning, structured planning, memory management, and tool-based troubleshooting.

### Supported Issue Categories

* 🌐 WiFi & Network Issues
* 🖨 Printer Problems
* 🔐 Login & Password Issues
* 🎧 Bluetooth Connectivity Problems
* 📧 Outlook Email Synchronization
* 💻 Software Installation Failures
* ⚡ Slow System Performance

---

# 🎯 Project Objectives

The primary objective of this project is to build an AI Agent capable of:

* Understanding technical support requests
* Classifying user queries
* Generating troubleshooting plans
* Using tools to gather relevant information
* Maintaining conversation memory
* Producing structured troubleshooting responses
* Rejecting unsupported non-technical questions

---

# ✅ Milestone Requirements Coverage

| Requirement        | Status      |
| ------------------ | ----------- |
| Planning           | ✅ Completed |
| Memory             | ✅ Completed |
| Tool Usage         | ✅ Completed |
| Gemini Integration | ✅ Completed |
| FastAPI Backend    | ✅ Completed |
| React Frontend     | ✅ Completed |
| SQLite Database    | ✅ Completed |
| Deployment         | ✅ Completed |
| GitHub Repository  | ✅ Completed |

---

# 🏗 System Architecture

```text
                        USER
                          │
                          ▼

            ┌───────────────────────────┐
            │   React + Vite Frontend   │
            └───────────────────────────┘
                          │
                          ▼

            ┌───────────────────────────┐
            │      FastAPI Backend      │
            └───────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼

 ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
 │  Planning   │   │   Memory    │   │    Tools    │
 │   Engine    │   │   Layer     │   │    Layer    │
 └─────────────┘   └─────────────┘   └─────────────┘
                                           │
                           ┌───────────────┴───────────────┐
                           ▼                               ▼

                 Device Information Tool      Troubleshooting Tool

                                           │
                                           ▼

                               Google Gemini AI

                                           │
                                           ▼

                              Structured Solution
```

---

# 🧠 Agent Workflow

```text
1. User submits technical issue
                    │
                    ▼

2. Query Classification
                    │
                    ▼

3. Generate Troubleshooting Plan
                    │
                    ▼

4. Retrieve Previous Memory
                    │
                    ▼

5. Execute Tools
                    │
                    ▼

6. Gemini AI Reasoning
                    │
                    ▼

7. Generate Structured Solution
                    │
                    ▼

8. Display Results to User
```

---

# 🚀 Core AI Agent Components

## 🧠 Planning Engine

The Planning Engine creates a troubleshooting workflow before generating a solution.

### Example

Printer Issue:

1. Check Printer Connection
2. Verify Printer Status
3. Inspect Printer Drivers
4. Recommend Fix

---

## 💾 Memory Layer

The Memory Layer stores previous user issues using SQLite.

### Capabilities

* Save issue history
* Retrieve previous issues
* Maintain troubleshooting context
* Display memory information in the UI

---

## 🛠 Tool Layer

The system uses specialized tools to support troubleshooting.

### Device Information Tool

Provides runtime environment information used by the AI Agent.

Collected Information:

* Device Name
* Operating System
* Processor Information
* RAM Capacity
* Disk Usage Statistics
### Troubleshooting Tool

Provides predefined troubleshooting workflows.

Supported Categories:

* WiFi Issues
* Printer Issues
* Login Problems
* Password Reset
* Bluetooth Problems
* Outlook Synchronization
* Software Installation
* Performance Issues

---

## 🤖 Reasoning Layer (Gemini AI)

Google Gemini AI combines:

* User Query
* Agent Plan
* Memory Context
* Tool Outputs

to generate structured troubleshooting responses.

Generated Response Sections:

* Diagnosis
* Troubleshooting Steps
* Verification
* Recommended Fix

---

# 🚀 Key Features

## ✅ Intelligent Query Classification

The system automatically classifies user input into:

### Technical Support Queries

Examples:

* My WiFi is not working
* Printer is connected but not printing
* Bluetooth mouse is not connecting
* Outlook email is not syncing

### Unsupported Queries

Examples:

* What is the capital of India?
* Tell me a joke
* What is your favorite movie?

The agent politely rejects unsupported questions.

---

## ✅ Non-Technical Query Handling

### Input

```text
What is the capital of India?
```

### Output

```text
I specialize in technical support only.
```

---

# 🖥 Frontend Features

Built using React, Vite and Tailwind CSS.

### Features

* Responsive Dashboard
* Sidebar Navigation
* Recent Question History
* Example Queries
* Agent Status Display
* Memory Display
* Plan Display
* AI Response Display
* Clear Chat Functionality

---

# ⚙ Backend Features

Built using FastAPI and SQLite.

### Features

* FastAPI REST API
* Query Classification
* Planning Engine
* Memory Management
* Device Tool Integration
* Troubleshooting Tool Integration
* Gemini AI Integration
* Error Handling

---

# 🛠 Technology Stack

## Frontend

* React.js
* Vite
* Tailwind CSS

## Backend

* Python
* FastAPI

## Database

* SQLite

## AI Model

* Google Gemini 2.5 Flash

## Deployment

* Vercel (Frontend)
* Render (Backend)

## Version Control

* Git
* GitHub

---

# 📂 Project Structure

```text
tech-support-ai-agent/

├── backend/
│   ├── agent.py
│   ├── main.py
│   ├── memory.py
│   ├── database.py
│   ├── gemini_services.py
│   ├── config.py
│   ├── requirements.txt
│   │
│   ├── tools/
│   │   ├── device_tool.py
│   │   └── troubleshooting_tool.py
│   │
│   └── techsupport.db
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── screenshots/
│   ├── home-page.png
│   ├── agent-status.png
│   ├── agent-execution-plan.png
│   └── ai-response.png
│
└── README.md
```

---

# 🔧 Local Installation

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

### Backend URL

```text
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

### Frontend URL

```text
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# 📡 API Endpoint

## POST /chat

### Request

```json
{
  "message": "My WiFi is not working"
}
```

### Response

```json
{
  "status": "Completed",
  "plan": [
    "Check Router Status",
    "Verify Network Adapter",
    "Run Connectivity Test",
    "Recommend Fix"
  ],
  "response": "Generated AI response"
}
```

---

# 🧪 Tested Scenarios

Successfully Tested:

* ✅ WiFi Not Working
* ✅ Printer Not Printing
* ✅ Bluetooth Mouse Not Connecting
* ✅ Outlook Email Not Syncing
* ✅ Windows Password Reset
* ✅ Python Installation Failure
* ✅ Slow Laptop Performance
* ✅ Non-Technical Question Rejection

---

# 📸 Project Screenshots

The following screenshots demonstrate the user interface and core AI Agent functionalities.

## Home Page

![Home Page](screenshots/home-page.png)

## Agent Status

![Agent Status](screenshots/agent-status.png)

## Agent Execution Plan

![Agent Execution Plan](screenshots/agent-execution-plan.png)

## AI Response

![AI Response](screenshots/ai-response.png)

---

# 📈 Project Results

The AI Tech Support Agent successfully:

* Diagnoses technical support issues
* Generates troubleshooting plans
* Maintains issue history through memory
* Uses tools for issue analysis
* Produces structured AI-generated responses
* Rejects unsupported non-technical queries

This project demonstrates the core AI Agent concepts of:

* Planning
* Memory
* Tool Usage
* LLM Integration
* Decision Making

---

# 🚀 Project Deployment

## Frontend Application

https://tech-support-ai-agent.vercel.app

## Backend API

https://tech-support-ai-agent.onrender.com

## Source Code Repository

https://github.com/bharu2098/tech-support-ai-agent

---

# 👨‍💻 Author

**Bhargav Doddi**

GENAI Internship – Milestone 2 Project

**AI Tech Support Agent**
