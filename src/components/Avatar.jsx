
import React, { useEffect, useRef, useState } from "react";
import { User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function AvatarDropdown({
  placeholder = "U",
  className = "  ",
  size = "md", // sm, md, lg, xl
  bgColor = "bg-transparent hover:bg-gray-800",
  textColor = "text-blue-400 hover:text-yellow-500",
  borderColor = "ring-2 ring-blue-600 hover:ring-yellow-400",
  customSize = null, 
  showdropdown = true,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  const sizeConfig = {
    sm: {
      avatar: "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10",
      text: "text-xs sm:text-sm md:text-base",
      dropdown: "w-40 sm:w-44 md:w-48",
    },
    md: {
      avatar: "h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12",
      text: "text-sm sm:text-base md:text-lg",
      dropdown: "w-44 sm:w-48 md:w-52",
    },
    lg: {
      avatar: "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16",
      text: "text-base sm:text-lg md:text-xl",
      dropdown: "w-48 sm:w-52 md:w-56",
    },
    xl: {
      avatar: "h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20",
      text: "text-lg sm:text-xl md:text-2xl",
      dropdown: "w-52 sm:w-56 md:w-60",
    },
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  const handleSignOut = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userEmail");
    setDropdownOpen(false);
    window.location.href = "/";
  };

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={trigger}
        className={`
          ${customSize || currentSize.avatar} 
          ${bgColor} 
          ${textColor} 
          ${borderColor}
          flex items-center justify-center rounded-full font-bold 
          focus:outline-none focus:ring-4 focus:ring-blue-200/50
          hover:scale-105 active:scale-95
          transition-all duration-300 ease-out
          ${currentSize.text}
          shadow-lg hover:shadow-xl
          backdrop-blur-sm
          relative overflow-hidden
          before:absolute before:inset-0 before:rounded-full
          before:bg-white/10 before:opacity-0 
          hover:before:opacity-100 before:transition-opacity before:duration-300
        `}
      >
        <span className="select-none relative z-10 drop-shadow-sm">
          {placeholder.charAt(0).toUpperCase()}
        </span>
      </button>

      <div
        ref={dropdown}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        className={`
          absolute top-full right-0 mt-3 ${currentSize.dropdown} 
          rounded-xl bg-white/95 backdrop-blur-md shadow-2xl
          ring-1 ring-black/5 border border-white/20
          transform transition-all duration-300 ease-out z-50
          ${
            dropdownOpen
              ? showdropdown ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 hidden scale-95 -translate-y-2 pointer-events-none"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
      >
        <div className="py-2">
          <Link
            to="/profile"
            className="flex items-center px-4 py-3 sm:px-5 sm:py-3 text-sm sm:text-base text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-gray-900 transition-all duration-200 group"
          >
            <User className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
            <span className="truncate font-medium">Profile</span>
          </Link>

          <a
            href="/settings"
            className="flex items-center px-4 py-3 sm:px-5 sm:py-3 text-sm sm:text-base text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-gray-900 transition-all duration-200 group"
          >
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
            <span className="truncate font-medium">Settings</span>
          </a>

          <div className="border-t border-gray-200/60 my-2 mx-2"></div>

          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-3 sm:px-5 sm:py-3 text-sm sm:text-base text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-700 transition-all duration-200 group rounded-lg mx-2"
          >
            <LogOut className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-red-500 group-hover:text-red-600 transition-colors duration-200" />
            <span className="truncate font-medium">Sign Out</span>
          </button>
        </div>

        <div className="absolute -top-2 right-5 w-4 h-4 bg-white/95 backdrop-blur-md border-l border-t border-white/20 transform rotate-45 shadow-lg"></div>
      </div>
    </div>
  );
}
