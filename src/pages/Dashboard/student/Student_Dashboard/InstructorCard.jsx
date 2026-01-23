import React from 'react';

const InstructorCard = ({ name, specialty, image, icon }) => {
  return (
    <div className="flex-shrink-0 w-32 flex flex-col items-center text-center group cursor-pointer">
      <div className="w-20 h-20 rounded-full p-1 border-2 border-dashed border-slate-300 dark:border-slate-700 group-hover:border-studprimary transition-all duration-300 mb-3">
        {image ? (
          <img
            alt={name}
            className="w-full h-full rounded-full object-cover"
            src={image}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-slate-100 dark:bg-sidebar-dark flex items-center justify-center text-slate-400">
            <span className="material-icons-outlined text-3xl">{icon}</span>
          </div>
        )}
      </div>
      <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-studprimary transition-colors">
        {name}
      </h5>
      <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wide mt-1">
        {specialty}
      </p>
    </div>
  );
};

export default InstructorCard;
