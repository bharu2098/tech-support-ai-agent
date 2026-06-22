function DeviceInfoCard({ deviceInfo }) {

  if (!deviceInfo) return null;

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        🖥 Device Information
      </h2>

      <div className="space-y-3">

        <div className="bg-slate-700 rounded-xl p-3">
          <span className="font-semibold">
            Device Name:
          </span>{" "}
          {deviceInfo.device_name || "Unknown"}
        </div>

        <div className="bg-slate-700 rounded-xl p-3">
          <span className="font-semibold">
            Operating System:
          </span>{" "}
          {deviceInfo.os || "Unknown"}{" "}
          {deviceInfo.os_version || ""}
        </div>

        <div className="bg-slate-700 rounded-xl p-3">
          <span className="font-semibold">
            Processor:
          </span>{" "}
          {deviceInfo.processor || "Unknown"}
        </div>

        <div className="bg-slate-700 rounded-xl p-3">
          <span className="font-semibold">
            RAM:
          </span>{" "}
          {deviceInfo.ram_gb || "Unknown"} GB
        </div>

        <div className="bg-slate-700 rounded-xl p-3">
          <span className="font-semibold">
            Disk Usage:
          </span>{" "}
          {deviceInfo.disk_usage_percent || "Unknown"}%
        </div>

      </div>

    </div>
  );
}

export default DeviceInfoCard;