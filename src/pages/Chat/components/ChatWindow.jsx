import React, { useEffect, useRef } from "react";
import {
  Search,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  Megaphone,
  Lock,
  User,
} from "lucide-react";

export const ChatHeader = ({ selectedChat, showProfile, setShowProfile }) => (
  <header className="h-20 shrink-0 border-b border-slate-100 dark:border-white/5 flex items-center justify-between px-6 bg-white/50 dark:bg-navy-charcoal/50 backdrop-blur-md z-10">
    <div className="flex items-center gap-4">
      <div className="size-11 rounded-2xl bg-lavender-light dark:bg-premium-gold/10 flex items-center justify-center text-studprimary dark:text-premium-gold border border-studprimary/10">
        {selectedChat?.type === "group" ? (
          <Lock size={20} />
        ) : (
          <User size={20} />
        )}
      </div>
      <div
        onClick={() => setShowProfile(!showProfile)}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {selectedChat?.name}
          </h2>
          {selectedChat?.isStaff && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-studprimary/10 dark:bg-premium-gold/10 text-studprimary dark:text-premium-gold border border-studprimary/20 uppercase tracking-tighter">
              Staff Only
            </span>
          )}
        </div>
        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
          <span
            className={`size-1.5 rounded-full ${selectedChat?.online ? "bg-green-500" : "bg-slate-300"}`}
          ></span>
          {typeof selectedChat?.online === "number"
            ? `${selectedChat?.online} members online`
            : selectedChat?.online
              ? "Active Now"
              : "Offline"}{" "}
          • Academic Hub
        </div>
      </div>
    </div>

    <div className="flex items-center gap-2">
      <button className="p-2.5 rounded-xl text-slate-400 hover:text-studprimary dark:hover:text-premium-gold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
        <Search size={20} />
      </button>
      <button className="p-2.5 rounded-xl text-slate-400 hover:text-studprimary dark:hover:text-premium-gold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
        <Video size={20} />
      </button>
      <button className="p-2.5 rounded-xl text-slate-400 hover:text-studprimary dark:hover:text-premium-gold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
        <MoreVertical size={20} />
      </button>
    </div>
  </header>
);

export const MessageList = ({ messagesData }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messagesData]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar bg-slate-50/30 dark:bg-transparent scroll-smooth"
    >
      <div className="flex items-center gap-4 py-4">
        <div className="h-px flex-1 bg-slate-200 dark:bg-white/5"></div>
        <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-white dark:bg-navy-charcoal px-3">
          Today
        </span>
        <div className="h-px flex-1 bg-slate-200 dark:bg-white/5"></div>
      </div>

      {messagesData.map((msg, index) => (
        <div
          key={msg.id || index}
          className={`flex flex-col animate-message ${
            msg.type === "broadcast"
              ? "items-center translate-y-2"
              : msg.isMe
                ? "items-end"
                : "items-start"
          }`}
        >
          {msg.type === "broadcast" ? (
            <div className="bg-studprimary/5 dark:bg-premium-gold/5 border border-studprimary/10 dark:border-premium-gold/10 rounded-3xl p-6 w-full max-w-lg text-center shadow-sm">
              <div className="size-12 rounded-2xl bg-studprimary/10 dark:bg-premium-gold/10 flex items-center justify-center text-studprimary dark:text-premium-gold mx-auto mb-4">
                <Megaphone size={24} />
              </div>
              <p className="text-[10px] font-extrabold text-studprimary dark:text-premium-gold uppercase tracking-tighter mb-2">
                SYSTEM BROADCAST SENT
              </p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 italic px-4 leading-relaxed font-display">
                "{msg.content}"
              </p>
              <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 mt-4">
                Triggered by Admin • {msg.time}
              </p>
            </div>
          ) : (
            <div
              className={`flex gap-3 max-w-[85%] md:max-w-[70%] ${
                msg.isMe ? "flex-row-reverse" : ""
              }`}
            >
              {!msg.isMe && (
                <div className="size-9 rounded-full shrink-0 border border-slate-200 dark:border-white/10 overflow-hidden bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                  {msg.avatar ? (
                    <img
                      src={msg.avatar}
                      className="w-full h-full object-cover"
                      alt={msg.sender}
                    />
                  ) : (
                    <User size={16} className="text-slate-400" />
                  )}
                </div>
              )}
              <div className={`flex flex-col ${msg.isMe ? "items-end" : ""}`}>
                <div className="flex items-baseline gap-2 mb-1.5 px-1">
                  <span className="text-[11px] font-bold text-slate-900 dark:text-slate-200">
                    {msg.sender}
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
                    {msg.time}
                  </span>
                </div>
                <div
                  className={`p-4 rounded-3xl shadow-sm ${
                    msg.isMe
                      ? "bg-studprimary dark:bg-premium-gold text-white dark:text-deep-charcoal rounded-tr-none"
                      : "bg-white dark:bg-white/10 border border-slate-100 dark:border-white/5 text-slate-800 dark:text-slate-200 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed font-medium">
                    {msg.content}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const MessageInput = ({ message, setMessage, onSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <footer className="p-6 shrink-0 bg-white dark:bg-navy-charcoal border-t border-slate-100 dark:border-white/5">
      <div className="bg-slate-50 dark:bg-white/5 rounded-3xl p-3 border border-slate-200 dark:border-white/5 shadow-inner">
        <div className="flex gap-4 px-3 py-2 border-b border-slate-200 dark:border-white/5 mb-2">
          <button className="text-slate-400 hover:text-studprimary dark:hover:text-premium-gold transition-colors">
            <Paperclip size={18} />
          </button>
          <button className="text-slate-400 hover:text-studprimary dark:hover:text-premium-gold transition-colors">
            <Smile size={18} />
          </button>
          <div className="h-4 w-px bg-slate-200 dark:bg-white/10 my-auto"></div>
          <button className="text-[10px] font-extrabold text-slate-400 hover:text-studprimary transition-colors">
            B
          </button>
          <button className="text-[10px] font-extrabold italic text-slate-400 hover:text-studprimary transition-colors">
            I
          </button>
        </div>
        <div className="flex gap-3 items-center px-1">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none outline-none text-sm resize-none h-12 dark:text-white transition-all custom-scrollbar py-2"
          />
          <button
            onClick={onSend}
            disabled={!message.trim()}
            className="shrink-0 size-11 bg-studprimary dark:bg-premium-gold text-white dark:text-deep-charcoal rounded-2xl flex items-center justify-center shadow-lg shadow-studprimary/20 dark:shadow-premium-gold/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            <Send size={18} fill="currentColor" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const ChatWindow = ({
  selectedChat,
  messagesData,
  message,
  setMessage,
  showProfile,
  setShowProfile,
  onSendMessage,
}) => {
  return (
    <main className="flex-1 flex flex-col h-full bg-white dark:bg-navy-charcoal overflow-hidden relative">
      <ChatHeader
        selectedChat={selectedChat}
        showProfile={showProfile}
        setShowProfile={setShowProfile}
      />
      <MessageList messagesData={messagesData} />
      <MessageInput
        message={message}
        setMessage={setMessage}
        onSend={onSendMessage}
      />
    </main>
  );
};

export default ChatWindow;
