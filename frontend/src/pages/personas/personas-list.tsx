import React from "react";

const personas = [
  {
    name: "Technical Support Seeker",
    description: "A user seeking technical support for computer issues",
    versions: 2,
    goals: 3,
    date: "2023-10-15",
  },
  {
    name: "E-commerce Shopper",
    description: "A user looking to purchase products online",
    versions: 2,
    goals: 3,
    date: "2023-10-15",
  },
  {
    name: "Travel Planner",
    description: "A user planning a vacation and booking travel arrangements",
    versions: 2,
    goals: 3,
    date: "2023-10-15",
  },
  {
    name: "Healthcare Inquirer",
    description: "A user seeking medical advice or information",
    versions: 2,
    goals: 3,
    date: "2023-10-15",
  },
  {
    name: "Financial Advisor Seeker",
    description: "A user looking for financial planning advice",
    versions: 2,
    goals: 3,
    date: "2023-10-15",
  },
];

const PersonasList: React.FC = () => (
  <div className="p-8 bg-slate-50 min-h-screen">
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold">Personas</h1>
      <button className="flex items-center bg-violet-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-violet-700 transition">
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
          key={persona.name}
          className={`flex items-center justify-between px-6 py-5 ${
            idx !== personas.length - 1 ? "border-b border-slate-100" : ""
          }`}
        >
          <div>
            <div className="font-medium text-violet-700 hover:underline cursor-pointer">
              {persona.name}
            </div>
            <div className="text-slate-500 text-sm">{persona.description}</div>
          </div>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <span>{persona.versions} versions</span>
            <span>•</span>
            <span>{persona.goals} goals</span>
            <span>•</span>
            <span>{persona.date}</span>
            <span className="text-xl text-slate-300">{'>'}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PersonasList;