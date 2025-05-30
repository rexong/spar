import { useParams } from "react-router-dom";
import GoalsForm from "./goals-form";
import { goals } from "./goals-mock";

const GoalsEdit = () => {
  const { id } = useParams<{ id: string }>();
  const goal = goals.find((g) => g.id === Number(id));
  if (!goal) return <div className="p-8">Goal not found</div>;
  return <GoalsForm mode="edit" initial={{ name: goal.name, description: goal.description }} />;
};

export default GoalsEdit;