export default function Sidebar({ chatHistory, startNewChat }) {
  return (
    <div className="sidebar">
      <button className="new-chat" onClick={startNewChat}>
        + New Chat
      </button>

      <h2>History</h2>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-preview">
            {chat[0]?.content || "Empty chat"}
          </div>
        ))}
      </div>
    </div>
  );
}
