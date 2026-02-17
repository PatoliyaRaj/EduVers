import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Book,
  BookOpen,
  Calendar,
  HelpCircle,
  Home,
  Settings,
  User,
  Users2,
  Menu,
  LogOut,
  Search,
  BarChart3,
  DollarSign,
  Shield,
  Lock,
  X,
  ChevronLeft,
} from "lucide-react";
import AvatarDropdown from "../components/Avatar";
import { useLogoutMutation } from "../redux";
import { ErrorToster, SuccessToster } from "../components/toster";
import SmartBreadcrumb from "../components/Breadcrumb";
import { logout } from "../redux/slice/authSlice";
import { getAuth } from "./users";
import DarkModeToggle from "../components/DarkModeToggle";
import { useDarkMode } from "../context/DarkModeContext";
import logo from "../assets/imgs/logo.png";

const SuperAdminLayout = ({
  children,
  pageTitle = "Dashboard",
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

  // Get auth from utility
  const { user, accessToken } = getAuth();
  const userRole = user?.userType?.toUpperCase();
  const email = user?.email;

  // SuperAdmin specific navigation items
  const navItems = useMemo(() => {
    if (customNavItems) return customNavItems;

    return [
      {
        id: "dashboard",
        icon: Home,
        label: "Dashboard",
        link: "/",
        breadcrumb: "Dashboard",
      },
      {
        id: "users",
        icon: Users2,
        label: "Users Management",
        link: "/admin/users",
        breadcrumb: "Users Management",
      },
      {
        id: "institutions",
        icon: Building,
        label: "Institutions",
        link: "/admin/institutions",
        breadcrumb: "Institutions",
      },
      {
        id: "analytics",
        icon: BarChart3,
        label: "Analytics",
        link: "/admin/analytics",
        breadcrumb: "Analytics",
      },
      {
        id: "financials",
        icon: DollarSign,
        label: "Financials",
        link: "/admin/financials",
        breadcrumb: "Financials",
      },
      {
        id: "security",
        icon: Shield,
        label: "Security",
        link: "/admin/security",
        breadcrumb: "Security",
      },
      {
        id: "settings",
        icon: Settings,
        label: "System Settings",
        link: "/admin/settings",
        breadcrumb: "System Settings",
      },
      {
        id: "help",
        icon: HelpCircle,
        label: "Help & Support",
        link: "/help",
        breadcrumb: "Help & Support",
      },
    ];
  }, [customNavItems]);

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
    [location.pathname],
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
              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
          title={collapsed ? item.label : undefined}
        >
          <IconComponent
            className={`shrink-0 h-5 w-5 transition-all duration-200
            ${
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-400 dark:text-slate-500 group-hover:text-blue-500"
            }`}
          />
          {!collapsed && <span className="truncate">{item.label}</span>}
        </Link>
      );
    },
    [isActiveLink, closeMobileSidebar],
  );

  const SidebarContent = useCallback(
    ({ collapsed = false }) => (
      <div className="flex h-full flex-col bg-white dark:bg-slate-900">
        {/* Logo & Branding */}
        <div className="p-6">
          <div
            className={`flex items-center ${
              collapsed ? "justify-center" : "gap-2"
            }`}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <Shield className="h-6 w-6" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-xl tracking-tight leading-none text-slate-900 dark:text-white">
                  EduVerse
                </h1>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">
                  Super Admin
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto">
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} collapsed={collapsed} />
          ))}

          {/* System Section Label */}
          {!collapsed && (
            <div className="pt-8 pb-2 px-4 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              System
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
    [navItems, NavItem, handleSignOut, isPending],
  );

  return (
    <div className="min-h-screen bg-[#F5F3FF] dark:bg-slate-950 transition-colors duration-300">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-xl transition-transform duration-300 ease-in-out lg:hidden
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
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
        className={`hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:z-50 lg:flex lg:flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        <button
          onClick={toggleCollapse}
          className="absolute -right-3 top-20 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700"
          title={isCollapsed ? "Expand" : "Collapse"}
        >
          <ChevronLeft
            className={`h-4 w-4 text-slate-600 dark:text-slate-300 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
        <SidebarContent collapsed={isCollapsed} />
      </aside>

      {/* Main Content Area */}
      <main
        className={`min-h-screen transition-all duration-300 ${
          isCollapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[#F5F3FF]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
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

              {/* Search Input */}
              {showSearch && (
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search users, institutions, or settings..."
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              )}
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-3 md:gap-6">
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
                    {user?.name || user?.email?.split("@")[0] || "Super Admin"}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    Super Admin
                  </p>
                </div>
                <AvatarDropdown
                  placeholder={user?.email?.charAt(0) || "S"}
                  size="md"
                  bgColor="bg-gradient-to-r from-blue-500 to-purple-600"
                  textColor="text-white"
                  borderColor="ring-2 ring-blue-500/20"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className={`p-6 space-y-8 ${className}`}>
          {/* Page Title Section */}
          {pageTitle && (
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                {pageTitle}
              </h1>
              {breadcrumbItems ? (
                <SmartBreadcrumb items={breadcrumbItems} className="mt-2" />
              ) : subheader ? (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {subheader}
                </p>
              ) : null}
            </div>
          )}
          {children}
        </div>
      </main>
    </div>
  );
};

// Icon component not imported
const Building = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

export default SuperAdminLayout;
