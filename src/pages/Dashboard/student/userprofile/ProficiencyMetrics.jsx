import React from "react";
import { SkillsRadarChart } from "../Student_Dashboard/ChartComponents";

function ProficiencyMetrics() {
  const progressData = [
    {
      name: "Core Engineering",
      value: 88,
      color: "bg-blue-500",
      text: "text-blue-500",
    },
    {
      name: "Aesthetic Design",
      value: 20,
      color: "bg-purple-500",
      text: "text-purple-500",
    },
    {
      name: "Quantitative Analysis",
      value: 70,
      color: "bg-green-500",
      text: "text-green-500",
    },
    {
      name: "Teamwork",
      value: 100,
      color: "bg-amber-500",
      text: "text-amber-500",
    },
    {
      name: "Creativity",
      value: 75,
      color: "bg-pink-500",
      text: "text-pink-500",
    },
  ];

  return (
    <section className="bg-white dark:dark-glass rounded-2xl md:rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/5 shadow-md dark:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-studprimary dark:bg-premium-gold rounded-full shadow-[0_0_10px_#B08D57]"></div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skill Stats
          </h3>
        </div>
        <button className="bg-studprimary/10 dark:bg-white/5 px-4 py-2 rounded-xl text-studprimary dark:text-premium-gold text-xs font-bold flex items-center gap-2 hover:bg-studprimary/20 dark:hover:bg-white/10 transition-colors border border-studprimary/20 dark:border-white/5">
          Recalibrate Stats
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <SkillsRadarChart
            data={progressData}
            title="Skill Proficiency"
            className="dark:bg-white/5"
          />
        </div>
        <div className="flex-1 w-full space-y-7 md:space-y-8">
          {progressData.map((item) => (
            <div key={item.name} className="space-y-4">
              <div className="flex justify-between items-center px-1">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
                  {item.name}
                </span>
                <span
                  className={`text-sm font-extrabold ${item.text} dark:brightness-110`}
                >
                  {item.value}%
                </span>
              </div>
              <div className="h-2.5 md:h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-1000 dark:shadow-[0_0_12px_rgba(176,141,87,0.3)]`}
                  style={{
                    width: `${item.value}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProficiencyMetrics;
