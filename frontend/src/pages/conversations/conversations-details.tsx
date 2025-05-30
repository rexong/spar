import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConversationsDetails: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Conversation Details</h2>
        <button className="text-gray-400 hover:text-gray-600 font-medium" onClick={() => navigate('/conversations')}>Back</button>
      </div>
      <div className="bg-white rounded-xl shadow-md p-8 mb-4">
        <div className="flex flex-col gap-6">
          {/* Example conversation turns */}
          <div className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-gray-700">A</div>
            <div>
              <div className="bg-gray-100 rounded px-4 py-2 text-sm text-gray-800">Hi, I'm here to help you with your order. What can I do for you?</div>
              <div className="text-xs text-gray-400 mt-1">10:32 AM</div>
            </div>
          </div>
          <div className="flex gap-3 items-start flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">U</div>
            <div>
              <div className="bg-blue-50 rounded px-4 py-2 text-sm text-blue-900">Hi, my order isn't here yet. Let's understand the steps. Can you tell me if my status was affected due to the lack of available vehicles?</div>
              <div className="text-xs text-gray-400 mt-1 text-right">10:33 AM</div>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-gray-700">A</div>
            <div>
              <div className="bg-gray-100 rounded px-4 py-2 text-sm text-gray-800">Thank you for the information. However, that update has no such effect on your account and ETA is the same. More information will be shared.</div>
              <div className="text-xs text-gray-400 mt-1">10:34 AM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium">Add Annotation</button>
      </div>
    </div>
  );
};

export default ConversationsDetails;
