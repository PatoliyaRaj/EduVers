import React from "react";
import {
  Medal,
  Sparkles,
  Palette,
  Terminal,
  Zap,
  PlusCircle,
} from "lucide-react";

function AcademicHonors() {
  const honors = [
    {
      label: "Top 1%",
      icon: Medal,
      color: "text-amber-600",
      bg: "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-amber-900/10 dark:to-amber-900/20",
      border: "border border-amber-200/50 dark:border-amber-700/30",
    },
    {
      label: "Genesis",
      icon: Sparkles,
      color: "text-blue-600",
      bg: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/10 dark:to-blue-900/20",
      border: "border border-blue-200/50 dark:border-blue-700/30",
    },
    {
      label: "Creative",
      icon: Palette,
      color: "text-purple-600",
      bg: "bg-gradient-to-br from-purple-50 to-fuchsia-100 dark:from-purple-900/10 dark:to-purple-900/20",
      border: "border border-purple-200/50 dark:border-purple-700/30",
    },
    {
      label: "Architect",
      icon: Terminal,
      color: "text-green-600",
      bg: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/10 dark:to-green-900/20",
      border: "border border-green-200/50 dark:border-green-700/30",
    },
    {
      label: "Speed",
      icon: Zap,
      color: "text-orange-600",
      bg: "bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/10 dark:to-orange-900/20",
      border: "border border-orange-200/50 dark:border-orange-700/30",
    },
  ];

  const HonorBadge = ({ label, icon: Icon, color, bg, border }) => (
    <div
      className={` group badge-3d aspect-square ${bg} rounded-2xl flex flex-col items-center justify-center ${color} ${border} cursor-pointer p-3 group animate-fade-in  dark:border-slate-700`}
    >
      <Icon className="mb-1 drop-shadow-md" size={28} />
      <span className="text-[9px] font-extrabold uppercase tracking-widest text-center opacity-70 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );

  return (
    <section className="bg-white dark:dark-glass rounded-2xl md:rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/5 shadow-md dark:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1.5 h-8 bg-studprimary dark:bg-premium-gold rounded-full shadow-[0_0_10px_#B08D57]"></div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Achievements
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-5 md:gap-6">
        {honors.map((honor) => (
          <div
            key={honor.label}
            className={`aspect-square bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center ${honor.color} dark:${honor.color}/20 border border-slate-200 dark:border-white/20 shadow-sm hover:-translate-y-1 hover:border-studprimary dark:hover:border-premium-gold transition-all cursor-pointer group`}
          >
            <honor.icon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          </div>
        ))}
        <div className="aspect-square bg-slate-50/50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 dark:text-slate-600 border-2 border-dashed border-slate-200 dark:border-white/10 hover:text-studprimary dark:hover:text-premium-gold transition-all cursor-pointer">
          <PlusCircle className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}

export default AcademicHonors;
