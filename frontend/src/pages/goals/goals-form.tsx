import React from "react";
// import { useNavigate } from "react-router-dom";
import GenericForm from "../../components/GenericForm";

type GoalFormProps = {
  mode: "create" | "edit";
  initial?: { name: string; description: string };
};

const GoalsForm: React.FC<GoalFormProps> = ({ mode, initial }) => {
  // const navigate = useNavigate();

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <GenericForm
        mode={mode}
        title={mode === "edit" ? "Edit Goal" : "Create Goal"}
        subtitle={
          mode === "edit"
            ? "Edit the goal details and create a new version"
            : "Define a new conversation objective"
        }
        nameLabel="Goal Name"
        namePlaceholder="e.g., Book a Flight"
        descLabel="Description"
        descPlaceholder="Describe this goal's objective..."
        initial={initial}
        saveLabel="Save Goal"
        disableName={mode === "edit"}
        // onSave={...} // Add your save logic here
      />
    </div>
  );
};

export default GoalsForm;