function StatusCard({ status }) {

  const getStatusColor = () => {

    if (status === "Completed")
      return "text-green-400";

    if (status === "Executing")
      return "text-yellow-400";

    if (status === "Offline")
      return "text-red-400";

    if (status === "Idle")
      return "text-blue-400";

    return "text-gray-400";
  };

  const getStatusIcon = () => {

    if (status === "Completed")
      return "✅";

    if (status === "Executing")
      return "⚙️";

    if (status === "Offline")
      return "❌";

    if (status === "Idle")
      return "🟢";

    return "ℹ️";
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-3">
        📊 Agent Status
      </h2>

      <div className="bg-slate-700 rounded-xl p-4">

        <p className={`text-lg font-semibold ${getStatusColor()}`}>
          {getStatusIcon()} {status}
        </p>

      </div>

    </div>
  );
}

export default StatusCard;