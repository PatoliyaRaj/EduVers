import React from "react";
import { Camera, MapPin, Mail, Globe, Link } from "lucide-react";
import profileImg from "../../../../assets/imgs/profile-placeholder.jpg";
import { useProfile } from "./ProfileContext";

function Display() {
  const { user, handleSave, isUpdating } = useProfile();

  return (
    <section className="relative bg-white dark:bg-slate-900 rounded-2xl md:rounded-[2.5rem] border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
      <div className="h-40 sm:h-52 md:h-64 relative overflow-hidden">
        <div className="soft-focus-bg absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent"></div>
      </div>

      <div className="px-4 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 -mt-16 sm:-mt-20 md:-mt-24 relative flex flex-col md:flex-row items-center md:items-end gap-4 sm:gap-6 md:gap-10">
        <div className="relative group flex-shrink-0">
          <img
            alt="User Profile"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl md:rounded-3xl object-cover border-4 md:border-[6px] border-white dark:border-studprimary shadow-2xl"
            src={profileImg}
          />
          <button className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-studprimary text-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl hover:scale-105 transition-transform border-2 md:border-4 border-white dark:border-studprimary dark:bg-white dark:text-studprimary">
            <Camera className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="flex-1 text-center md:text-left pb-2 md:pb-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {`${user?.firstName} ${user?.lastName || 'User'}  `}
            </h2>
            <span className="bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-extrabold px-2 sm:px-3 py-1 rounded-full uppercase tracking-widest border border-amber-500/20">
              Distinguished
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base md:text-lg mb-4 md:mb-6">
            Full-Stack Architect & Educational Enthusiast
          </p>

          {/* Contact Info & Social Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span className="text-xs sm:text-sm font-medium">
                San Francisco, CA
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="w-4 h-4 text-amber-500" />
              <span className="text-xs sm:text-sm font-medium">
                {user?.email || 'Not provided'}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 ml-0 sm:ml-2">
              <a
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-amber-500 transition-colors"
                href="#"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-amber-500 transition-colors"
                href="#"
              >
                <Link className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-4 pb-2 md:pb-4 w-full md:w-auto justify-center md:justify-end  md:flex-wrap">
          <button
            onClick={handleSave}
            disabled={isUpdating}
            className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-studprimary text-white font-bold rounded-lg md:rounded-xl shadow-xl shadow-studprimary/20 hover:bg-studprimary/90 transition-all uppercase tracking-wider text-[10px] sm:text-xs disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </button>
          <button className="px-4 sm:px-6 py-2.5 sm:py-3 md:py-3.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-lg md:rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all uppercase tracking-wider text-[10px] sm:text-xs">
            Preview
          </button>
        </div>
      </div>
    </section>
  );
}

export default Display;
