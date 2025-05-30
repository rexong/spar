import { useParams } from "react-router-dom";
import MetricsForm from "./metrics-form";
import { metrics } from "./metrics-mock";

const MetricsEdit = () => {
  const { id } = useParams<{ id: string }>();
  const metric = metrics.find((m) => m.id === Number(id));
  if (!metric) return <div className="p-8">Metric not found</div>;
  return (
    <MetricsForm
      mode="edit"
      initial={{
        name: metric.name,
        description: metric.description,
      }}
    />
  );
};

export default MetricsEdit;