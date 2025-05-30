import { useParams } from "react-router-dom";
import EvaluatorsForm from "./evaluators-form";
import { evaluators } from "./evaluators-mock";

const EvaluatorsEdit = () => {
  const { id } = useParams<{ id: string }>();
  const evaluator = evaluators.find((e) => e.id === Number(id));
  if (!evaluator) return <div className="p-8">Evaluator not found</div>;
  return (
    <EvaluatorsForm
      mode="edit"
      initial={{
        name: evaluator.name,
        description: evaluator.description,
        prompt: evaluator.prompt,
        temperature: evaluator.temperature,
      }}
    />
  );
};

export default EvaluatorsEdit;