import React from 'react';
import { Headphones, Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { Card } from '../../components/Card';
import { useAuth } from '../../utils/users';


    const openWhatsApp = () => {
    const phone = "917575876775";
    const message = "Hello, I am interested in your service";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    };
function HelpInfoAndContect() {
    const { user } = useAuth();
    const email = user?.email;
    
    return (
        <div className="lg:col-span-4 space-y-6">
            <Card className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm h-fit ring-0 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="w-10 h-10 rounded-full bg-lavender-light dark:bg-slate-800 flex items-center justify-center text-studprimary">
                        <Headphones className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Direct Support</h3>
                </div>
                <div className="space-y-4">
                    <div
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-studprimary/30 transition-colors">
                        <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-slate-400 mt-1" />
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email Us</p>
                                                                <a
                                                                    href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rajpatoliya448@gmail.com&su=Support%20Inquiry%20-%20EduVerse&body=From:%20${encodeURIComponent(email || "Not provided")}%0A%0AHello%20EduVerse%20Support%20Team,%0A%0AI%20need%20assistance%20with:`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-slate-900 dark:text-white font-medium hover:text-studprimary transition-colors block mt-0.5"
                                                                >
                                                                    support@eduverse.com
                                                                </a>
                                <p className="text-xs text-slate-400 mt-1">Response time: ~24 hours</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-studprimary/30 transition-colors">
                        <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-slate-400 mt-1" />
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Call Us</p>
                                <a className="text-slate-900 dark:text-white font-medium hover:text-studprimary transition-colors block mt-0.5"
                                    href="tel:+18003384357">+1 (800) EDU-HELP</a>
                                <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 6pm EST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Faster Help Card */}
            <Card className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-black rounded-2xl shadow-xl overflow-hidden text-white p-6 md:p-8 flex flex-col items-center text-center ring-0 border-none">
                <div
                    className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
                </div>
                <div
                    className="absolute bottom-0 left-0 w-32 h-32 bg-studprimary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2">
                </div>
                <div
                    className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/30 mb-4 transform -rotate-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Need faster help?</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    Connect with our support team instantly on WhatsApp for real-time assistance.
                </p>
                <button
                    onClick={openWhatsApp}
                    className="w-full group bg-studprimary hover:bg-white hover:text-studprimary text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                    <span>Start Chat</span>
                    <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform rotate-45" />
                </button>
                <p className="text-[10px] text-slate-400 mt-4 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Typically replies in &lt; 5 mins
                </p>
            </Card>
        </div>
    );
}

export default HelpInfoAndContect;


