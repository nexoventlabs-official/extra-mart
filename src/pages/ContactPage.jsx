import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Globe
} from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    category: 'Order Status & Tracking',
    message: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketId = 'TKT-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedTicket({
      id: ticketId,
      ...formData,
      timestamp: new Date().toLocaleTimeString()
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      orderId: '',
      category: 'Order Status & Tracking',
      message: ''
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-2">
        <span className="bg-blue-100 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          24x7 Customer Support
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-gray-900">
          Get in Touch with Extra Mart Care
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
          Have questions about your order, delivery time slot, product freshness, or wholesale business inquiry? We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Official Contact Details Cards (5 Cols) */}
        <div className="md:col-span-5 space-y-4">
          
          {/* Support Email Card */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-brand-primary flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Official Support Email</h3>
              <a
                href="mailto:contact@extramart.online"
                className="text-sm font-bold text-brand-primary hover:underline block mt-0.5"
              >
                contact@extramart.online
              </a>
              <p className="text-[11px] text-gray-400 mt-0.5">Average response time: Within 15 minutes</p>
            </div>
          </div>

          {/* Website Portal Card */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Official Website Portal</h3>
              <span className="text-sm font-bold text-gray-900 block mt-0.5">
                extramart.online
              </span>
              <p className="text-[11px] text-gray-400 mt-0.5">SSL 256-bit Certified Secure E-Commerce</p>
            </div>
          </div>

          {/* Toll Free Phone */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Toll-Free Customer Helpline</h3>
              <a href="tel:18002029832" className="text-sm font-bold text-gray-900 hover:text-brand-primary block mt-0.5">
                1800-202-9832
              </a>
              <p className="text-[11px] text-gray-400 mt-0.5">Available 7 days a week: 8:00 AM – 10:00 PM IST</p>
            </div>
          </div>

          {/* Registered Office Address */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs space-y-1">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Registered Corporate Office</h3>
              <p className="font-semibold text-gray-900">Extra Mart Internet Private Limited</p>
              <p className="text-gray-600 leading-relaxed">
                Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
                Outer Ring Road, Bellandur,<br />
                Bengaluru, Karnataka 560103, India
              </p>
              <p className="text-[11px] text-gray-400 pt-1">Corporate Identification Number: U51109KA2024PTC198234</p>
            </div>
          </div>

        </div>

        {/* Right Column: Support Ticket Form (7 Cols) */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm">
          {submittedTicket ? (
            <div className="p-6 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-green-100 text-brand-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Support Ticket Created Successfully!</h3>
              <p className="text-xs text-gray-600">
                Ticket Reference: <strong className="font-mono text-brand-primary text-sm">{submittedTicket.id}</strong>
              </p>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                Our customer care agent has received your request regarding <em>"{submittedTicket.category}"</em>. A confirmation has been logged with our team at <strong className="text-gray-700">contact@extramart.online</strong>.
              </p>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="mt-4 bg-brand-primary text-white text-xs font-bold px-6 py-2.5 rounded shadow hover:bg-blue-700"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-gray-900">Send Us a Message</h3>
                <p className="text-xs text-gray-500">Fill in the form below and we'll reply to your email promptly.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded focus:border-brand-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ramesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded focus:border-brand-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Mobile Phone (Optional)</label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded focus:border-brand-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Order ID (If applicable)</label>
                  <input
                    type="text"
                    placeholder="e.g. EM-892415"
                    value={formData.orderId}
                    onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded focus:border-brand-primary focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-gray-700 mb-1">Inquiry Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded focus:border-brand-primary focus:outline-none bg-white"
                  >
                    <option value="Order Status & Tracking">Order Status & Tracking</option>
                    <option value="Product Quality & Replacement">Product Quality & Freshness Issue</option>
                    <option value="Payment / Refund Issue">Payment & Refund Inquiry</option>
                    <option value="Delivery Delay">Delivery Slot Reschedule</option>
                    <option value="Business & Vendor Partnership">Become a Supermarket Supplier / Vendor</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-gray-700 mb-1">Detailed Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please specify details regarding your grocery order or feedback..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded focus:border-brand-primary focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-blue-700 text-white font-bold text-xs py-3 px-6 rounded shadow-md uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit Support Ticket</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
