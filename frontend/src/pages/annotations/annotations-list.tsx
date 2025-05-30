import React from "react";
import { useNavigate } from "react-router-dom";
import { annotations } from "./annotations-mock";

const statusIcon = (status: string) =>
  status === "success" ? (
    <span className="text-green-500 mr-2">✔</span>
  ) : (
    <span className="text-red-500 mr-2">✖</span>
  );

const AnnotationsList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-[#fafbfc] min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Annotations</h1>
        <button
          className="bg-violet-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-violet-700 transition"
          onClick={() => navigate("/annotations/start")}
        >
          + New Annotation
        </button>
      </div>
      <input
        type="text"
        placeholder="Search annotations…"
        className="w-full mb-6 px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
      />
      <div className="bg-white rounded-xl shadow-sm">
        {annotations.map((a, idx) => (
          <div
            key={a.id}
            className={`flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50 transition ${
              idx !== annotations.length - 1 ? "border-b border-gray-100" : ""
            }`}
            onClick={() => navigate(`/annotations/${a.id}`)}
          >
            <div className="flex items-center">
              {statusIcon(a.status)}
              <div>
                <div className="font-medium text-violet-700 hover:underline">
                  Conversation {a.conversation}
                </div>
                <div className="text-gray-400 text-xs">{a.summary}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>By {a.author}</span>
              <span>{a.date}</span>
              <span className="text-xl text-gray-300">{'>'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnotationsList;