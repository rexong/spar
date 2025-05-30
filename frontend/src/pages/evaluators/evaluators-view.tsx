import { useParams } from "react-router-dom";
import GenericView from "../../components/generic-view";
import { evaluators } from "./evaluators-mock";

const EvaluatorsView = () => {
  const { id } = useParams<{ id: string }>();
  const evaluator = evaluators.find(e => e.id === Number(id));

  return (
    <GenericView
      entity={evaluator}
      entityType="Evaluator"
      notFoundMsg="Evaluator Not Found"
      title={evaluator?.name || ""}
      subtitle="Evaluator Details"
      idLabel="Evaluator ID"
      editPath="/evaluators/edit/:id"
      tabs={[
        { key: "details", label: "Details" },
        { key: "versions", label: "Version History" },
      ]}
      renderTab={(tab, e) => {
        if (tab === "details") {
          return (
            <>
              <div className="mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded mr-2">
                  Version {e.versions[0].version}
                </span>
              </div>
              <div className="mb-4 text-slate-700">{e.description}</div>
              <div className="mb-2">
                <span className="font-semibold">Prompt:</span> {e.prompt}
              </div>
              <div>
                <span className="font-semibold">Temperature:</span> {e.temperature}
              </div>
            </>
          );
        }
        if (tab === "versions") {
          return (
            <div>
              {e.versions.map(v => (
                <div
                  key={v.version}
                  className="flex items-center justify-between border-b last:border-b-0 border-slate-100 py-4"
                >
                  <div>
                    <div className="font-medium">
                      Version {v.version}
                      {v.version === e.versions[0].version && (
                        <span className="ml-2 text-xs px-2 py-0.5 bg-violet-100 text-violet-700 rounded">
                          Latest
                        </span>
                      )}
                    </div>
                    <div className="text-slate-500 text-sm">
                      Created on {v.date} by {v.author}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-slate-400 hover:text-red-500">🗑️</button>
                    <button className="text-slate-400 hover:text-violet-600">👁️</button>
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return null;
      }}
    />
  );
};

export default EvaluatorsView;