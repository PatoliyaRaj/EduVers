import React from "react";
import { Card } from "../../components/Card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/Accordion";
import {
  LayoutGrid,
  User,
  CreditCard,
  GraduationCap,
  Wrench,
  ArrowRight,
} from "lucide-react";

const topics = [
  {
    title: "Account Management",
    description: "Profile settings, password reset, and security preferences.",
    icon: User,
    colorClass:
      "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
    href: "#",
  },
  {
    title: "Billing & Payments",
    description: "Invoices, payment methods, and refund policies.",
    icon: CreditCard,
    colorClass:
      "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white",
    href: "#",
  },
  {
    title: "Course Content",
    description: "Accessing materials, quizzes, and assignment help.",
    icon: GraduationCap,
    colorClass:
      "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white",
    href: "#",
  },
  {
    title: "Technical Support",
    description:
      "Platform errors, mobile app issues, and browser troubleshooting.",
    icon: Wrench,
    colorClass:
      "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white",
    href: "#",
  },
];

const faqs = [
  {
    id: "faq-1",
    question: "How do I download my certificate?",
    answer:
      "Once you complete a course, navigate to your 'My Learning' dashboard. Look for the completed course card, and you will see a 'Download Certificate' button. Ensure all modules are marked 100% complete.",
  },
  {
    id: "faq-2",
    question: "Can I get a refund for a course?",
    answer:
      "We offer a 30-day money-back guarantee for most courses. To request a refund, go to your Account Settings > Purchase History and select 'Request Refund' next to the eligible transaction.",
  },
  {
    id: "faq-3",
    question: "How do I change my email address?",
    answer:
      "Go to Profile > Settings > Account Security. You can update your email address there. A verification link will be sent to your new address to confirm the change.",
  },
];

function HelpTopics() {
  return (
    <div className="lg:col-span-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <LayoutGrid className="w-6 h-6 text-studprimary" />
          Browse Topics
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {topics.map((topic, index) => (
          <a key={index} href={topic.href} className="group block">
            <Card className="h-full border-slate-200 dark:border-white/10 dark:dark-glass rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-premium-gold/10 transition-all duration-300 hover:border-studprimary/50 dark:hover:border-premium-gold/50 relative overflow-hidden flex flex-row items-start gap-4">
              <div className="absolute right-0 top-0 w-24 h-24 bg-studprimary/5 dark:bg-premium-gold/5 rounded-bl-[4rem] transition-transform group-hover:scale-150 duration-500" />
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${topic.colorClass}`}
              >
                <topic.icon className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors">
                  {topic.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>

      {/* FAQ Section */}
      <Card className="bg-white dark:bg-transparent dark:dark-glass rounded-2xl border-slate-200 dark:border-white/10 p-8 shadow-sm dark:shadow-2xl">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4 font-display"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-none rounded-xl bg-slate-50 dark:bg-white/5 px-4 transition-all"
            >
              <AccordionTrigger className="text-slate-900 dark:text-slate-200 hover:no-underline py-4 font-bold text-sm md:text-base group">
                <span className="text-left group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed px-1 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <a
            className="inline-flex items-center gap-2 text-studprimary dark:text-premium-gold font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all"
            href="#"
          >
            See all 45 articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Card>
    </div>
  );
}

export default HelpTopics;
