function PlanCard({ plan = [] }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-3">
        📋 Agent Execution Plan
      </h2>

      <p className="text-gray-400 text-sm mb-4">
        Generated troubleshooting workflow
      </p>

      {plan.length > 0 ? (

        <ul className="space-y-3">

          {plan.map((step, index) => (
            <li
              key={index}
              className="
                bg-slate-700
                rounded-xl
                p-3
              "
            >
              ✅ {step}
            </li>
          ))}

        </ul>

      ) : (

        <div className="bg-slate-700 rounded-xl p-4">
          No plan available
        </div>

      )}

    </div>
  );
}

export default PlanCard;