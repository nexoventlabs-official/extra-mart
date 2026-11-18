import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';

const FAQS = [
  {
    q: 'How does Extra Mart 2-Hour Express Delivery work?',
    a: 'Extra Mart operates automated local dark store fulfillment centers across city zones. When you place an order before the cut-off time, our pickers pack your items in temperature-controlled bags with ice packs for dairy and greens, and a delivery partner brings it directly to your doorstep in 120 minutes.'
  },
  {
    q: 'What are the delivery charges on Extra Mart?',
    a: 'Supermarket delivery is 100% FREE on all grocery orders above ₹499. For orders below ₹499, a nominal delivery convenience fee of ₹40 is applied.'
  },
  {
    q: 'How are fresh fruits and vegetables quality checked?',
    a: 'All produce is sourced directly from certified farms daily. Every batch undergoes a 3-step quality sorting (weight calibration, skin blemish check, and natural firmness test). We never use artificial carbide ripening.'
  },
  {
    q: 'What if I am unhappy with the quality of any delivered item?',
    a: 'We offer an instant, no-questions-asked doorstep return policy for fresh items. You can reject the item at delivery or contact our support team at contact@extramart.online within 24 hours for an immediate refund or replacement.'
  },
  {
    q: 'What payment modes are accepted on extramart.online?',
    a: 'We accept all major payment methods: UPI (Google Pay, PhonePe, Paytm, BHIM), Credit and Debit cards (Visa, MasterCard, RuPay), Net Banking across 40+ banks, Extra Mart Wallet, and Cash / UPI on Delivery (COD).'
  },
  {
    q: 'How can I track my supermarket order?',
    a: 'Visit the "My Orders" section from the top navigation bar. You will find real-time live status updates from order packing to out-for-delivery with your assigned delivery partner.'
  },
  {
    q: 'How do I apply coupon codes like EXTRA50 or FIRSTMART?',
    a: 'During checkout or on the Cart page, expand the "Coupons & Offers" section, enter your coupon code, and click Apply. The discount will instantly be subtracted from your total payable amount.'
  }
];

export const FaqPage = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <span className="bg-blue-100 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Help Center
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Everything you need to know about supermarket ordering, delivery slots, and returns at Extra Mart.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm divide-y divide-gray-100">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="p-4 sm:p-5">
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left gap-4 font-bold text-xs sm:text-sm text-gray-900 hover:text-brand-primary transition-colors"
              >
                <span>{faq.q}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-brand-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
              </button>
              {isOpen && (
                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed animate-fade-in">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center text-xs space-y-2">
        <h4 className="font-bold text-gray-900">Still have questions?</h4>
        <p className="text-gray-600">
          Reach our dedicated support team at <a href="mailto:contact@extramart.online" className="text-brand-primary font-bold underline">contact@extramart.online</a> or call toll-free at <strong>1800-202-9832</strong>.
        </p>
      </div>
    </div>
  );
};
