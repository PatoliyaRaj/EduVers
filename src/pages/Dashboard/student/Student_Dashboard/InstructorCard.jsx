import React from "react";

const InstructorCard = ({ name, specialty, image, icon }) => {
  return (
    <div className="flex-shrink-0 w-32 flex flex-col items-center text-center group cursor-pointer">
      <div className="w-20 h-20 rounded-full p-1 border-2 border-dashed border-slate-300 dark:border-white/20 group-hover:border-studprimary dark:group-hover:border-premium-gold transition-all duration-500 mb-4 bg-white dark:bg-white/5 shadow-sm">
        {image ? (
          <img
            alt={name}
            className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            src={image}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-400 dark:text-premium-gold">
            <span className="material-icons-outlined text-3xl">{icon}</span>
          </div>
        )}
      </div>
      <h5 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors">
        {name}
      </h5>
      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1.5">
        {specialty}
      </p>
    </div>
  );
};

export default InstructorCard;
