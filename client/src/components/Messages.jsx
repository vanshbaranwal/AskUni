import { useRef, useEffect } from "react";
import botAvatar from '/logo.svg'; // Make sure this path is correct!

export default function Messages({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages">
      {/* Initial Bot Message */}
      <div className="message-container bot">
        {/* Bot Avatar */}
        <img src={botAvatar} alt="Bot Avatar" className="message-avatar" />
        
        {/* Bot Message Bubble */}
        <div className="message-bubble bot">
          Hi there! 👋 I’m AskUni, here to make student life at Microtek College, Varanasi easier 🏫. No more searching PDFs or standing in queues — just ask me about fees, admissions, or even detailed queries about BCA and BBA courses. I’ll answer instantly in your preferred language — including Hindi, Rajasthani and English.
        </div>
      </div>
      
      {/* Mapped Messages */}
      {messages.map((msg, i) => (
        <div
          key={i}
          // The container gets the role class for alignment
          className={`message-container ${msg.role}`}
        >
          {/* Conditionally render avatar only for bot messages */}
          {msg.role === "bot" && (
            <img src={botAvatar} alt="Bot Avatar" className="message-avatar" />
          )}
          
          {/* Message Bubble */}
          <div className={`message-bubble ${msg.role}`}>
            {msg.content}
          </div>
        </div>
      ))}
      
      <div ref={bottomRef} />
    </div>
  );
}