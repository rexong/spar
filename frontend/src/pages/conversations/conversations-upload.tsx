import React from "react";
import { useNavigate } from "react-router-dom";

const ConversationsUpload: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-[#fafbfc] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Upload Conversation</h1>
        <div className="text-gray-400 text-sm">
          Upload a conversation file in JSON format.
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-8 max-w-xl">
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg py-12 mb-6">
          <span className="text-4xl mb-2">📤</span>
          <div className="text-gray-400 mb-2">Upload File in JSON</div>
          <input type="file" className="hidden" id="file-upload" />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-violet-50 text-violet-700 px-4 py-2 rounded-lg border border-violet-100 hover:bg-violet-100 transition"
          >
            Choose File
          </label>
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" id="save-turn" className="mr-2" />
          <label
            htmlFor="save-turn"
            className="text-gray-500 text-sm"
          >
            Save Each Conversation Turn
            <span className="ml-1 text-gray-300">
              (If there are 20 Conversation Turns, 20 Conversations will be saved)
            </span>
          </label>
        </div>
        <div className="flex justify-end gap-3">
          <button
            className="border border-gray-200 bg-white text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => navigate("/conversations")}
          >
            Cancel
          </button>
          <button className="bg-violet-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-violet-700 transition">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationsUpload;
