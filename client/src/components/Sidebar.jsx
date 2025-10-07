
import cross from "/icons/cross.png";
import {
  UserButton,
} from "@clerk/clerk-react";

import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { SignedIn, SignOutButton, useUser } from "@clerk/clerk-react";

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

  const deleteChat = async (chatId, index) => {
    const isSaved = Boolean(chatId);

    try {
      if (isSaved) {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/chats/${currentUserId}/${chatId}`
        );
      }

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

  const isNewChatDisabled = activeChatIndex !== null; // disable when viewing old chat
  function  show_histoy(){
    document.querySelector(".sidebar").classList.remove("show");
    var side = document.querySelector(".sidebar");
    console.log(side)
  }
  return (
    <div className="sidebar">
      {/* New Chat Button */}
      <div className="new-chat-container">
      <button
        className="new-chat"
        onClick={() => {
          if (!isNewChatDisabled) startNewChat();
        }}
        disabled={isNewChatDisabled}
        style={{
          opacity: isNewChatDisabled ? 0.5 : 1,
          cursor: isNewChatDisabled ? "not-allowed" : "pointer",
        }}
      >
        + New Chat
      </button>
      <a  onClick={show_histoy} ><img  className="cross" height="21px" src={cross} alt="" /></a>
        </div>
      {/* Chat History */}
      <h2>History</h2>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
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
        ))}
      </div>

      {/* User Info + Sign Out */}
      <div className="sidebar-footer">
        <div className="container-profile-r"><UserButton/></div>
        
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



{/* <div className="sidebar">
      <div className="new-chat-container">
        <button className="new-chat" onClick={startNewChat}>
        + New Chat
      </button>
      <a  onClick={show_histoy} ><img  className="cross" height="21px" src={cross} alt="" /></a>
      </div> */}