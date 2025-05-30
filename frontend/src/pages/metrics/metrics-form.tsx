import GenericForm from "../../components/generic-form";

type MetricFormProps = {
  mode: "create" | "edit";
  initial?: { name: string; description: string };
};

const MetricsForm: React.FC<MetricFormProps> = ({ mode, initial }) => (
  <GenericForm
    mode={mode}
    title={mode === "edit" ? "Edit Metric" : "Create New Metric"}
    subtitle={
      mode === "edit"
        ? "Edit the new metric description"
        : "Define a new metric definition"
    }
    nameLabel="Metric Name"
    namePlaceholder="e.g., Sentiment Recognition"
    descLabel="Description"
    descPlaceholder="Describe the metric definition..."
    initial={initial}
    saveLabel="Save Metric"
    disableName={mode === "edit"}
  />
);

export default MetricsForm;