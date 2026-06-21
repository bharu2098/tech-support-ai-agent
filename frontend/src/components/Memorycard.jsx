function MemoryCard({ previousIssue }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-3">
        🧠 Memory
      </h2>

      <p className="text-gray-400 text-sm mb-2">
        Previous User Issue
      </p>

      <div className="bg-slate-700 rounded-xl p-4">
        <p className="text-gray-200">
          {previousIssue || "No previous issue available"}
        </p>
      </div>

    </div>
  );
}

export default MemoryCard;