import React from "react";
import Navbar from "../pages/HomeNew/components/Navbar";
import Footer from "../pages/HomeNew/components/Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
