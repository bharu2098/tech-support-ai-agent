import platform
import psutil


def get_device_info():

    return {
        "device_name": platform.node(),
        "os": platform.system(),
        "os_version": platform.release(),
        "processor": platform.processor(),
        "ram_gb": round(
            psutil.virtual_memory().total / (1024 ** 3),
            2
        ),
        "disk_usage_percent": psutil.disk_usage("/").percent
    }