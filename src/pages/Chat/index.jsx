import React, { useState } from "react";
import ChatSidebar from "./components/ChatSidebar";
import ChatWindow from "./components/ChatWindow";
import ChatProfile from "./components/ChatProfile";
import { chatsData, messagesData } from "./data/chatData";
import "./chat.css";

/* 
  1. Auto scroll to bottom
2. Typing indicator
3. Seen status
4. Message grouping
5. Smooth animations
6. Mobile responsive layout
Polyglot persistence
  */

function ChatInterface() {
  const [selectedChat, setSelectedChat] = useState(chatsData[0]);
  const [message, setMessage] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [messages, setMessages] = useState(messagesData);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "You (Admin)",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      content: message,
      isMe: true,
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <div className="h-screen w-full bg-slate-50 dark:bg-deep-charcoal overflow-hidden flex flex-col">
      <div className="flex-1 flex overflow-hidden gap-4 ">
        <div className="flex flex-1 bg-white dark:bg-navy-charcoal border border-slate-200 dark:border-white/5 overflow-hidden shadow-2xl rounded-3xl">
          <ChatSidebar
            chatsData={chatsData}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />

          <ChatWindow
            selectedChat={selectedChat}
            messagesData={messages}
            message={message}
            setMessage={setMessage}
            onSendMessage={handleSendMessage}
            showProfile={showProfile}
            setShowProfile={setShowProfile}
          />

          {/* Right Aside - Profile Info */}
          <ChatProfile selectedChat={selectedChat} showProfile={showProfile} />
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
