import React from 'react';
import { SkillsRadarChart } from '../Student_Dashboard/ChartComponents';

function ProficiencyMetrics() {

  const progressData = [
    {
      name: 'Core Engineering',
      value: 88,
      color: 'bg-blue-500',
      text: 'text-blue-500',
    },
    {
      name: 'Aesthetic Design',
      value: 20,
      color: 'bg-purple-500',
      text: 'text-purple-500',
    },
    {
      name: 'Quantitative Analysis',
      value: 70,
      color: 'bg-green-500',
      text: 'text-green-500',
    },
    {
      name: 'Teamwork',
      value: 100,
      color: 'bg-amber-500',
      text: 'text-amber-500',
    },
    {
      name: 'Creativity',
      value: 75,
      color: 'bg-pink-500',
      text: 'text-pink-500',
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 rounded-2xl  p-8 md:p-10 border border-white dark:border-slate-700 shadow-md ">
      <div className="flex items-center justify-between mb-10 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-1.5 h-8 bg-studprimary rounded-full"></div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight dark:text-white">Proficiency Metrics</h3>
        </div>
        <button className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-lg hover:bg-studprimary/10 transition-colors uppercase tracking-widest border border-studprimary/10 dark:border-slate-700 dark:text-white">
          Recalibrate Stats
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Radar Chart */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <SkillsRadarChart data={progressData} title="Skill Proficiency" />
        </div>
        {/* Progress Bars */}
        <div className="flex-1 w-full space-y-7 md:space-y-8">
          {progressData.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between items-center mb-2 md:mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{item.name}</span>
                <span className={`text-xs font-bold ${item.text}`}>{item.value}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full transition-all duration-700`} style={{ width: `${item.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProficiencyMetrics;
