import React, { useState } from "react";

type Tab = { key: string; label: string };
type GenericViewProps<T> = {
  entity: T | undefined;
  entityType: string;
  notFoundMsg: string;
  title: string;
  subtitle?: string;
  idLabel: string;
  tabs: Tab[];
  renderTab: (tab: string, entity: T) => React.ReactNode;
  editPath?: string;
};

function GenericView<T>({
  entity,
  entityType,
  notFoundMsg,
  title,
  subtitle,
  idLabel,
  tabs,
  renderTab,
  editPath,
}: GenericViewProps<T>) {
  const [tab, setTab] = useState(tabs[0].key);

  if (!entity) {
    return (
      <div className="p-8 bg-slate-50 min-h-screen">
        <h1 className="text-2xl font-semibold">{notFoundMsg}</h1>
      </div>
    );
  }

  // @ts-expect-error: Assuming entity has an 'id' property
  const entityId = entity.id;

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          {subtitle && <div className="text-slate-400 text-xs mb-1">{subtitle}</div>}
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="text-slate-400 text-xs">{idLabel}: {entityId}</div>
        </div>
        <div className="flex gap-2">
          {editPath && (
            <a
              href={editPath.replace(":id", entityId)}
              className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-100"
            >
              Edit {entityType}
            </a>
          )}
          <button className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600">
            Delete {entityType}
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex border-b border-slate-100">
          {tabs.map(t => (
            <button
              key={t.key}
              className={`px-6 py-3 font-medium ${
                tab === t.key
                  ? "border-b-2 border-violet-600 text-violet-700"
                  : "text-slate-500"
              }`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="p-8">{renderTab(tab, entity)}</div>
      </div>
    </div>
  );
}

export default GenericView;