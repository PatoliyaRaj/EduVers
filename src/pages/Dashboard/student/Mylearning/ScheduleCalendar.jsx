import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./calendar-custom.css";
import { MoveLeft, MoveRight } from "lucide-react";

function ScheduleCalendar() {
  const [date, setDate] = useState(new Date());
  const [activeMonth, setActiveMonth] = useState(new Date());

  const classDays = [5, 12, 16];

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveMonth(activeStartDate);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();

      // Check against current active month for demonstration
      if (month === 1 && year === 2026) {
        // February 2026 (current context)
        if (day === 12) return "current-day-active";
        if (classDays.includes(day)) return "has-class-dot";
      }
    }
    return null;
  };

  return (
    <div className="white-card rounded-3xl p-6 border border-slate-100 dark:border-white/10 dark:dark-glass">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-studprimary dark:bg-premium-gold rounded-full shadow-[0_0_8px_rgba(176,141,87,0.4)]"></span>
          Schedule
        </h4>
        <div className="text-[10px] font-black text-studprimary dark:text-premium-gold bg-studprimary/10 dark:bg-premium-gold/10 px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-sm">
          {moment(activeMonth).format("MMMM YYYY")}
        </div>
      </div>

      <div className="premium-calendar-container min-h-[300px]">
        <Calendar
          onChange={setDate}
          value={date}
          onActiveStartDateChange={handleActiveStartDateChange}
          calendarType="gregory"
          view="month"
          minDetail="month"
          prevLabel={
            <div className="flex items-center justify-center">
              <MoveLeft size={16} strokeWidth={2.5} />
            </div>
          }
          nextLabel={
            <div className="flex items-center justify-center">
              <MoveRight size={16} strokeWidth={2.5} />
            </div>
          }
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={true}
          tileClassName={tileClassName}
        />

        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-studprimary dark:bg-premium-gold"></div>
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight">
              Class Today
            </span>
          </div>
          <button className="text-[10px] font-black text-studprimary dark:text-premium-gold hover:underline uppercase tracking-tighter">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCalendar;
