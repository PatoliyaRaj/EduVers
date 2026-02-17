import React from "react";
import { Mail, Phone, ShieldCheck, RotateCcw, UserX } from "lucide-react";

const ChatProfile = ({ selectedChat, showProfile }) => {
  return (
    <aside
      className={`${
        showProfile ? "flex" : "hidden"
      } xl:flex w-80 shrink-0 border-l border-slate-100 dark:border-white/5 flex-col h-full bg-slate-50/30 dark:bg-navy-charcoal/50`}
    >
      <div className="p-8 flex flex-col items-center">
        <div className="relative mb-6">
          <div className="size-28 rounded-full bg-slate-200 dark:bg-white/5 border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden ring-1 ring-slate-100 dark:ring-white/5">
            <img
              src={
                selectedChat?.avatar ||
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAXpRbTllt5IV8cmcFI2v3AspdlxLQLyBIF3dYRo7C3nGKyB1RkF0R1MjNsAa5_I2KN5uuCUMJIAhY3a0rJPk0loXcOJLdC_TlFM3daRao7-2iujJqfTWfGJYE-54lKVsnoD8rG3VQySWGVOUyVvDjcixeUrjSKFvzZ71rCTNhLLQ2KbCAzuMka1E5XulvZtKYtIJ5sQ_oP5f-GAYGMGwozp1L7dQpj6WC06yes_Vnphyqk9BvLNGVRhUEgouY5Lu1i2d3f1_Kjmg"
              }
              alt={selectedChat?.name}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 size-6 bg-green-500 border-4 border-white dark:border-slate-800 rounded-full shadow-md"></div>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {selectedChat?.name}
        </h3>
        <p className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
          {selectedChat?.role || "Faculty Member"}
        </p>

        <div className="flex gap-2 mt-8">
          {[Mail, Phone, ShieldCheck].map((Icon, i) => (
            <button
              key={i}
              className="p-3 rounded-2xl bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-studprimary dark:hover:bg-premium-gold hover:text-white dark:hover:text-deep-charcoal transition-all shadow-sm border border-slate-200 dark:border-white/5"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar space-y-8  overflow-scroll-smooth">
        <div>
          <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
            Professional Overview
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Employee ID
              </span>
              <span className="text-slate-900 dark:text-white">#EDU-9821</span>
            </div>
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Department
              </span>
              <span className="text-slate-900 dark:text-white">
                Applied Sciences
              </span>
            </div>
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Status
              </span>
              <span className="px-2 py-0.5 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-500 rounded-lg text-[10px] border border-green-100 dark:border-green-500/20 uppercase tracking-tight">
                Senior Faculty
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
            Admin Controls
          </p>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:border-studprimary dark:hover:border-premium-gold transition-all text-left shadow-sm">
              <div className="size-9 rounded-xl bg-lavender-light dark:bg-premium-gold/10 flex items-center justify-center text-studprimary dark:text-premium-gold border border-studprimary/5">
                <RotateCcw size={18} />
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                Reset Password
              </span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 bg-red-50/50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10 rounded-2xl hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-all text-left text-red-500 dark:text-red-400">
              <div className="size-9 rounded-xl bg-white dark:bg-red-500/10 flex items-center justify-center border border-red-100/50 dark:border-red-500/10">
                <UserX size={18} />
              </div>
              <span className="text-xs font-bold">Suspend Access</span>
            </button>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
            Admin Notes
          </p>
          <textarea
            placeholder="Add a private staff note..."
            className="w-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl h-24 p-4 outline-none focus:ring-2 focus:ring-studprimary dark:focus:ring-premium-gold transition-all dark:text-white shadow-inner resize-none custom-scrollbar scroll-smooth"
          ></textarea>
        </div>
      </div>
    </aside>
  );
};

export default ChatProfile;
