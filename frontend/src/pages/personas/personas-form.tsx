import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Optionally, you can fetch persona data here if editing
const mockPersona = {
  name: "Technical Support Seeker",
  description: "",
};

type PersonaFormProps = {
  mode: "create" | "edit";
};

const PersonasForm: React.FC<PersonaFormProps> = ({ mode }) => {
  // If editing, prefill with persona data (replace with real fetch in prod)
  const [name, setName] = useState(mode === "edit" ? mockPersona.name : "");
  const [desc, setDesc] = useState(mode === "edit" ? mockPersona.description : "");
  const navigate = useNavigate();

  const isEdit = mode === "edit";

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-2">
        {isEdit ? "Edit Persona" : "Create Persona"}
      </h1>
      <p className="text-slate-500 mb-8">
        {isEdit
          ? "Create a new version of Persona by editing the description"
          : "Create a new user persona for conversation simulation"}
      </p>
      <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl">
        <div className="mb-6">
          <label className="block font-medium mb-2">Persona Name</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
            placeholder="e.g., Technical Support Seeker"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={isEdit}
          />
        </div>
        <div className="mb-8">
          <label className="block font-medium mb-2">Description</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-200 min-h-[120px]"
            placeholder="Describe this persona's background and characteristics..."
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
            <span className="mr-2">💾</span> Save Persona
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonasForm;
