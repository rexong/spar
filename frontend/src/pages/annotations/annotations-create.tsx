import React from "react";
import { useNavigate } from "react-router-dom";
import { annotationDetail } from "./annotations-mock";

const AnnotationsCreate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-[#fafbfc] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Create Annotation</h1>
        <div className="text-gray-400 text-sm">
          Number of Annotation Left: <span className="font-semibold text-gray-700">148</span>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-8 max-w-3xl">
        <div className="mb-4 text-gray-500 text-sm flex flex-wrap gap-4">
          <span>
            <span className="font-semibold">Conversation</span>: {annotationDetail.id}
          </span>
          <span>
            <span className="font-semibold">Persona</span>: {annotationDetail.persona}
          </span>
          <span>
            <span className="font-semibold">Goal</span>: {annotationDetail.goal}
          </span>
        </div>
        <div className="mb-4 text-gray-500 text-sm flex flex-wrap gap-4">
          <span>
            <span className="font-semibold">Metric</span>: {annotationDetail.metric}
          </span>
          <span>
            <span className="font-semibold">Metric Definition</span>: {annotationDetail.metricDefinition}
          </span>
        </div>
        <div className="mb-6">
          {annotationDetail.messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-lg px-4 py-2 shadow-sm ${
                  msg.role === "user"
                    ? "bg-violet-50 text-violet-700"
                    : "bg-gray-50 text-gray-700"
                }`}
                style={{ maxWidth: "70%" }}
              >
                <div className="text-xs text-gray-400 mb-1">
                  {msg.role === "user" ? "User" : "Assistant"} • {msg.time}
                </div>
                <div>{msg.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm">
          Annotate based on the last pair of conversation between user and assistant.
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Is this conversation acceptable?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="acceptable" className="accent-violet-600" />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="acceptable" className="accent-violet-600" />
                <span>
                  No <span className="text-gray-400 text-xs">(If not relevant, accept & explain why it is not relevant)</span>
                </span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Comments</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
              rows={3}
              placeholder="Provide your feedback about this conversation…"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="bg-red-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-600 transition"
              onClick={() => navigate("/annotations")}
            >
              Stop
            </button>
            <button
              type="submit"
              className="bg-violet-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-violet-700 transition"
            >
              Save and Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnnotationsCreate;