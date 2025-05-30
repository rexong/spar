import GenericForm from "../../components/generic-form";

type EvaluatorFormProps = {
  mode: "create" | "edit";
  initial?: { name: string; description: string; prompt?: string; temperature?: number };
};

const EvaluatorsForm: React.FC<EvaluatorFormProps> = ({ mode, initial }) => (
  <GenericForm
    mode={mode}
    title={mode === "edit" ? "Edit LLM Evaluator" : "Create LLM Evaluator"}
    subtitle={
      mode === "edit"
        ? "Configure or edit a LLM-based evaluation system"
        : "Configure a new LLM-based evaluation system"
    }
    nameLabel="Evaluator Name"
    namePlaceholder="e.g., Relevance Quality Evaluator"
    descLabel="Description"
    descPlaceholder="Describe what this evaluator measures..."
    initial={initial}
    saveLabel={mode === "edit" ? "Save Evaluator" : "Create Evaluator"}
    disableName={mode === "edit"}
    // You can extend GenericForm to support prompt/temperature if needed
  />
);

export default EvaluatorsForm;