def get_troubleshooting_guide(query):

    query = query.lower()

    if any(word in query for word in ["wifi", "internet", "network"]):
        return [
            "Check Router Status",
            "Restart Router",
            "Verify Network Adapter",
            "Reconnect WiFi"
        ]

    elif any(word in query for word in ["printer", "print"]):
        return [
            "Check Printer Connection",
            "Verify Printer Status",
            "Restart Printer",
            "Reinstall Drivers"
        ]

    elif any(word in query for word in ["slow", "lag", "performance"]):
        return [
            "Check CPU Usage",
            "Check Memory Usage",
            "Disable Startup Applications",
            "Restart System"
        ]

    elif any(word in query for word in ["login", "password", "signin"]):
        return [
            "Verify Credentials",
            "Check Account Status",
            "Reset Password",
            "Try Login Again"
        ]

    elif any(word in query for word in ["bluetooth", "mouse", "keyboard"]):
        return [
            "Check Bluetooth Status",
            "Restart Bluetooth Service",
            "Update Bluetooth Drivers",
            "Reconnect Device"
        ]

    elif any(word in query for word in ["email", "mail", "outlook"]):
        return [
            "Verify Account Settings",
            "Check Internet Connection",
            "Sync Mailbox",
            "Restart Email Client"
        ]

    elif any(word in query for word in ["software", "install", "installation", "update"]):
        return [
            "Check Installation Logs",
            "Verify System Requirements",
            "Run Installer as Administrator",
            "Retry Installation"
        ]

    return [
        "Diagnose Issue",
        "Troubleshoot Problem",
        "Verify Solution",
        "Recommend Fix"
    ]