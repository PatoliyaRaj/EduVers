import React from "react";

function GoalTracker() {
  const days = [
    { label: "S", completed: true },
    { label: "M", completed: true },
    { label: "T", completed: true },
    { label: "W", completed: false },
    { label: "T", completed: false },
  ];

  return (
    <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-6 shadow-sm dark:dark-glass">
      <h4 className="font-bold text-sm mb-2 text-slate-900 dark:text-white">
        Daily Goal Tracker
      </h4>
      <p className="text-slate-500 dark:text-slate-400 text-[11px] mb-5">
        Complete 1 lesson to maintain your streak.
      </p>
      <div className="flex gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-extrabold transition-all duration-300 ${
              day.completed
                ? "bg-studprimary dark:bg-premium-gold text-white dark:text-deep-charcoal shadow-lg shadow-studprimary/20 dark:shadow-premium-gold/20"
                : "bg-slate-100 dark:bg-white/5 text-slate-400 border border-slate-200 dark:border-white/5"
            }`}
          >
            {day.label}
          </div>
        ))}
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-bold bg-slate-50/50 dark:bg-white/5 text-slate-300">
          W
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-bold bg-slate-50/50 dark:bg-white/5 text-slate-300">
          T
        </div>
      </div>
    </div>
  );
}

export default GoalTracker;
