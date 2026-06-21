 # 🛠 AI Tech Support Agent

## 📌 Project Overview

AI Tech Support Agent is an intelligent troubleshooting assistant developed as part of the GENAI Internship Milestone Project.

The agent helps users diagnose and resolve common technical issues related to:

* WiFi & Network Problems
* Printer Issues
* Login & Password Problems
* Bluetooth Device Connectivity
* Outlook Email Synchronization
* Software Installation Errors
* Slow System Performance

The system uses Planning, Memory, Tool Usage, and AI-powered reasoning to provide structured technical support.

---

# 🎯 Project Objectives

The goal of this project is to build an AI Agent that can:

* Understand technical support queries
* Create a troubleshooting plan
* Use tools to gather relevant information
* Remember previous user issues
* Generate structured troubleshooting responses
* Reject non-technical questions

---

# 🚀 Features

## ✅ Query Classification

The agent classifies user input into:

* Greeting
* Technical Support Query
* Non-Technical Query

Examples:

* "My WiFi is not working"
* "Printer is connected but not printing"
* "I forgot my Windows password"

---

## ✅ Planning Engine

The agent generates a step-by-step execution plan.

Example:

Printer Issue

1. Check Printer Connection
2. Verify Printer Status
3. Inspect Printer Drivers
4. Recommend Fix

---

## ✅ Memory System

The agent stores previous user issues using SQLite.

Capabilities:

* Save issue history
* Retrieve previous issues
* Display memory in UI

---

## ✅ Device Information Tool

The Device Tool provides device-related information.

Supported Devices:

* Laptop
* Desktop
* Mobile
* Printer

Example:

{
"device": "Laptop",
"os": "Windows 11",
"ram": "8GB",
"storage": "256GB SSD"
}

---

## ✅ Troubleshooting Guide Tool

The Troubleshooting Tool provides predefined troubleshooting workflows.

Supported Categories:

* WiFi
* Printer
* Login Issues
* Bluetooth
* Email
* Software Installation
* Performance Issues

---

## ✅ AI-Powered Troubleshooting

Google Gemini AI is used to generate:

* Diagnosis
* Troubleshooting Steps
* Verification
* Recommended Fix

---

## ✅ Non-Technical Question Handling

The agent rejects non-technical questions.

Example:

Input:

What is the capital of India?

Output:

I specialize in technical support only.

---

# 🏗 System Architecture

User
↓
Frontend (React + Vite)
↓
FastAPI Backend
↓
Planning Engine
↓
Tools Layer
├── Device Tool
├── Troubleshooting Tool
↓
Memory Layer (SQLite)
↓
Google Gemini API
↓
Structured Response

---

# 🧠 Agent Workflow

1. User submits technical issue
2. Query classification performed
3. Agent generates execution plan
4. Device information retrieved
5. Troubleshooting guide retrieved
6. Previous issue fetched from memory
7. Gemini generates structured solution
8. Response displayed to user

---

# 🖥 Frontend Features

* Modern Dashboard UI
* Sidebar Navigation
* Recent Questions History
* Example Queries
* Agent Status Indicator
* Memory Display
* Execution Plan Display
* AI Response Display
* Clear Chat Functionality

---

# ⚙ Backend Features

* FastAPI REST API
* SQLite Database
* Memory Management
* Device Tool
* Troubleshooting Tool
* Gemini Integration
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
* SQLite

## AI

* Google Gemini 2.5 Flash

## Database

* SQLite

---

# 📂 Project Structure

techsupport-ai-agent/

backend/
│
├── agent.py
├── main.py
├── database.py
├── gemini_services.py
├── memory.py
│
├── tools/
│ ├── device_tool.py
│ └── troubleshooting_tool.py
│
└── techsupport.db

frontend/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.jsx

---

# 🔧 Installation

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend URL:

```bash
http://127.0.0.1:8000
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```bash
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a .env file:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# 📡 API Endpoint

POST /chat

Request:

```json
{
  "message": "My WiFi is not working"
}
```

Response:

```json
{
  "status": "Completed",
  "category": "Technical Support",
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

* WiFi Not Working
* Printer Not Printing
* Bluetooth Mouse Not Connecting
* Outlook Email Not Syncing
* Slow Laptop Performance
* Windows Password Reset
* Python Installation Failure

---

# 📸 Screenshots

Add screenshots here:

* Home Page
* WiFi Troubleshooting
* Printer Troubleshooting
* Memory System
* Agent Plan Execution

---

# 🌐 Deployment

Frontend URL:

Add deployed frontend URL here

Backend URL:

Add deployed backend URL here

---

# 👨‍💻 Author

Bhargav Doddi

GENAI Internship Project

AI Tech Support Agent

Milestone 2 Submission
