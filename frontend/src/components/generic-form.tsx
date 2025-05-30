import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type GenericFormProps = {
  mode: "create" | "edit";
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  descLabel: string;
  descPlaceholder: string;
  initial?: { name: string; description: string };
  saveLabel: string;
  onSave?: (name: string, desc: string) => void;
  disableName?: boolean;
};

const GenericForm: React.FC<GenericFormProps> = ({
  title,
  subtitle,
  nameLabel,
  namePlaceholder,
  descLabel,
  descPlaceholder,
  initial,
  saveLabel,
  onSave,
  disableName,
}) => {
  const [name, setName] = useState(initial?.name || "");
  const [desc, setDesc] = useState(initial?.description || "");
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-slate-500 mb-8">{subtitle}</p>
      <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl">
        <div className="mb-6">
          <label className="block font-medium mb-2">{nameLabel}</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
            placeholder={namePlaceholder}
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={disableName}
          />
        </div>
        <div className="mb-8">
          <label className="block font-medium mb-2">{descLabel}</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-200 min-h-[120px]"
            placeholder={descPlaceholder}
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
            onClick={() => onSave?.(name, desc)}
          >
            <span className="mr-2">💾</span> {saveLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenericForm;