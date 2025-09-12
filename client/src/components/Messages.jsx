import { useRef, useEffect } from "react";

export default function Messages({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`message ${msg.role === "user" ? "user" : "bot"}`}
        >
          {msg.content}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
