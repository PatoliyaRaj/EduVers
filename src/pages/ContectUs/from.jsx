

import { MapPin, Mail, Phone, Send, User, MessageSquare } from "lucide-react";
import React, { useState } from "react";

function From() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <React.Fragment>
      <section className="min-h-screen bg-gradient-to-br from-[#f7f7f5] via-[#e0e7ff] to-[#f7f7f5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Form - Glass Effect */}
            <div className="flex-1 lg:flex-[2]">
              <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/40 rounded-lg 
                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                   placeholder-gray-400 text-gray-900 transition-all duration-200
                                   hover:bg-white/60"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/40 rounded-lg 
                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                   placeholder-gray-400 text-gray-900 transition-all duration-200
                                   hover:bg-white/60"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Phone Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/40 rounded-lg 
                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                   placeholder-gray-400 text-gray-900 transition-all duration-200
                                   hover:bg-white/60"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/40 rounded-lg 
                                 focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 text-gray-900 transition-all duration-200 hover:bg-white/60"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="business">Business Partnership</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/40 rounded-lg 
                                 focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                 placeholder-gray-400 text-gray-900 transition-all duration-150
                                 hover:bg-white/60 resize-vertical min-h-[120px]"
                        placeholder="Enter your message here..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 
                               bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                               text-white font-medium rounded-lg shadow-lg hover:shadow-xl 
                               transform hover:scale-105 transition-all duration-200 
                               focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information - Glass Effect */}
            <div className="flex-1 lg:flex-[1]">
              <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 sm:p-8 shadow-xl h-fit sticky top-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100/50 backdrop-blur-sm p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-600 leading-relaxed">
                        123 Education Street<br />
                        Learning District<br />
                        Knowledge City, KC 12345
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100/50 backdrop-blur-sm p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600">info@eduvers.com</p>
                      <p className="text-gray-600">support@eduvers.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100/50 backdrop-blur-sm p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="mt-8 p-4 bg-white/30 backdrop-blur-sm rounded-lg border border-white/40">
                    <h3 className="font-semibold text-gray-900 mb-3">Office Hours</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default From;
