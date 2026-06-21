function ExampleQueries({ onSelectQuery }) {

  const examples = [
    "My laptop is running very slow",
    "My WiFi is not working",
    "My printer is connected but not printing",
    "Outlook email is not syncing",
    "I forgot my Windows password",
    "Bluetooth mouse is not connecting",
    "Python installation is failing",
    "Blue screen error on startup",
  ];

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-2">
        🚀 Example Technical Issues
      </h2>

      <p className="text-gray-400 mb-4">
        Click any example below to test the AI Tech Support Agent.
      </p>

      <div className="grid gap-3">

        {examples.map((query, index) => (
          <button
            key={index}
            onClick={() => onSelectQuery(query)}
            className="
              w-full
              text-left
              bg-slate-700
              hover:bg-slate-600
              transition-all
              duration-200
              rounded-xl
              p-3
              text-sm
            "
          >
            {query}
          </button>
        ))}

      </div>

    </div>
  );
}

export default ExampleQueries;