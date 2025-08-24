import React from "react";
import { QuoteIcon } from "lucide-react";

// Reusable Review Card Component
function ReviewCard({
  quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  studentName = "Student Name",
  studentRole = "Graduate Student",
  studentImage = "https://via.placeholder.com/80",
  className = "",
  quoteColor = "text-gray-700",
  textColor = "text-white",
  nameColor = "text-yellow-400",
  roleColor = "text-[#BCA88D]",
}) {
  return (
    <div
      className={`relative w-full max-w-4xl mx-auto px-8 py-12 ${className}`}
    >
      <div className="bg-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
        <div className={`flex justify-center mb-6 ${quoteColor}`}>
          <QuoteIcon className="w-8 h-8 sm:w-12 sm:h-12 "  />
        </div>

        {/* Review Text */}
        <div className="mb-8 sm:mb-12">
          <p
            className={`text-base sm:text-lg lg:text-xl leading-relaxed select-none max-w-3xl mx-auto ${textColor}`}
          >
            {quote}
          </p>
        </div>

        {/* Student Profile */}
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="mb-4">
            <img
              src={studentImage}
              alt={studentName}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white/20 shadow-lg select-none"
            />
          </div>

          {/* Student Info */}
          <div>
            <h4 className={`text-lg sm:text-xl font-bold mb-1 select-none ${nameColor}`}>
              {studentName.toUpperCase()}
            </h4>
            <p className={`text-sm sm:text-base select-none ${roleColor}`}>{studentRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;

