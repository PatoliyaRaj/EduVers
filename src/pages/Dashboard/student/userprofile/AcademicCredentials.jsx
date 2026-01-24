import React from 'react';
import { useProfile } from './ProfileContext';

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
    <section className="bg-white dark:bg-sidebar-dark rounded-2xl refined-border p-10  border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-8 bg-studprimary rounded-full"></div>
          <h3 className="text-2xl font-bold tracking-tight dark:text-white">Academic Credentials</h3>
        </div>
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        <div className="space-y-3">
          <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
            First Name
          </label>
          <input
            name="firstName"
            className="w-full bg-transparent border-b border-slate-200 dark:border-slate-700 focus:border-studprimary focus:outline-none px-1 py-2 text-base font-medium text-slate-900 dark:text-white transition-all"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-3">
          <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
            Last Name
          </label>
          <input
            name="lastName"
            className="w-full bg-transparent border-b border-slate-200 dark:border-slate-700 focus:border-studprimary focus:outline-none px-1 py-2 text-base font-medium text-slate-900 dark:text-white transition-all"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-3">
          <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
            Academic Email
          </label>
          <input
            name="email"
            className="w-full bg-transparent border-b border-slate-200 dark:border-slate-700 focus:border-studprimary focus:outline-none px-1 py-2 text-base font-medium text-slate-900 dark:text-white transition-all cursor-not-allowed opacity-60"
            type="email"
            value={formData.email}
            readOnly
          />
        </div>
        <div className="space-y-3">
          <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
            Contact Reference
          </label>
          <input
            name="phoneNo"
            className="w-full bg-transparent border-b border-slate-200 dark:border-slate-700 focus:border-studprimary focus:outline-none px-1 py-2 text-base font-medium text-slate-900 dark:text-white transition-all"
            type="text"
            value={formData.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-3">
          <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
            Primary Campus
          </label>
          <input
            name="campus"
            className="w-full bg-transparent border-b border-slate-200 dark:border-slate-700 focus:border-studprimary focus:outline-none px-1 py-2 text-base font-medium text-slate-900 dark:text-white transition-all"
            type="text"
            value={formData.campus}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2 space-y-3">
          <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
            Academic Statement &amp; Bio
          </label>
          <textarea
            name="about"
            className="w-full bg-slate-50/50 dark:bg-slate-800/50 border-none rounded-2xl p-5 text-sm font-medium leading-relaxed text-slate-900 dark:text-white placeholder:text-slate-400"
            rows="5"
            value={formData.about}
            onChange={handleChange}
            placeholder="Enter Your Bio here ...."
          />
        </div>
      </div>
    </section>
  );
}

export default AcademicCredentials;
