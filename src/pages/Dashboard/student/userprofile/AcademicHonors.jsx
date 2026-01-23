import React from 'react';

function AcademicHonors() {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-2xl refined-border p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1.5 h-8 bg-primary rounded-full"></div>
        <h3 className="text-xl font-bold tracking-tight">Academic Honors</h3>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="badge-3d aspect-square bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-amber-900/10 dark:to-amber-900/20 rounded-2xl flex flex-col items-center justify-center text-amber-600 border border-amber-200/50 dark:border-amber-700/30 cursor-pointer p-4 group">
          <span className="material-symbols-outlined text-4xl mb-2 drop-shadow-md">military_tech</span>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-center opacity-70 group-hover:opacity-100">Top 1%</span>
        </div>
        <div className="badge-3d aspect-square bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/10 dark:to-blue-900/20 rounded-2xl flex flex-col items-center justify-center text-blue-600 border border-blue-200/50 dark:border-blue-700/30 cursor-pointer p-4 group">
          <span className="material-symbols-outlined text-4xl mb-2 drop-shadow-md">auto_awesome</span>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-center opacity-70 group-hover:opacity-100">Genesis</span>
        </div>
        <div className="badge-3d aspect-square bg-gradient-to-br from-purple-50 to-fuchsia-100 dark:from-purple-900/10 dark:to-purple-900/20 rounded-2xl flex flex-col items-center justify-center text-purple-600 border border-purple-200/50 dark:border-purple-700/30 cursor-pointer p-4 group">
          <span className="material-symbols-outlined text-4xl mb-2 drop-shadow-md">palette</span>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-center opacity-70 group-hover:opacity-100">Creative</span>
        </div>
        <div className="badge-3d aspect-square bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/10 dark:to-green-900/20 rounded-2xl flex flex-col items-center justify-center text-green-600 border border-green-200/50 dark:border-green-700/30 cursor-pointer p-4 group">
          <span className="material-symbols-outlined text-4xl mb-2 drop-shadow-md">terminal</span>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-center opacity-70 group-hover:opacity-100">Architect</span>
        </div>
        <div className="badge-3d aspect-square bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/10 dark:to-orange-900/20 rounded-2xl flex flex-col items-center justify-center text-orange-600 border border-orange-200/50 dark:border-orange-700/30 cursor-pointer p-4 group">
          <span className="material-symbols-outlined text-4xl mb-2 drop-shadow-md">bolt</span>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-center opacity-70 group-hover:opacity-100">Speed</span>
        </div>
        <div className="aspect-square bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all cursor-pointer">
          <span className="material-symbols-outlined">add_circle</span>
        </div>
      </div>
    </section>
  );
}

export default AcademicHonors;
