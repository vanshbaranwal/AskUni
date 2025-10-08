import cross from "/icons/cross.png";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserButton, SignedIn, SignOutButton, useUser } from "@clerk/clerk-react";

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
  const { user } = useUser();

  // When user clicks “New Chat”
  const handleNewChat = () => {
    startNewChat(); // uses logic from Chat.jsx (resets activeChatId & messages)
    setActiveChatIndex(null);
    setMessages([]);
  };

  // Delete a specific chat
  const deleteChat = async (chatId, index) => {
    const isSaved = Boolean(chatId);
    try {
      if (isSaved) {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/chats/${currentUserId}/${chatId}`
        );
      }

      // remove from local state
      const newHistory = [...chatHistory];
      newHistory.splice(index, 1);
      setChatHistory(newHistory);

      if (index === activeChatIndex) {
        setMessages([]);
        setActiveChatIndex(null);
      } else if (index < activeChatIndex) {
        setActiveChatIndex((prev) => prev - 1);
      }
    } catch (err) {
      console.error("Failed to delete chat:", err);
    }
  };

  // for mobile — hide sidebar
  const hideSidebar = () => {
    document.querySelector(".sidebar")?.classList.remove("show");
  };

  return (
    <div className="sidebar">
      {/* New Chat + Cross */}
      <div className="new-chat-container">
        <button className="new-chat" onClick={handleNewChat}>
          + New Chat
        </button>
        <a onClick={hideSidebar}>
          <img className="cross" height="21px" src={cross} alt="close" />
        </a>
      </div>

      {/* Chat History */}
      <h2>History</h2>
      <div className="chat-history">
        {chatHistory.length === 0 ? (
          <p className="no-chat">No chats yet</p>
        ) : (
          chatHistory.map((chat, index) => (
            <div
              key={chat._id || index}
              className={`chat-preview ${
                activeChatIndex === index ? "active" : ""
              }`}
              onClick={() => loadChat(index)}
            >
              <div>{chat.messages?.[0]?.content || "Empty chat"}</div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat._id, index);
                }}
              >
                <DeleteIcon style={{ fontSize: 16 }} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer with User Info */}
      <div className="sidebar-footer">
        <div className="container-profile-r">
          <UserButton />
        </div>
        <span>{user?.fullName}</span>
        <SignedIn>
          <SignOutButton>
            <button className="sign-out">Sign Out</button>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
}
