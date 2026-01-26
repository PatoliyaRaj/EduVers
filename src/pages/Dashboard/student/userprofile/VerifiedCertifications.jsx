import React from 'react';
import { Verified, FlaskConical, Download } from 'lucide-react';

const certificatesData = [
  {
    id: 1,
    title: "Advanced React Architect",
    icon: Verified,
    certId: "EV-2026-9921",
  },
  {
    id: 2,
    title: "Data Analysis Specialization",
    icon: FlaskConical,
    certId: "EV-2025-4521",
  }
];

const CertificationCard = ({ title, certId, icon: Icon }) => (
  <div className="group flex items-center gap-5 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-transparent hover:border-primary/20 transition-all cursor-pointer">
    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform hover:text-studprimary border border-slate-200 dark:border-slate-700">
      <Icon className="w-7 h-7 dark:hover:text-studprimary dark:text-slate-200/80 " />
    </div>
    <div className="flex-1">
      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h4>
      <p className="text-[11px] text-slate-500 font-medium mt-1 uppercase tracking-widest">ID: {certId}</p>
    </div>
    <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-studprimary hover:text-white transition-all dark:hover:text-black dark:hover:bg-slate-200">
      <Download className="w-5 h-5" />
    </button>
  </div>
);

function VerifiedCertifications() {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-2xl refined-border p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1.5 h-8 bg-studprimary rounded-full"></div>
        <h3 className="text-xl font-bold tracking-tight dark:text-white">Verified Certifications</h3>
      </div>
      <div className="space-y-5">
        {certificatesData.map((item) => (
          <CertificationCard
            key={item.id}
            title={item.title}
            certId={item.certId}
            icon={item.icon}
          />
        ))}

        <button className="w-full py-4 mt-2 text-xs font-extrabold uppercase tracking-[0.2em] text-primary border border-studprimary/20 rounded-xl hover:bg-studprimary/10 hover:text-studprimary transition-all shadow-sm dark:text-slate-200/60 dark:hover:text-white transition-colors ">
          Access Full Transcript
        </button>
      </div>
    </section>
  );
}

export default VerifiedCertifications;
