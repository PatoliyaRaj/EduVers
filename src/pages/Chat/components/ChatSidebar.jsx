import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Megaphone, LayoutDashboard, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../../components/Tabs";

const ChatSidebar = ({ chatsData, selectedChat, setSelectedChat }) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredChats = chatsData.filter((chat) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return chat.unread > 0;
    if (activeTab === "staff") return chat.isStaff === true;
    return true;
  });

  return (
    <aside className="w-full lg:w-80 border-r border-slate-100 dark:border-white/5 flex flex-col h-full bg-slate-50/30 dark:bg-navy-charcoal/50">
      <div className="p-6 border-b border-slate-100 dark:border-white/5 mb-2">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-studprimary dark:bg-premium-gold flex items-center justify-center text-white dark:text-deep-charcoal shadow-lg">
            <Users size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
              EduVers
            </h1>
            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              Chat Portal
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <button className="w-full flex items-center justify-center gap-2 rounded-2xl h-12 bg-studprimary dark:bg-premium-gold text-white dark:text-deep-charcoal text-sm font-bold shadow-lg shadow-studprimary/20 dark:shadow-premium-gold/20 hover:brightness-110 transition-all active:scale-[0.98]">
          <Megaphone size={18} />
          <span>Send Broadcast</span>
        </button>

        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-studprimary dark:hover:text-premium-gold hover:bg-slate-100 dark:hover:bg-white/5 transition-all group border border-transparent hover:border-studprimary/10 dark:hover:border-premium-gold/10"
        >
          <LayoutDashboard
            size={18}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-sm font-bold tracking-tight">
            Go to Dashboard
          </span>
        </Link>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            placeholder="Search conversations..."
            className="w-full h-11 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl pl-10 pr-4 text-xs focus:ring-2 focus:ring-studprimary dark:focus:ring-premium-gold outline-none transition-all dark:text-white"
          />
        </div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList
            variant="line"
            className="w-full border-none p-0 bg-transparent gap-6"
          >
            <TabsTrigger
              value="all"
              className="px-0 pb-1 text-xs font-bold text-slate-400 dark:text-slate-500 data-[state=active]:text-studprimary dark:data-[state=active]:text-premium-gold bg-transparent border-none shadow-none rounded-none border-b-2 data-[state=active]:border-studprimary dark:data-[state=active]:border-premium-gold transition-all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="unread"
              className="px-0 pb-1 text-xs font-bold text-slate-400 dark:text-slate-500 data-[state=active]:text-studprimary dark:data-[state=active]:text-premium-gold bg-transparent border-none shadow-none rounded-none border-b-2 data-[state=active]:border-studprimary dark:data-[state=active]:border-premium-gold transition-all"
            >
              Unread
            </TabsTrigger>
            <TabsTrigger
              value="staff"
              className="px-0 pb-1 text-xs font-bold text-slate-400 dark:text-slate-500 data-[state=active]:text-studprimary dark:data-[state=active]:text-premium-gold bg-transparent border-none shadow-none rounded-none border-b-2 data-[state=active]:border-studprimary dark:data-[state=active]:border-premium-gold transition-all"
            >
              Staff
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar px-3 space-y-1">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`relative group flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all ${
                selectedChat?.id === chat.id
                  ? "bg-white dark:bg-white/5 shadow-md dark:shadow-none border border-slate-100 dark:border-white/5"
                  : "hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              {selectedChat?.id === chat.id && (
                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-studprimary dark:bg-premium-gold rounded-full"></div>
              )}

              <div className="relative shrink-0">
                {chat.avatar ? (
                  <img
                    src={chat.avatar}
                    className="size-11 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                    alt={chat.name}
                  />
                ) : (
                  <div className="size-11 rounded-2xl bg-lavender-light dark:bg-premium-gold/10 flex items-center justify-center text-studprimary dark:text-premium-gold border border-studprimary/10">
                    <Users size={20} />
                  </div>
                )}
                {chat.online === true && (
                  <div className="absolute -bottom-0.5 -right-0.5 size-3.5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                    {chat.name}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    {chat.time}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <p className="truncate flex-1">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="ml-2 size-5 bg-studprimary dark:bg-premium-gold text-white dark:text-deep-charcoal rounded-full flex items-center justify-center text-[10px] font-extrabold shadow-lg shadow-studprimary/20 dark:shadow-premium-gold/20 scale-90">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-40 text-slate-400">
            <p className="text-xs font-bold">No conversations found</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ChatSidebar;
