import React from "react";
import { useProfile } from "./useProfile";

function AcademicCredentials() {
  const { formData, handleChange, isLoading, error } = useProfile();

  if (isLoading) {
    return (
      <section className="bg-white dark:bg-sidebar-dark rounded-2xl refined-border p-10  border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-studprimary"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white dark:bg-sidebar-dark rounded-2xl refined-border p-10  border border-slate-200 dark:border-slate-700">
        <div className="text-center text-red-500">
          Failed to load credentials. Please try again.
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:dark-glass rounded-2xl md:rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-8 bg-studprimary dark:bg-premium-gold rounded-full shadow-[0_0_10px_#B08D57]"></div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Personal Data
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        <div className="space-y-3 relative group">
          <label className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 transition-all group-focus-within:text-studprimary dark:group-focus-within:text-premium-gold">
            First Name
          </label>
          <input
            name="firstName"
            className="w-full bg-slate-50/50 dark:bg-[#1A1B23]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 focus:border-studprimary dark:focus:ring-1 dark:focus:ring-premium-gold/40 dark:focus:border-premium-gold/40 focus:outline-none text-sm font-medium text-slate-900 dark:text-slate-200 transition-all"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-3 relative group">
          <label className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 transition-all group-focus-within:text-studprimary dark:group-focus-within:text-premium-gold">
            Last Name
          </label>
          <input
            name="lastName"
            className="w-full bg-slate-50/50 dark:bg-[#1A1B23]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 focus:border-studprimary dark:focus:ring-1 dark:focus:ring-premium-gold/40 dark:focus:border-premium-gold/40 focus:outline-none text-sm font-medium text-slate-900 dark:text-slate-200 transition-all"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-3 relative group">
          <label className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 transition-all group-focus-within:text-studprimary dark:group-focus-within:text-premium-gold">
            Email Address
          </label>
          <input
            name="email"
            className="w-full bg-slate-50/50 dark:bg-[#1A1B23]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 focus:border-studprimary dark:focus:ring-1 dark:focus:ring-premium-gold/40 dark:focus:border-premium-gold/40 focus:outline-none text-sm font-medium text-slate-900 dark:text-slate-200 transition-all cursor-not-allowed opacity-60"
            type="email"
            value={formData.email}
            readOnly
          />
        </div>
        <div className="space-y-3 relative group">
          <label className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 transition-all group-focus-within:text-studprimary dark:group-focus-within:text-premium-gold">
            Phone Number
          </label>
          <input
            name="phoneNo"
            className="w-full bg-slate-50/50 dark:bg-[#1A1B23]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 focus:border-studprimary dark:focus:ring-1 dark:focus:ring-premium-gold/40 dark:focus:border-premium-gold/40 focus:outline-none text-sm font-medium text-slate-900 dark:text-slate-200 transition-all"
            type="text"
            value={formData.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-3 relative group">
          <label className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 transition-all group-focus-within:text-studprimary dark:group-focus-within:text-premium-gold">
            Location
          </label>
          <input
            name="campus"
            className="w-full bg-slate-50/50 dark:bg-[#1A1B23]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 focus:border-studprimary dark:focus:ring-1 dark:focus:ring-premium-gold/40 dark:focus:border-premium-gold/40 focus:outline-none text-sm font-medium text-slate-900 dark:text-slate-200 transition-all"
            type="text"
            value={formData.campus}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2 space-y-3 relative group">
          <label className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 transition-all group-focus-within:text-studprimary dark:group-focus-within:text-premium-gold">
            Professional Bio
          </label>
          <textarea
            name="about"
            className="w-full bg-slate-50/50 dark:bg-[#1A1B23]/50 border border-slate-200 dark:border-white/10 rounded-xl p-5 focus:border-studprimary dark:focus:ring-1 dark:focus:ring-premium-gold/40 dark:focus:border-premium-gold/40 focus:outline-none text-sm font-medium text-slate-900 dark:text-slate-200 transition-all"
            rows="4"
            value={formData.about}
            onChange={handleChange}
            placeholder="Tell us about yourself..."
          />
        </div>
      </div>
    </section>
  );
}

export default AcademicCredentials;
