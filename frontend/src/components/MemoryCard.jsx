function MemoryCard({
  previousIssue,
  currentIssue,
}) {

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        🧠 Memory
      </h2>

      <div className="space-y-4">

        <div className="bg-slate-700 rounded-xl p-4">

          <p className="text-gray-400 text-sm mb-2">
            Previous Issue
          </p>

          <p className="text-gray-200">
            {previousIssue ||
              "No previous issue available"}
          </p>

        </div>

        <div className="bg-slate-700 rounded-xl p-4">

          <p className="text-gray-400 text-sm mb-2">
            Current Issue
          </p>

          <p className="text-gray-200">
            {currentIssue ||
              "No current issue"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default MemoryCard;