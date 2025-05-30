import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { personas } from "./personas-mock";

const PersonasView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const persona = personas.find((p) => p.id === Number(id));

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
              <div className="mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded mr-2">
                  Version {persona.versions[0].version}
                </span>
              </div>
              <div className="mb-4 text-slate-700">{persona.description}</div>
              <div>
                <div className="font-semibold mb-2">Persona Characteristics</div>
                <div className="grid grid-cols-2 gap-4">
                  {persona.attributes.map((attr) => (
                    <div key={attr.label}>
                      <div className="text-xs text-slate-500">{attr.label}</div>
                      <div className="font-medium">{attr.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {tab === "versions" && (
            <div>
              {persona.versions.map((v) => (
                <div
                  key={v.version}
                  className="flex items-center justify-between border-b last:border-b-0 border-slate-100 py-4"
                >
                  <div>
                    <div className="font-medium">
                      Version {v.version}
                      {v.version === persona.versions[0].version && (
                        <span className="ml-2 text-xs px-2 py-0.5 bg-violet-100 text-violet-700 rounded">
                          Latest
                        </span>
                      )}
                    </div>
                    <div className="text-slate-500 text-sm">
                      Created on {v.date} by {v.author}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-slate-400 hover:text-red-500">
                      🗑️
                    </button>
                    <button className="text-slate-400 hover:text-violet-600">
                      👁️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab === "goals" && (
            <div>
              {persona.goals.map((goal) => (
                <div
                  key={goal}
                  className="flex items-center justify-between border-b last:border-b-0 border-slate-100 py-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400 inline-block"></span>
                    <span>{goal}</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-slate-400 hover:text-red-500">
                      🗑️
                    </button>
                    <button className="text-slate-400 hover:text-violet-600">
                      👁️
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-end mt-6">
                <button className="px-4 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700">
                  Associate New Goal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonasView;