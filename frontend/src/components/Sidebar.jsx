function Sidebar({
  history = [],
  onHistoryClick,
  onClearChat,
}) {
  return (
    <div className="w-72 h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Header */}
      <div className="p-6">

        <h2 className="text-3xl font-bold">
          🛠 Tech Support Agent
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          Planning • Memory • Tool Usage
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-3">
          <p className="text-xs text-gray-300">
            Diagnose • Troubleshoot
          </p>
          <p className="text-xs text-gray-300">
            Verify • Recommend
          </p>
        </div>

        <hr className="border-slate-700 mt-6" />

      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-6">

        <h3 className="font-semibold text-lg mb-4">
          📜 Recent Questions
        </h3>

        <div className="space-y-3">

          {history.length > 0 ? (
            history.map((item, index) => (
              <button
                key={index}
                onClick={() => onHistoryClick(item)}
                className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  transition-all
                  duration-200
                  rounded-xl
                  py-3
                  px-3
                  text-sm
                  text-left
                 wrap-break-word 
                  shadow-md
                "
              >
                {(item.question || "").length > 40
                  ? item.question.slice(0, 40) + "..."
                  : item.question}
              </button>
            ))
          ) : (
            <div
              className="
                text-gray-400
                text-sm
                bg-slate-800
                rounded-xl
                p-4
              "
            >
              No previous questions
            </div>
          )}

        </div>

      </div>

      {/* Footer Actions */}
      <div className="p-6 border-t border-slate-800">

        <button
          onClick={onClearChat}
          className="
            w-full
            bg-red-600
            hover:bg-red-700
            transition-all
            duration-200
            rounded-xl
            py-3
            font-semibold
            mb-4
          "
        >
          🗑 Clear Chat
        </button>

        <div className="text-center">

          <p className="text-xs text-gray-400">
            GENAI Internship Project
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Bhargav Doddi
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;