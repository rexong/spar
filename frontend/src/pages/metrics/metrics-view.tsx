import { useParams } from "react-router-dom";
import GenericView from "../../components/generic-view";
import { metrics } from "./metrics-mock";

const MetricsView = () => {
  const { id } = useParams<{ id: string }>();
  const metric = metrics.find(m => m.id === Number(id));

  return (
    <GenericView
      entity={metric}
      entityType="Metric"
      notFoundMsg="Metric Not Found"
      title={metric?.name || ""}
      subtitle="Metric Details"
      idLabel="Metric ID"
      editPath="/metrics/edit/:id"
      tabs={[
        { key: "details", label: "Details" },
        { key: "versions", label: "Version History" },
      ]}
      renderTab={(tab, m) => {
        if (tab === "details") {
          return (
            <>
              <div className="mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded mr-2">
                  Version {m.versions[0].version}
                </span>
              </div>
              <div className="mb-4 text-slate-700">{m.description}</div>
            </>
          );
        }
        if (tab === "versions") {
          return (
            <div>
              {m.versions.map(v => (
                <div
                  key={v.version}
                  className="flex items-center justify-between border-b last:border-b-0 border-slate-100 py-4"
                >
                  <div>
                    <div className="font-medium">
                      Version {v.version}
                      {v.version === m.versions[0].version && (
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

export default MetricsView;