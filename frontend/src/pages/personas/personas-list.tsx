import React from "react";
import { useNavigate } from "react-router-dom";
import { personas } from "./personas-mock";

const PersonasList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-slate-50 min-h-screen" data-testid="personas-list">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Personas</h1>
        <button
          className="flex items-center bg-violet-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-violet-700 transition"
          onClick={() => navigate("/personas/create")}
        >
          <span className="text-xl mr-2">+</span> New Persona
        </button>
      </div>
      <p className="text-slate-500 mb-6">
        Create and manage user personas for testing
      </p>
      <input
        type="text"
        placeholder="Search personas…"
        className="w-full mb-6 px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
      />
      <div className="bg-white rounded-xl shadow-sm">
        {personas.map((persona, idx) => (
          <div
            key={persona.id}
            className={`flex items-center justify-between px-6 py-5 ${
              idx !== personas.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div
              className="font-medium text-violet-700 hover:underline cursor-pointer"
              onClick={() => navigate(`/personas/${persona.id}`)}
            >
              {persona.name}
            </div>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <span>{persona.versions.length} versions</span>
              <span>•</span>
              <span>{persona.goals.length} goals</span>
              <span>•</span>
              <span>{persona.date}</span>
              <span className="text-xl text-slate-300">{'>'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonasList;