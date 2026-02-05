import React from "react";

const ProgressCard = ({
  icon: Icon,
  badgeColor,
  badgeBg,
  title,
  instructor,
  completion,
  lessonsDone,
  lessonsTotal,
  category,
  iconBg,
}) => {
  const completionPercent = `${completion}%`;

  return (
    <div className="bg-white dark:dark-glass p-5 rounded-2xl border border-slate-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-premium-gold/5 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center ${badgeColor}`}
        >
          {Icon ? <Icon className="w-6 h-6" aria-hidden="true" /> : null}
        </div>
        <span
          className={`px-3 py-1 ${badgeBg} ${badgeColor} text-[10px] font-extrabold uppercase rounded-lg`}
        >
          {category}
        </span>
      </div>
      <h4 className="font-bold text-lg mb-2 group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors text-slate-900 dark:text-white/90">
        {title}
      </h4>
      <p className="text-sm text-slate-500 mb-6 dark:text-slate-300">
        Instructor: {instructor}
      </p>
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold dark:text-white/80 ">
          <span>{completionPercent} Complete</span>
          <span className="text-slate-400 dark:text-white/70">
            {lessonsDone}/{lessonsTotal} Lessons
          </span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full overflow-hidden">
          <div
            className="bg-studprimary dark:bg-premium-gold h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(176,141,87,0.3)]"
            style={{ width: completionPercent }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
