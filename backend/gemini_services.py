from google import genai
from config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


def ask_gemini(
    query,
    previous_issue,
    device_info,
    troubleshooting_guide
):

    prompt = f"""
You are an AI Tech Support Agent.

Your job is to diagnose, troubleshoot, verify,
and recommend solutions for technical issues.

Previous Issue:
{previous_issue}

Device Information:
{device_info}

Troubleshooting Guide:
{troubleshooting_guide}

Current User Issue:
{query}

Follow this format exactly:

## Diagnosis
Identify the probable cause of the issue.

## Troubleshooting Steps
Provide step-by-step troubleshooting actions.

## Verification
Explain how the user can verify the issue is fixed.

## Recommended Fix
Provide the final recommendation.

Use the device information, previous issue history,
and troubleshooting guide while generating the response.

Keep the response concise and professional.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text