import { useNavigate } from "react-router-dom";
import { conversations } from "./conversations-mock"; 

const statusIcon = (status: string) => {
  if (status === "success")
    return <span className="text-green-500 mr-2">●</span>;
  if (status === "warning")
    return <span className="text-yellow-500 mr-2">●</span>;
  return <span className="text-gray-300 mr-2">●</span>;
};

const ConversationsList = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-[#fafbfc] min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Conversations</h1>
        <div className="flex gap-3">
          <button
            className="bg-violet-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-violet-700 transition"
            onClick={() => navigate("/conversations/generate")}
          >
            + Generate
          </button>
          <button
            className="bg-violet-50 text-violet-700 px-5 py-2 rounded-lg font-medium border border-violet-100 hover:bg-violet-100 transition"
            onClick={() => navigate("/conversations/upload")}
          >
            + Upload
          </button>
        </div>
      </div>
      <p className="text-gray-400 mb-6">
        View and manage all conversations in your workspace.
      </p>
      <input
        type="text"
        placeholder="Search conversations…"
        className="w-full mb-6 px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
      />
      <div className="bg-white rounded-xl shadow-sm">
        {conversations.map((conv, idx) => (
          <div
            key={conv.id}
            className={`flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50 transition ${
              idx !== conversations.length - 1 ? "border-b border-gray-100" : ""
            }`}
            onClick={() => navigate(`/conversations/${conv.id}`)}
          >
            <div className="flex items-center">
              {statusIcon(conv.status)}
              <div>
                <div className="font-medium">{conv.title}</div>
                <div className="text-gray-400 text-xs">
                  {conv.messages.length} messages • {conv.time}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Updated: {conv.updated}</span>
              <span className="text-xl text-gray-300">{'>'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationsList;
