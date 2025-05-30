import GenericList from "../../components/generic-list";
import { metrics } from "./metrics-mock";

const MetricsList = () => (
  <GenericList
    title="Metrics"
    subtitle="List and manage evaluation metrics"
    createPath="/metrics/create"
    entities={metrics}
    getId={m => m.id}
    getName={m => m.name}
    getDetails={m => (
      <>
        <span>{m.versions.length} versions</span>
        <span>•</span>
        <span>{m.date}</span>
      </>
    )}
    viewPath={m => `/metrics/${m.id}`}
  />
);

export default MetricsList;