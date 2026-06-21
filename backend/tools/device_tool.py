def get_device_info(query):

    query = query.lower()

    if any(word in query for word in ["laptop", "windows"]):
        return {
            "device": "Laptop",
            "os": "Windows 11",
            "ram": "8GB",
            "storage": "256GB SSD"
        }

    elif any(word in query for word in ["desktop", "computer"]):
        return {
            "device": "Desktop",
            "os": "Windows 10",
            "ram": "16GB",
            "storage": "512GB SSD"
        }

    elif any(word in query for word in ["mobile", "phone", "android"]):
        return {
            "device": "Mobile",
            "os": "Android 14",
            "ram": "8GB",
            "storage": "128GB"
        }

    elif "printer" in query:
        return {
            "device": "Printer",
            "status": "Connected"
        }

    return {
        "device": "Unknown",
        "os": "Unknown",
        "ram": "Unknown",
        "storage": "Unknown"
    }