import React from "react";
// import { useNavigate } from "react-router-dom";
import GenericForm from "../../components/GenericForm";

type PersonaFormProps = {
  mode: "create" | "edit";
  initial?: { name: string; description: string };
};

const PersonasForm: React.FC<PersonaFormProps> = ({ mode, initial }) => {
  // const navigate = useNavigate();

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <GenericForm
        mode={mode}
        title={mode === "edit" ? "Edit Persona" : "Create Persona"}
        subtitle={
          mode === "edit"
            ? "Create a new version of Persona by editing the description"
            : "Create a new user persona for conversation simulation"
        }
        nameLabel="Persona Name"
        namePlaceholder="e.g., Technical Support Seeker"
        descLabel="Description"
        descPlaceholder="Describe this persona's background and characteristics..."
        initial={initial}
        saveLabel="Save Persona"
        disableName={mode === "edit"}
        // onCancel={() => navigate(-1)}
        // onSave={...} // Add your save logic here
      />
    </div>
  );
};

export default PersonasForm;
