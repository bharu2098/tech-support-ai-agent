function WelcomeCard() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <p className="text-2xl font-bold">
        👋 Welcome to AI Tech Support Agent
      </p>

      <p className="text-gray-400 mt-3">
        An intelligent technical support assistant that uses
        Planning, Memory, and Tool Usage to diagnose and
        troubleshoot technical issues.
      </p>

      <div className="mt-4 text-sm text-gray-300">

        <p>✅ Diagnose Issues</p>
        <p>✅ Troubleshoot Problems</p>
        <p>✅ Verify Solutions</p>
        <p>✅ Recommend Fixes</p>

      </div>

    </div>
  );
}

export default WelcomeCard;