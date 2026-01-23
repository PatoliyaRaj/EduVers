import React from 'react';

function ProficiencyMetrics() {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-2xl refined-border p-10">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-8 bg-primary rounded-full"></div>
          <h3 className="text-2xl font-bold tracking-tight">Proficiency Metrics</h3>
        </div>
        <button className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors uppercase tracking-widest border border-primary/10">
          Recalibrate Stats
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Radar Chart */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 radar-grid border border-slate-200 dark:border-slate-700 opacity-20"></div>
          <div className="absolute inset-4 radar-grid border border-slate-200 dark:border-slate-700 opacity-40"></div>
          <div className="absolute inset-8 radar-grid border border-slate-200 dark:border-slate-700 opacity-60"></div>
          <div className="absolute inset-12 radar-grid border border-slate-200 dark:border-slate-700 opacity-80"></div>
          <div className="absolute top-0 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
            <span className="text-[10px] font-bold mt-1 text-slate-400">DEV</span>
          </div>
          <div className="absolute top-20 -right-4 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"></div>
            <span className="text-[10px] font-bold mt-1 text-slate-400">UI/UX</span>
          </div>
          <div className="absolute bottom-4 -right-2 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50"></div>
            <span className="text-[10px] font-bold mt-1 text-slate-400">MKT</span>
          </div>
          <div className="absolute bottom-4 -left-2 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
            <span className="text-[10px] font-bold mt-1 text-slate-400">DATA</span>
          </div>
          <div className="absolute top-20 -left-4 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
            <span className="text-[10px] font-bold mt-1 text-slate-400">EDU</span>
          </div>
          <div className="w-32 h-32 bg-primary/20 radar-grid relative">
            <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="flex-1 w-full space-y-8">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Engineering</span>
              <span className="text-xs font-bold text-blue-500">88%</span>
            </div>
            <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Aesthetic Design</span>
              <span className="text-xs font-bold text-purple-500">72%</span>
            </div>
            <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Quantitative Analysis</span>
              <span className="text-xs font-bold text-green-500">60%</span>
            </div>
            <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProficiencyMetrics;
