import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type GoalFormProps = {
  mode: "create" | "edit";
  initial?: { name: string; description: string };
};

const GoalsForm: React.FC<GoalFormProps> = ({ mode, initial }) => {
  const [name, setName] = useState(initial?.name || "");
  const [desc, setDesc] = useState(initial?.description || "");
  const navigate = useNavigate();

  const isEdit = mode === "edit";

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-2">
        {isEdit ? "Edit Goal" : "Create Goal"}
      </h1>
      <p className="text-slate-500 mb-8">
        {isEdit
          ? "Edit the goal details and create a new version"
          : "Define a new conversation objective"}
      </p>
      <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl">
        <div className="mb-6">
          <label className="block font-medium mb-2">Goal Name</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
            placeholder="e.g., Book a Flight"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={isEdit}
          />
        </div>
        <div className="mb-8">
          <label className="block font-medium mb-2">Description</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-200 min-h-[120px]"
            placeholder="Describe this goal's objective..."
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            className="px-5 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-100"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="flex items-center px-5 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
          >
            <span className="mr-2">💾</span> Save Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalsForm;