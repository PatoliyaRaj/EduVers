import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactInfoPanel from "./components/ContactInfoPanel";
import ContactFAQ from "./components/ContactFAQ";

function ContactUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      {/* Hero / Page Header */}
      <ContactHero />

      {/* Main Content: Form + Info Panel */}
      <section className="relative py-16 bg-white dark:bg-background-dark transition-colors duration-300 overflow-hidden">
        {/* Subtle background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] dark:bg-premium-gold/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] dark:bg-primary/4 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-10 text-slate-400 dark:text-slate-500 text-sm font-medium">
            <a
              href="/"
              className="hover:text-primary dark:hover:text-premium-gold transition-colors duration-200"
            >
              Home
            </a>
            <span className="material-symbols-outlined text-base">
              chevron_right
            </span>
            <span className="text-slate-700 dark:text-slate-300 font-bold">
              Contact Us
            </span>
          </nav>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
            {/* Left: Contact Form + WhatsApp */}
            <ContactForm />

            {/* Right: Info Panel + WhatsApp quick chat card */}
            <div className="lg:sticky lg:top-28">
              <ContactInfoPanel />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ContactFAQ />
    </Layout>
  );
}

export default ContactUs;
