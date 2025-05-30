import React from "react";
import { useNavigate } from "react-router-dom";

type GenericListProps<T> = {
  title: string;
  subtitle: string;
  createPath: string;
  entities: T[];
  getId: (item: T) => number | string;
  getName: (item: T) => string;
  getDetails: (item: T) => React.ReactNode;
  viewPath: (item: T) => string;
};

function GenericList<T>({
  title,
  subtitle,
  createPath,
  entities,
  getId,
  getName,
  getDetails,
  viewPath,
}: GenericListProps<T>) {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <button
          className="flex items-center bg-violet-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-violet-700 transition"
          onClick={() => navigate(createPath)}
        >
          <span className="text-xl mr-2">+</span> New {title.slice(0, -1)}
        </button>
      </div>
      <p className="text-slate-500 mb-6">{subtitle}</p>
      <input
        type="text"
        placeholder={`Search ${title.toLowerCase()}…`}
        className="w-full mb-6 px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
        // Add search logic if needed
      />
      <div className="bg-white rounded-xl shadow-sm">
        {entities.map((item, idx) => (
          <div
            key={getId(item)}
            className={`flex items-center justify-between px-6 py-5 ${
              idx !== entities.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div
              className="font-medium text-violet-700 hover:underline cursor-pointer"
              onClick={() => navigate(viewPath(item))}
            >
              {getName(item)}
            </div>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              {getDetails(item)}
              <span className="text-xl text-slate-300">{'>'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenericList;