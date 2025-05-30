import GenericList from "../../components/generic-list";
import { evaluators } from "./evaluators-mock";

const EvaluatorsList = () => (
  <GenericList
    title="Evaluators"
    subtitle="Configure and manage LLM-based evaluation systems"
    createPath="/evaluators/create"
    entities={evaluators}
    getId={e => e.id}
    getName={e => e.name}
    getDetails={e => (
      <>
        <span>{e.versions.length} versions</span>
        <span>•</span>
        <span>{e.date}</span>
      </>
    )}
    viewPath={e => `/evaluators/${e.id}`}
  />
);

export default EvaluatorsList;