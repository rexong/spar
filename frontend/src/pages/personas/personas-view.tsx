import { useState } from "react";
import { useParams } from "react-router-dom";
import { personas } from "./personas-mock";

const PersonasView = () => {
  const { id } = useParams<{ id: string }>();
  const persona = personas.find((p) => p.id === id);

  const [tab, setTab] = useState<"details" | "versions" | "goals">("details");

  if (!persona) {
    return (
      <div className="p-8 bg-slate-50 min-h-screen">
        <h1 className="text-2xl font-semibold">Persona Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-slate-400 text-xs mb-1">Persona Details</div>
          <h1 className="text-2xl font-semibold">{persona.name}</h1>
          <div className="text-slate-400 text-xs">Persona ID: {persona.id}</div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-100">
            Edit Persona
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600">
            Delete Persona
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex border-b border-slate-100">
          <button
            className={`px-6 py-3 font-medium ${
              tab === "details"
                ? "border-b-2 border-violet-600 text-violet-700"
                : "text-slate-500"
            }`}
            onClick={() => setTab("details")}
          >
            Details
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              tab === "versions"
                ? "border-b-2 border-violet-600 text-violet-700"
                : "text-slate-500"
            }`}
            onClick={() => setTab("versions")}
          >
            Version History
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              tab === "goals"
                ? "border-b-2 border-violet-600 text-violet-700"
                : "text-slate-500"
            }`}
            onClick={() => setTab("goals")}
          >
            Associated Goals
          </button>
        </div>
        <div className="p-8">
          {tab === "details" && (
            <>
              <div>{persona.description}</div>
              {persona.attributes && (
                <ul>
                  {persona.attributes.map((attr) => (
                    <li key={attr.label}>
                      <strong>{attr.label}</strong> {attr.value}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
          {tab === "versions" && (
            <ul>
              {persona.versions?.map((v) => (
                <li key={v.version}>
                  <div>Version {v.version}</div>
                  <div>Created on {v.date} by {v.author}</div>
                </li>
              ))}
            </ul>
          )}
          {tab === "goals" && (
            <>
              <ul>
                {persona.goals?.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
              <button>Associate New Goal</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonasView;