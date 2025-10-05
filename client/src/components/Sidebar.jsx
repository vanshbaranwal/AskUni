import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Sidebar({
  chatHistory,
  setChatHistory,
  startNewChat,
  loadChat,
  currentUserId,
  activeChatIndex,
  setMessages,
  setActiveChatIndex,
}) {

  const deleteChat = async (chatId, index) => {
    const isSaved = Boolean(chatId); // check if chat is saved in backend

    try {
      if (isSaved) {
        // Delete from backend
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/chats/${currentUserId}/${chatId}`);
      }
      
      // Remove from local state
      const newHistory = [...chatHistory];
      newHistory.splice(index, 1);
      setChatHistory(newHistory);

      // Clear main chat if deleted chat is active
      if (index === activeChatIndex) {
        setMessages([]);
        setActiveChatIndex(null);
      } else if (index < activeChatIndex) {
        setActiveChatIndex(prev => prev - 1);
      }

    } catch (err) {
      console.error("Failed to delete chat:", err);
    }
  };

  return (
    <div className="sidebar">
      <button className="new-chat" onClick={startNewChat}>
        + New Chat
      </button>
      

      <h2>History</h2>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-preview">
            <div onClick={() => loadChat(index)}>
              {chat.messages?.[0]?.content || "Empty chat"}
            </div>
           
            <button onClick={() => deleteChat(chat._id, index)}>
              <DeleteIcon style={{ fontSize: 16 }} />
            </button>
          </div>
        ))}
      </div>
      {/* <button>
        SignedIn
      </button> */}
    </div>
  );
}
