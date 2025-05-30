import React from "react";
import { useNavigate } from "react-router-dom";
import { goals } from "./goals-mock";

const GoalsList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Goals</h1>
        <button
          className="flex items-center bg-violet-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-violet-700 transition"
          onClick={() => navigate("/goals/create")}
        >
          <span className="text-xl mr-2">+</span> New Goal
        </button>
      </div>
      <p className="text-slate-500 mb-6">
        List and manage conversation objectives
      </p>
      <input
        type="text"
        placeholder="Search goals…"
        className="w-full mb-6 px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
      />
      <div className="bg-white rounded-xl shadow-sm">
        {goals.map((goal, idx) => (
          <div
            key={goal.id}
            className={`flex items-center justify-between px-6 py-5 ${
              idx !== goals.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div
              className="font-medium text-violet-700 hover:underline cursor-pointer"
              onClick={() => navigate(`/goals/${goal.id}`)}
            >
              {goal.name}
            </div>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <span>{goal.versions.length} versions</span>
              <span>•</span>
              <span>{goal.date}</span>
              <span className="text-xl text-slate-300">{'>'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsList;