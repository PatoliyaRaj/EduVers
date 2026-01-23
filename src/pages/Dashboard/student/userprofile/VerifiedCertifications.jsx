import React from 'react';

function VerifiedCertifications() {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-2xl refined-border p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1.5 h-8 bg-primary rounded-full"></div>
        <h3 className="text-xl font-bold tracking-tight">Verified Certifications</h3>
      </div>
      <div className="space-y-5">
        <div className="group flex items-center gap-5 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-transparent hover:border-primary/20 transition-all cursor-pointer">
          <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-2xl">verified</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Advanced React Architect</h4>
            <p className="text-[11px] text-slate-500 font-medium mt-1 uppercase tracking-widest">ID: EV-2026-9921</p>
          </div>
          <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-lg">download</span>
          </button>
        </div>
        <div className="group flex items-center gap-5 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-transparent hover:border-primary/20 transition-all cursor-pointer">
          <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-2xl">science</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Data Analysis Specialization</h4>
            <p className="text-[11px] text-slate-500 font-medium mt-1 uppercase tracking-widest">ID: EV-2025-4521</p>
          </div>
          <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-lg">download</span>
          </button>
        </div>
        <button className="w-full py-4 mt-2 text-xs font-extrabold uppercase tracking-[0.2em] text-primary border border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
          Access Full Transcript
        </button>
      </div>
    </section>
  );
}

export default VerifiedCertifications;
