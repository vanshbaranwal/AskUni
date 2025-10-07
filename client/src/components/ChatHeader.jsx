import { useTranslation } from "react-i18next";
import chat_icon from "/icons/chat.png";
import left_arrow from "/icons/left-arrow.png";


export default function ChatHeader() {
  const { t } = useTranslation();
  function  show_histoy(){
    document.querySelector(".sidebar").classList.add("show");
    var side = document.querySelector(".sidebar");
    console.log(side)
  }
  return (
    <div className="chat-header">
      <a onClick={show_histoy}><img className="chat-icon" height="30px" src={chat_icon} alt="" srcset="" /></a>
      <h2>AskUni</h2>
        <a className="" href="/">
          <img height="30px" src={left_arrow} alt="" />
        </a>

    
        
    </div>
  );
}
