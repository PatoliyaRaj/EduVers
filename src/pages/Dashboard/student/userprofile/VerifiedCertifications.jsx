import React from "react";
import { Verified, FlaskConical, Download } from "lucide-react";

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
  },
];

const CertificationCard = ({ title, certId, icon: Icon }) => (
  <div className="group flex items-center gap-5 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-transparent hover:border-primary/20 transition-all cursor-pointer">
    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform hover:text-studprimary border border-slate-200 dark:border-slate-700">
      <Icon className="w-7 h-7 dark:hover:text-studprimary dark:text-slate-200/80 " />
    </div>
    <div className="flex-1">
      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
        {title}
      </h4>
      <p className="text-[11px] text-slate-500 font-medium mt-1 uppercase tracking-widest">
        ID: {certId}
      </p>
    </div>
    <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-studprimary hover:text-white transition-all dark:hover:text-black dark:hover:bg-slate-200">
      <Download className="w-5 h-5" />
    </button>
  </div>
);

function VerifiedCertifications() {
  return (
    <section className="bg-white dark:dark-glass rounded-2xl md:rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/5 shadow-md dark:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1.5 h-8 bg-studprimary dark:bg-premium-gold rounded-full shadow-[0_0_10px_#B08D57]"></div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Certificates
        </h3>
      </div>
      <div className="space-y-4 md:space-y-5">
        {certificatesData.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 bg-white dark:bg-premium-gold/10 rounded-xl flex items-center justify-center text-studprimary dark:text-premium-gold shadow-sm group-hover:scale-105 transition-transform border border-slate-200 dark:border-white/5">
              <item.icon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                {item.title}
              </p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                {item.certId}
              </p>
            </div>
            <Download className="w-5 h-5 text-slate-400 group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors" />
          </div>
        ))}

        <button className="w-full py-4 mt-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-studprimary dark:text-premium-gold bg-studprimary/5 dark:bg-premium-gold/10 rounded-2xl hover:bg-studprimary/10 dark:hover:bg-premium-gold/20 transition-all">
          Expand Directory
        </button>
      </div>
    </section>
  );
}

export default VerifiedCertifications;
