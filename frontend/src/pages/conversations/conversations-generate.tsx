import React from "react";
import { useNavigate } from "react-router-dom";

const ConversationsGenerate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-[#fafbfc] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Generate New Conversation</h1>
        <div className="text-gray-400 text-sm">
          Define parameters to generate a new conversation.
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-8 max-w-xl">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-500 text-sm mb-1">
              Number of Conversations
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100">
              <option>Value</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1">Persona</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100">
              <option>Value</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1">
              Number of Conversation Turn
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100">
              <option>Value</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1">Goal</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100">
              <option>Value</option>
            </select>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" id="save-turn" className="mr-2" />
          <label htmlFor="save-turn" className="text-gray-500 text-sm">
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
            Generate Conversation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationsGenerate;
