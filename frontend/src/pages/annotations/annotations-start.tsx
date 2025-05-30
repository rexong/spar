import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { annotationDetail } from "./annotations-mock";

const AnnotationsStart: React.FC = () => {
  const navigate = useNavigate();
  const [metric, setMetric] = useState(annotationDetail.metric);

  return (
    <div className="p-8 bg-[#fafbfc] min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Start Annotation</h1>
      <div className="bg-white rounded-xl shadow p-8 max-w-xl">
        <div className="mb-6">
          <label className="block text-gray-500 text-sm mb-1">Metric</label>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100"
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
          >
            <option value={annotationDetail.metric}>
              {annotationDetail.metric}
            </option>
            <option value="Other Metric">Other Metric</option>
          </select>
        </div>
        <div className="flex justify-end gap-3">
          <button
            className="border border-gray-200 bg-white text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => navigate("/annotations")}
          >
            Cancel
          </button>
          <button
            className="bg-violet-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-violet-700 transition"
            onClick={() => navigate("/annotations/create")}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnotationsStart;