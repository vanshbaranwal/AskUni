import { useRef, useEffect } from "react";

export default function Messages({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages">
      <div class="message bot">Hi there! 👋 I’m AskUni, here to make student life at Microtek College, Varanasi easier 🏫.
No more searching PDFs or standing in queues — just ask me about fees, admissions, classes, scholarships, events, and I’ll answer instantly in your preferred language.</div>
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
