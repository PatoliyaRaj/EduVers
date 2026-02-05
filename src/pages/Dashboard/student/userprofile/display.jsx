import React from "react";
import { Camera, MapPin, Mail, Globe, Link } from "lucide-react";
import profileImg from "../../../../assets/imgs/profile-placeholder.jpg";
import { useProfile } from "./useProfile";

function Display() {
  const { user, handleSave, isUpdating } = useProfile();

  return (
    <section className="relative bg-white dark:bg-navy-charcoal rounded-2xl md:rounded-[2.5rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm dark:shadow-2xl">
      <div className="h-40 sm:h-52 md:h-64 relative overflow-hidden bg-gradient-to-r dark:from-[#121215] dark:via-navy-charcoal dark:to-[#121215]">
        <div className="soft-focus-bg absolute inset-0 dark:hidden"></div>
        <div
          className="absolute inset-0 opacity-20 pointer-events-none hidden dark:block"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #B08D57 0%, transparent 70%)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-transparent via-transparent"></div>

        {/* Refine Cover Button - Dark Mode only or styled for both */}
        {/* <button className="absolute top-4 right-4 md:top-6 md:right-6 bg-studprimary dark:bg-premium-gold text-white dark:text-deep-charcoal px-4 py-2 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-studprimary/20 dark:shadow-premium-gold/20">
          <Camera className="w-3 h-3 md:w-4 md:h-4" />
          Refine Cover
        </button> */}
      </div>

      <div className="px-4 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 -mt-16 sm:-mt-20 md:-mt-24 relative flex flex-col md:flex-row items-center md:items-end gap-4 sm:gap-6 md:gap-10">
        <div className="relative group flex-shrink-0">
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl md:rounded-[2.5rem] p-1 md:p-1.5 bg-gradient-to-tr from-studprimary to-[#dcc3a1] dark:from-premium-gold dark:to-[#dcc3a1] shadow-2xl dark:shadow-premium-gold/30">
            <img
              alt="User Profile"
              className="w-full h-full rounded-[1.2rem] md:rounded-[2.2rem] object-cover border-4 border-white dark:border-navy-charcoal"
              src={profileImg}
            />
          </div>
          <button className="absolute -bottom-1 -right-1 bg-white dark:bg-navy-charcoal p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl hover:scale-110 transition-transform border border-slate-200 dark:border-white/10">
            <Camera className="w-4 h-4 md:w-5 md:h-5 text-studprimary dark:text-premium-gold" />
          </button>
        </div>

        <div className="flex-1 text-center md:text-left pb-2 md:pb-4 pt-4 md:pt-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              {`${user?.firstName} ${user?.lastName || "User"}`}
              <span className="bg-amber-500/10 dark:bg-premium-gold/20 p-1 rounded-full">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-amber-600 dark:text-premium-gold" />
              </span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-semibold text-sm sm:text-base md:text-lg mb-4 md:mb-6 flex items-center justify-center md:justify-start gap-2">
            Full-Stack Architect{" "}
            <span className="text-slate-400 dark:text-premium-gold/70">
              San Francisco, USA
            </span>
          </p>

          {/* Contact Info & Social Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-amber-500 dark:text-premium-gold" />
              <span className="text-xs sm:text-sm font-medium">
                San Francisco, CA
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-400">
              <Mail className="w-4 h-4 text-amber-500 dark:text-premium-gold" />
              <span className="text-xs sm:text-sm font-medium">
                {user?.email || "Not provided"}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-4 pb-2 md:pb-4 w-full md:w-auto justify-center md:justify-end md:flex-wrap">
          <button
            onClick={handleSave}
            disabled={isUpdating}
            className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-studprimary dark:bg-premium-gold text-white dark:text-deep-charcoal font-bold rounded-xl md:rounded-2xl shadow-xl shadow-studprimary/20 dark:shadow-premium-gold/20 hover:translate-y-[-2px] transition-all text-xs"
          >
            {isUpdating ? "Saving..." : "Save Profile"}
          </button>
          <button className="px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 bg-white dark:bg-white/5 text-slate-600 dark:text-white font-bold rounded-xl md:rounded-2xl border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all text-xs">
            Preview
          </button>
        </div>
      </div>
    </section>
  );
}

export default Display;
