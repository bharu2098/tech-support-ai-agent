function DeviceInfoCard({ deviceInfo }) {

  if (!deviceInfo) return null;

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        🖥 User Device Information
      </h2>

      <div className="space-y-3">

        <div className="bg-slate-700 rounded-xl p-3">
          <span className="font-semibold">
            Device:
          </span>{" "}
          {deviceInfo.device_name || "Unknown"}
        </div>

        <div className="bg-slate-700 rounded-xl p-3">
          <span className="font-semibold">
            Platform:
          </span>{" "}
          {deviceInfo.os || "Unknown"}
        </div>

        <div className="bg-slate-700 rounded-xl p-3">
          <span className="font-semibold">
            CPU:
          </span>{" "}
          {deviceInfo.processor || "Unknown"}
        </div>

        <div className="bg-slate-700 rounded-xl p-3">
          <span className="font-semibold">
            Language:
          </span>{" "}
          {deviceInfo.language || "Unknown"}
        </div>

        <div className="bg-slate-700 rounded-xl p-3 wbreak-words">
          <span className="font-semibold">
            User Agent:
          </span>{" "}
          {deviceInfo.userAgent || "Unknown"}
        </div>

      </div>

    </div>
  );
}

export default DeviceInfoCard;