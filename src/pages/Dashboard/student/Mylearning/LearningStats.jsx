import React from "react";
import { Clock, Trophy } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, colorClass, iconBg }) => (
  <div className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 group">
    <div
      className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center ${colorClass} shadow-inner transition-transform group-hover:scale-110`}
    >
      <Icon size={24} />
    </div>
    <div>
      <p className="text-[10px] text-slate-500 dark:text-slate-500 font-bold uppercase tracking-wider">
        {label}
      </p>
      <p className="text-xl font-extrabold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  </div>
);

function LearningStats() {
  return (
    <div className="white-card rounded-3xl p-6 border border-slate-100 dark:border-white/10 dark:dark-glass">
      <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-white flex items-center gap-2">
        <span className="w-1.5 h-6 bg-studprimary dark:bg-premium-gold rounded-full shadow-[0_0_8px_rgba(176,141,87,0.4)]"></span>
        Learning Stats
      </h4>
      <div className="space-y-4">
        <StatCard
          icon={Clock}
          label="Total Focus"
          value="24.5 h"
          colorClass="text-studprimary dark:text-premium-gold"
          iconBg="bg-studprimary/10 dark:bg-premium-gold/10"
        />
        <StatCard
          icon={Trophy}
          label="Achievements"
          value="12 Items"
          colorClass="text-indigo-500 dark:text-indigo-400"
          iconBg="bg-indigo-50 dark:bg-indigo-500/10"
        />
      </div>
    </div>
  );
}

export default LearningStats;
