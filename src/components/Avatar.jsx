import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { User, Settings, LogOut, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { SuccessToster, ErrorToster } from "./toster";
import { useLogoutMutation } from "../redux";
import { logout } from "../redux/slice/authSlice";
import { getAuth } from "../utils/users";

export default function AvatarDropdown({
  placeholder = "U",
  className = "",
  size = "md",
  bgColor = "bg-primary/15 hover:bg-primary/25",
  textColor = "text-primary",
  borderColor = "ring-2 ring-primary/50 hover:ring-primary/80",
  customSize = null,
  showdropdown = true,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const { user, isAuthenticated, accessToken } = getAuth();
  const email = user?.email;
  const dispatch = useDispatch();

  const sizeConfig = {
    sm: {
      avatar: "h-9 w-9",
      text: "text-sm",
      dropdown: "w-52",
    },
    md: {
      avatar: "h-10 w-10 sm:h-11 sm:w-11",
      text: "text-sm sm:text-base",
      dropdown: "w-56",
    },
    lg: {
      avatar: "h-12 w-12 sm:h-14 sm:w-14",
      text: "text-base sm:text-lg",
      dropdown: "w-60",
    },
    xl: {
      avatar: "h-14 w-14 sm:h-16 sm:w-16",
      text: "text-lg sm:text-xl",
      dropdown: "w-64",
    },
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setDropdownOpen(false), 200);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => setDropdownOpen(false), 200);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
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

  const [logoutMutation, { isLoading: isPending }] = useLogoutMutation();

  const handleSignOut = useCallback(async () => {
    try {
      await logoutMutation({ email }).unwrap();
      SuccessToster("Successfully signed out", 2500);
      dispatch(logout());
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      ErrorToster(error?.data?.message || "Logout failed", 2500);
      console.error("Logout failed:", error);
    }
  }, [email, logoutMutation, dispatch]);

  // Derive initials from user's name or email
  const getInitials = () => {
    if (placeholder && placeholder.length > 0) {
      if (placeholder.includes("@")) {
        return placeholder.charAt(0).toUpperCase();
      }
      const parts = placeholder.trim().split(" ");
      if (parts.length >= 2) {
        return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
      }
      return placeholder.charAt(0).toUpperCase();
    }
    return "U";
  };

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar Button */}
      <button
        ref={trigger}
        className={`
          ${customSize || currentSize.avatar}
          ${bgColor} dark:bg-primary/20 dark:hover:bg-primary/30
          ${textColor} dark:text-primary
          ${borderColor} dark:ring-primary/40 dark:hover:ring-primary/70
          flex items-center justify-center rounded-full font-extrabold
          focus:outline-none focus:ring-4 focus:ring-primary/20 dark:focus:ring-primary/15
          hover:scale-110 active:scale-95
          transition-all duration-300 ease-out
          ${currentSize.text}
          shadow-md shadow-primary/20 dark:shadow-primary/10
          hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary/20
          backdrop-blur-sm relative overflow-hidden
        `}
      >
        <span className="select-none relative z-10 drop-shadow-sm tracking-wide">
          {getInitials()}
        </span>
        {/* Subtle glow ring animation on hover */}
        <span className="absolute inset-0 rounded-full bg-primary/0 hover:bg-primary/5 transition-colors duration-300" />
      </button>

      {/* Dropdown Panel */}
      <div
        ref={dropdown}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        className={`
          absolute top-full right-0 mt-3 ${currentSize.dropdown}
          rounded-2xl overflow-hidden
          bg-white dark:bg-navy-charcoal
          shadow-2xl dark:shadow-black/50
          ring-1 ring-slate-200/80 dark:ring-slate-700/60
          border border-slate-100 dark:border-slate-700/50
          transform transition-all duration-300 ease-out z-50
          ${
            dropdownOpen
              ? showdropdown
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 hidden scale-95 -translate-y-2 pointer-events-none"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
      >
        {/* User Info Header */}
        <div className="px-4 py-4 border-b border-slate-100 dark:border-slate-700/50 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 dark:bg-primary/25 flex items-center justify-center shrink-0 ring-2 ring-primary/30">
              <span className="text-primary font-extrabold text-sm">
                {getInitials()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                {user?.fullName || "User"}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                {user?.email || ""}
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-primary/8 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-all duration-200 group"
          >
            <LayoutDashboard className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors duration-200" />
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-primary/8 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-all duration-200 group"
          >
            <User className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors duration-200" />
            <span className="font-medium">My Profile</span>
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-primary/8 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-all duration-200 group"
          >
            <Settings className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors duration-200" />
            <span className="font-medium">Settings</span>
          </Link>

          <div className="border-t border-slate-100 dark:border-slate-700/50 my-1.5 mx-2" />

          <button
            onClick={handleSignOut}
            disabled={isPending}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-300 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <LogOut className="w-4 h-4 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors duration-200" />
            <span className="font-medium">
              {isPending ? "Signing Out..." : "Sign Out"}
            </span>
          </button>
        </div>

        {/* Caret arrow */}
        <div className="absolute -top-2 right-4 w-4 h-4 bg-white dark:bg-navy-charcoal border-l border-t border-slate-100 dark:border-slate-700/50 transform rotate-45 shadow-sm" />
      </div>
    </div>
  );
}
