# agent.py

class TechSupportAgent:

    def __init__(self):

        self.greetings = [
            "hi",
            "hello",
            "hey",
            "hii",
            "good morning",
            "good afternoon",
            "good evening",
            "how are you"
        ]

        self.technical_keywords = [
            "printer",
            "print",
            "wifi",
            "internet",
            "network",
            "router",
            "email",
            "outlook",
            "mail",
            "slow",
            "lag",
            "performance",
            "login",
            "password",
            "signin",
            "software",
            "hardware",
            "computer",
            "laptop",
            "windows",
            "driver",
            "bluetooth",
            "keyboard",
            "mouse",
            "install",
            "installation",
            "update",
            "error",
            "crash",
            "bug",
            "vpn",
            "browser",
            "application",
            "server",
            "database",
            "disk",
            "storage",
            "memory",
            "ram",
            "cpu"
        ]

    def classify_query(self, query):

        query = query.lower().strip()

        if any(
            greeting in query
            for greeting in self.greetings
        ):
            return "greeting"

        if any(
            keyword in query
            for keyword in self.technical_keywords
        ):
            return "technical"

        return "unsupported"

    def create_plan(self, query):

        query = query.lower()

        if any(
            word in query
            for word in ["printer", "print"]
        ):
            return [
                "Check Printer Connection",
                "Verify Printer Status",
                "Inspect Printer Drivers",
                "Recommend Fix"
            ]

        elif any(
            word in query
            for word in [
                "wifi",
                "internet",
                "network",
                "router"
            ]
        ):
            return [
                "Check Router Status",
                "Verify Network Adapter",
                "Run Connectivity Test",
                "Recommend Fix"
            ]

        elif any(
            word in query
            for word in [
                "email",
                "outlook",
                "mail"
            ]
        ):
            return [
                "Check Account Settings",
                "Verify Internet Connection",
                "Inspect Mail Synchronization",
                "Recommend Fix"
            ]

        elif any(
            word in query
            for word in [
                "slow",
                "lag",
                "performance"
            ]
        ):
            return [
                "Check System Performance",
                "Inspect Startup Applications",
                "Analyze Resource Usage",
                "Recommend Fix"
            ]

        elif any(
            word in query
            for word in [
                "login",
                "password",
                "signin"
            ]
        ):
            return [
                "Verify Credentials",
                "Check Account Status",
                "Reset Authentication",
                "Recommend Fix"
            ]

        elif any(
            word in query
            for word in [
                "software",
                "install",
                "update"
            ]
        ):
            return [
                "Inspect Software Configuration",
                "Check Installation Logs",
                "Verify Dependencies",
                "Recommend Fix"
            ]

        elif any(
            word in query
            for word in [
                "hardware",
                "computer",
                "laptop"
            ]
        ):
            return [
                "Inspect Hardware Components",
                "Run Diagnostic Checks",
                "Identify Faulty Components",
                "Recommend Fix"
            ]

        elif any(
            word in query
            for word in [
                "bluetooth",
                "keyboard",
                "mouse"
            ]
        ):
            return [
                "Verify Device Connectivity",
                "Inspect Device Drivers",
                "Run Hardware Diagnostics",
                "Recommend Fix"
            ]

        elif any(
            word in query
            for word in [
                "server",
                "database"
            ]
        ):
            return [
                "Inspect Service Status",
                "Verify Connectivity",
                "Analyze Error Logs",
                "Recommend Fix"
            ]

        return [
            "Diagnose Issue",
            "Troubleshoot Problem",
            "Verify Solution",
            "Recommend Fix"
        ]

    def process_query(
        self,
        query,
        previous_issue=None,
        device_info=None
    ):

        query_type = self.classify_query(query)

        if query_type == "greeting":

            return {
                "status": "Greeting",
                "category": "Greeting",
                "memory": query,
                "plan": [],
                "response": None
            }

        if query_type == "unsupported":

            return {
                "status": "Unsupported",
                "category": "Non-Technical",
                "memory": query,
                "plan": [],
                "response": None
            }

        plan = self.create_plan(query)

        # Memory-based decision making
        if (
            previous_issue and
            previous_issue.lower() == query.lower()
        ):
            plan.insert(
                0,
                "Analyze Repeated Issue"
            )

        # Device-based decision making
        if device_info:

            ram = device_info.get(
                "ram_gb",
                0
            )

            disk = device_info.get(
                "disk_usage_percent",
                0
            )

            try:
                ram = float(ram)
            except Exception:
                ram = 0

            try:
                disk = float(disk)
            except Exception:
                disk = 0

            if ram > 0 and ram < 8:
                plan.append(
                    "Recommend RAM Upgrade"
                )

            if disk > 90:
                plan.append(
                    "Recommend Disk Cleanup"
                )

        return {
            "status": "Completed",
            "category": "Technical Support",
            "memory": query,
            "plan": plan,
            "response": None
        }


# Singleton Instance
agent = TechSupportAgent()