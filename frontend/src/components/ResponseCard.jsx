function ResponseCard({ response, status }) {

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        💬 AI Response
      </h2>

      {status === "Executing" ? (

        <div className="flex items-center gap-3">

          <div
            className="
              h-4
              w-4
              border-2
              border-blue-500
              border-t-transparent
              rounded-full
              animate-spin
            "
          />

          <p className="text-gray-300">
            Agent is analyzing the issue...
          </p>

        </div>

      ) : (

        <div
          className="
            whitespace-pre-wrap
            leading-7
            text-gray-100
          "
        >
          {response}
        </div>

      )}

    </div>
  );
}

export default ResponseCard;