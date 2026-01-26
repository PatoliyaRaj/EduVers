import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Book,
  BookOpen,
  Calendar,
  HelpCircle,
  Settings,
  User,
  Users2,
  Menu,
  LogOut,
  MessageCircle,
  X,
  ChevronLeft,
  PanelTopDashedIcon,
  LayoutDashboard,
  Compass,
} from "lucide-react";
import AvatarDropdown from "../components/Avatar";
import DarkModeToggle from "../components/DarkModeToggle";
import { useLogoutMutation } from "../redux";
import { ErrorToster, SuccessToster } from "../components/toster";
import SmartBreadcrumb from "../components/Breadcrumb";
import { logout } from "../redux/slice/authSlice";
import { getAuth } from "./users";
import { useDarkMode } from "../context/DarkModeContext";
import logo from "../assets/imgs/logo.png";

const AdminLayout = ({
  children,
  showSearch = true,
  customNavItems = null,
  className = "",
  breadcrumbItems = null,
  givespace = false,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { isDark } = useDarkMode();

  const { user, isAuthenticated, accessToken } = getAuth();
  console.log("🚀 ~ AdminLayout ~ user:", user);
  const userRole = user?.userType?.toUpperCase();
  const email = user?.email;

  // Dynamic nav items based on user role
  const navItems = useMemo(() => {
    if (customNavItems) return customNavItems;

    // Teacher/Admin Navigation
    if (userRole === "TEACHER") {
      return [
        {
          id: "dashboard",
          icon: LayoutDashboard,
          label: "Dashboard",
          link: "/dashboard",
          breadcrumb: "Dashboard",
        },
        {
          id: "profile",
          icon: User,
          label: "Profile",
          link: "/profile",
          breadcrumb: "Profile",
        },
        {
          id: "courses",
          icon: BookOpen,
          label: "My Courses",
          link: "/managecourses",
          breadcrumb: "Manage Courses",
        },
        {
          id: "addcourse",
          icon: Book,
          label: "Add Course",
          link: "/AddCourse",
          breadcrumb: "Add New Course",
        },
        {
          id: "users",
          icon: Users2,
          label: "Active Users",
          link: "/ActiveUsers",
          breadcrumb: "Active Users",
        },
        {
          id: "Comments",
          icon: MessageCircle,
          label: "Student Comments",
          link: "/Comments",
          breadcrumb: "Student Comments",
        },
        {
          id: "settings",
          icon: Settings,
          label: "Settings",
          link: "/settings",
          breadcrumb: "Settings",
        },
        {
          id: "help",
          icon: HelpCircle,
          label: "Help Center",
          link: "/help",
          breadcrumb: "Help & Support",
        },
      ];
    }

    return [
      {
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        link: "/dashboard",
        breadcrumb: "Dashboard",
      },
      {
       id: "Explore Courses",
       icon: Compass,
       label: "Explore Courses",
       link: "/Explorecourses",
       breadcrumb: "Explore Courses",
     },
      {
        id: "profile",
        icon: User,
        label: "Profile",
        link: "/profile",
        breadcrumb: "My Profile",
      },
      {
        id: "courses",
        icon: BookOpen,
        label: "My Courses",
        link: "/courses",
        breadcrumb: "My Courses",
      },
      {
        id: "schedule",
        icon: Calendar,
        label: "Schedule",
        link: "/schedule",
        breadcrumb: "My Schedule",
      },
      {
        id: "resources",
        icon: Book,
        label: "Resources",
        link: "/resources",
        breadcrumb: "Learning Resources",
      },
      {
        id: "chat",
        icon: MessageCircle,
        label: "Chat",
        link: "/chat",
        breadcrumb: "Messages",
      },
      {
        id: "settings",
        icon: Settings,
        label: "Settings",
        link: "/settings",
        breadcrumb: "Settings",
      },
      {
        id: "help",
        icon: HelpCircle,
        label: "Help Center",
        link: "/help",
        breadcrumb: "Help & Support",
      },
    ];
  }, [userRole, customNavItems]);

  const toggleMobileSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const closeMobileSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const isActiveLink = useCallback(
    (link) => location.pathname === link,
    [location.pathname]
  );

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

  // Navigation Item Component
  const NavItem = useCallback(
    ({ item, collapsed = false }) => {
      const IconComponent = item.icon;
      const isActive = isActiveLink(item.link);

      return (
        <Link
          to={item.link}
          onClick={closeMobileSidebar}
          className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200
          ${collapsed ? "justify-center px-2" : ""}
          ${
            isActive
              ? "bg-[#b48c4c]/10 text-[#b48c4c] dark:bg-[#b48c4c]/20 dark:text-[#b48c4c]"
              : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
          title={collapsed ? item.label : undefined}
        >
          <IconComponent
            className={`shrink-0 h-5 w-5 transition-all duration-200
            ${
              isActive
                ? "text-[#b48c4c]"
                : "text-slate-400 group-hover:text-[#b48c4c]"
            }`}
          />
          {!collapsed && <span className="truncate">{item.label}</span>}
        </Link>
      );
    },
    [isActiveLink, closeMobileSidebar]
  );

  // Sidebar Content Component
  const SidebarContent = useCallback(
    ({ collapsed = false }) => (
      <div className="flex h-full flex-col">
        {/* Logo & Branding */}
        <div className="p-6">
          <div
            className={`flex items-center ${
              collapsed ? "justify-center" : "gap-2"
            }`}
          >
            <div className="  rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="EduVers Logo"
                  className="w-12 h-12 object-contain"
                />
              </Link>
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-xl tracking-tight leading-none text-slate-900 dark:text-white">
                  EduVerse
                </h1>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">
                  {userRole === "TEACHER" ? "Teach & Grow" : "Learn & Grow"}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="w-[85%] h-[1px] bg-[#e4e2e2bf] mx-auto"></div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto">
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} collapsed={collapsed} />
          ))}

          {/* Account Section Label */}
          {!collapsed && (
            <div className="pt-8 pb-2 px-4 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              Account
            </div>
          )}
        </nav>


        {/* Logout Button */}
        <div className="border-t border-slate-200 dark:border-slate-800 p-4">
          <button
            onClick={handleSignOut}
            disabled={isPending}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 dark:text-red-400 transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/20
            ${collapsed ? "justify-center px-2" : ""}`}
            title={collapsed ? "Logout" : undefined}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            {!collapsed && (
              <span>{isPending ? "Signing out..." : "Logout"}</span>
            )}
          </button>
        </div>
      </div>
    ),
    [navItems, NavItem, handleSignOut, isPending, user, userRole]
  );

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-background-dark transition-colors duration-300">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-white dark:bg-sidebar-dark border-r border-slate-200 dark:border-slate-800 shadow-xl transition-transform duration-300 ease-in-out lg:hidden
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={closeMobileSidebar}
          className="absolute right-3 top-3 rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="h-5 w-5" />
        </button>
        <SidebarContent />
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:z-50 lg:flex lg:flex-col bg-white dark:bg-sidebar-dark border-r border-slate-200 dark:border-slate-800
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        {/* Collapse Toggle */}
        <button
          onClick={toggleCollapse}
          className="absolute -right-3 top-[50%] z-50 flex h-8 w-8 items-center justify-center rounded-[12px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 -translate-y-1/2"
          title={isCollapsed ? "Expand" : "Collapse"}
        >
          <ChevronLeft
            className={`h-4 w-4 text-slate-600 dark:text-slate-300 transition-transform duration-300  ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
        <SidebarContent collapsed={isCollapsed} />
      </aside>

      {/* Main Content Area */}
      <main
        className={` min-h-screen transition-all duration-300 ${
          isCollapsed ? "lg:ml-20" : "lg:ml-64"
        } dark:bg-background-dark`}
      >
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[#f9fafb]/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left Section - Search */}
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileSidebar}
                className="lg:hidden p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                <Menu className="h-6 w-6" />
              </button>

              <SmartBreadcrumb
                items={breadcrumbItems}
                className="dark:text-[#b48c4c]"
              ></SmartBreadcrumb>

              {/* Search Input */}
              {/* {showSearch && (
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search courses, mentors, or topics..."
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-[#b48c4c] focus:border-[#b48c4c] transition-all"
                  />
                </div>
              )} */}
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-3 md:gap-6">
              {/* {showSearch && (
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search courses, mentors..."
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-[#b48c4c] focus:border-[#b48c4c] transition-all"
                  />
                </div>
              )} */}

              {/* Dark Mode Toggle */}
              <DarkModeToggle />

              {/* Divider */}
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden md:block"></div>

              {/* Notification Button */}
              <button className="relative p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:shadow-sm transition-all">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800" />
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-3">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-bold leading-none text-slate-900 dark:text-white">
                    {`${user?.firstName} ${user.lastName}` ||
                      user?.email?.split("@")[0] ||
                      "User"}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    {userRole === "TEACHER"
                      ? "Instructor Account"
                      : "Student Account"}
                  </p>
                </div>
                <AvatarDropdown
                  placeholder={
                    user?.firstName?.charAt(0) || user?.email?.charAt(0) || "U"
                  }
                  size="md"
                  bgColor="bg-[#b48c4c]"
                  textColor="text-white"
                  borderColor="ring-2 ring-[#b48c4c]/20"
                  showdropdown={false}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className={`p-6 space-y-8 ${className}`}>{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
