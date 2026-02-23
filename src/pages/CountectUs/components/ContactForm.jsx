import React, { useState } from "react";
import { useSubmitContactMutation } from "../../../redux/Apis/contactApi";
import { SuccessToster, ErrorToster } from "../../../components/toster";

const INITIAL_FORM = {
  fullname: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  // RTK Query mutation hook
  const [submitContact, { isLoading }] = useSubmitContactMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitContact(formData).unwrap();
      if (response?.success) {
        SuccessToster("Message sent successfully!", 2500);
        setFormData(INITIAL_FORM);
      }
    } catch (error) {
      ErrorToster(
        error?.data?.message || "Failed to send message. Please try again.",
        2500,
      );
    }
  };

  const openWhatsApp = () => {
    const phone = "917575876775";
    const message = "Hello, I have a question about EduVerse!";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="space-y-6">
      {/* ── Form Card ── */}
      <div className="bg-white dark:bg-transparent dark:dark-glass rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm p-6 sm:p-8 hover:shadow-lg dark:hover:border-premium-gold/20 transition-all duration-300">
        {/* Card Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-premium-gold/10 flex items-center justify-center text-primary dark:text-premium-gold">
            <span className="material-symbols-outlined text-xl">edit_note</span>
          </div>
          <div>
            <h2 className="font-bold text-lg text-slate-900 dark:text-white font-lexend">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Fill in the form and we'll get back to you shortly.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Full Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Full Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-base pointer-events-none">
                  person
                </span>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-premium-gold/40 focus:border-primary dark:focus:border-premium-gold/50 transition-all duration-200"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-base pointer-events-none">
                  mail
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-premium-gold/40 focus:border-primary dark:focus:border-premium-gold/50 transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phone + Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Phone Number
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-base pointer-events-none">
                  call
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-premium-gold/40 focus:border-primary dark:focus:border-premium-gold/50 transition-all duration-200"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Subject <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-base pointer-events-none">
                  topic
                </span>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-8 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-premium-gold/40 focus:border-primary dark:focus:border-premium-gold/50 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" className="dark:bg-[#1E1F26]">
                    Select a subject
                  </option>
                  <option value="general" className="dark:bg-[#1E1F26]">
                    General Inquiry
                  </option>
                  <option value="support" className="dark:bg-[#1E1F26]">
                    Technical Support
                  </option>
                  <option value="business" className="dark:bg-[#1E1F26]">
                    Business Partnership
                  </option>
                  <option value="feedback" className="dark:bg-[#1E1F26]">
                    Feedback
                  </option>
                  <option value="other" className="dark:bg-[#1E1F26]">
                    Other
                  </option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us how we can help you..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-premium-gold/40 focus:border-primary dark:focus:border-premium-gold/50 transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2.5 bg-primary dark:bg-premium-gold text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-primary/25 dark:shadow-premium-gold/20 hover:brightness-110 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-premium-gold/25 active:scale-[0.99] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <span className="material-symbols-outlined text-xl animate-spin">
                  progress_activity
                </span>
                Sending...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-xl">send</span>
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

      {/* ── OR QUICK CHAT Divider ── */}
      <div className="relative flex items-center gap-4 py-2">
        <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
        <span className="shrink-0 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">
          OR QUICK CHAT
        </span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
      </div>

      {/* ── WhatsApp Button ── */}
      <button
        onClick={openWhatsApp}
        className="group w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
      >
        {/* WhatsApp SVG */}
        <svg
          className="w-5 h-5 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.1-.47-.15-.67.15-.198.3-.771.971-.945 1.171-.174.2-.347.225-.648.075-.301-.15-1.27-.468-2.42-1.492-.894-.798-1.498-1.784-1.674-2.083-.176-.3-.019-.462.13-.61.135-.133.301-.35.452-.524.151-.174.2-.299.301-.499.101-.2.05-.375-.025-.524-.075-.15-.67-1.616-.918-2.214-.242-.584-.487-.504-.67-.514-.173-.009-.371-.01-.57-.01-.199 0-.523.075-.797.375-.274.3-1.045 1.021-1.045 2.489 0 1.468 1.069 2.887 1.218 3.088.15.2 2.103 3.209 5.094 4.499.711.307 1.267.49 1.7.63.714.227 1.365.195 1.878.118.572-.086 1.767-.722 2.016-1.417.25-.695.25-1.291.174-1.417-.076-.126-.273-.201-.573-.351zm-5.472 7.618h-.001c-1.758 0-3.486-.474-5.002-1.37l-.358-.214-3.72.976.993-3.626-.235-.374C2.517 15.394 2 13.581 2 11.716 2 6.304 6.406 1.898 11.822 1.898c2.623 0 5.089 1.021 6.942 2.876 1.854 1.855 2.875 4.319 2.875 6.942 0 5.414-4.409 9.82-9.82 9.82zM12 0C5.383 0 0 5.383 0 12c0 2.112.55 4.172 1.594 5.986L0 24l6.191-1.623C7.931 23.325 9.899 23.826 12 23.826c6.617 0 12-5.383 12-12 0-3.206-1.248-6.22-3.515-8.485C18.22 1.248 15.206 0 12 0z" />
        </svg>
        <span>Chat With Us on WhatsApp</span>
        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform duration-300">
          arrow_forward
        </span>
      </button>

      {/* Live indicator */}
      <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Typically replies in less than 5 minutes
      </p>
    </div>
  );
};

export default ContactForm;
