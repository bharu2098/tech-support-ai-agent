import platform
import psutil


def get_device_info():

    processor = platform.processor()

    if not processor:
        processor = platform.machine()

    if not processor:
        processor = "Linux CPU"

    return {
        "device_name": platform.node(),
        "os": platform.system(),
        "os_version": platform.release(),
        "processor": processor,
        "ram_gb": round(
            psutil.virtual_memory().total / (1024 ** 3),
            2
        ),
        "disk_usage_percent": psutil.disk_usage("/").percent
    }