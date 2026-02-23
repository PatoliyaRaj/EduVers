import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../components/accordion";

const faqs = [
  {
    id: "item-1",
    q: "How do I enroll in a course?",
    a: "Browse our course catalog, click on any course you like, and hit the 'Enroll Now' button. If you're not logged in, you'll be prompted to sign in or create an account.",
    icon: "school",
  },
  {
    id: "item-2",
    q: "What payment methods are accepted?",
    a: "We accept all major credit/debit cards, UPI, net banking, and popular wallets. Scholarships and EMI options are also available for eligible learners.",
    icon: "payments",
  },
  {
    id: "item-3",
    q: "Can I access courses on mobile?",
    a: "Yes! EduVerse is fully responsive and works on all devices — smartphones, tablets, laptops, and desktops. You can continue right where you left off.",
    icon: "devices",
  },
  {
    id: "item-4",
    q: "Do I get a certificate after completing a course?",
    a: "Absolutely. Upon completing a course and its assessments, you receive an industry-recognised certificate that you can share on LinkedIn or download as a PDF.",
    icon: "verified",
  },
  {
    id: "item-5",
    q: "What is the refund policy?",
    a: "We offer a 7-day no-questions-asked refund policy. If you're not satisfied, reach out to our support team within 7 days of purchase and we'll process your refund.",
    icon: "currency_rupee",
  },
];

const ContactFAQ = () => {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-navy-charcoal transition-colors duration-300 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] dark:bg-premium-gold/5 rounded-full blur-[120px]" />
        <div className="absolute -top-32 -left-32 w-[350px] h-[350px] dark:bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-premium-gold/10 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-4 border border-primary/20 dark:border-premium-gold/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm">quiz</span>
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-lexend mb-3">
            Frequently Asked{" "}
            <span className="text-primary dark:text-premium-gold">
              Questions
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Send us a message
            above or chat on WhatsApp.
          </p>
        </div>

        {/* Radix Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="group bg-white dark:bg-transparent dark:dark-glass rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm hover:border-primary/20 dark:hover:border-premium-gold/20 hover:shadow-md data-[state=open]:border-primary/30 dark:data-[state=open]:border-premium-gold/30 data-[state=open]:shadow-md overflow-hidden transition-all duration-300 not-last:border-b-0"
              >
                <AccordionTrigger className="w-full flex items-center gap-4 px-5 py-4 text-left hover:no-underline border-0 rounded-2xl">
                  {/* Icon + Question */}
                  <span className="material-symbols-outlined text-xl shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-premium-gold group-data-[state=open]:text-primary dark:group-data-[state=open]:text-premium-gold transition-colors duration-200">
                    {faq.icon}
                  </span>
                  <span className="flex-1 font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-premium-gold group-data-[state=open]:text-primary dark:group-data-[state=open]:text-premium-gold transition-colors duration-200">
                    {faq.q}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pl-14 pr-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
