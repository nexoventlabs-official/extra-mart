import React from 'react';
import { RotateCcw, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export const ReturnsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <span className="bg-green-100 text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Supermarket Consumer Guarantee
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Cancellation, Return & Refund Policy
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Extra Mart (extramart.online) ensures a hassle-free, transparent shopping experience.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">1. Doorstep Quality Check & Returns</h2>
          <p>
            At Extra Mart, we encourage customers to inspect fresh vegetables, dairy products, fruits, and bread upon doorstep arrival. If any item is damaged, overripe, or does not meet your personal satisfaction, you can return it directly to our delivery executive on the spot.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">2. Category-Specific Return Windows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="border border-green-200 bg-green-50/50 p-3.5 rounded-lg">
              <span className="font-bold text-green-900 block text-xs uppercase">Fresh Fruits, Veggies & Dairy</span>
              <p className="text-xs text-green-800 mt-1">24-hour return or replacement window from time of delivery.</p>
            </div>
            <div className="border border-blue-200 bg-blue-50/50 p-3.5 rounded-lg">
              <span className="font-bold text-blue-900 block text-xs uppercase">Packaged Staples & Household</span>
              <p className="text-xs text-blue-800 mt-1">7-day return window for unopened, sealed original packaging.</p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">3. Order Cancellation</h2>
          <p>
            You can cancel any grocery order free of charge any time before our warehouse dispatches the delivery agent. Simply visit the "My Orders" tab on extramart.online and click "Cancel Order".
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">4. Refund Timelines</h2>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>UPI & Wallets:</strong> Instant refund processed within 2 hours.</li>
            <li><strong>Debit / Credit Cards:</strong> 2 to 4 business days depending on issuing bank.</li>
            <li><strong>Cash on Delivery Orders:</strong> Instant credit to Extra Mart Wallet or direct UPI transfer to your bank.</li>
          </ul>
        </section>

        <div className="pt-4 border-t text-xs text-gray-500">
          For refund disputes or questions, please email <a href="mailto:contact@extramart.online" className="text-brand-primary underline">contact@extramart.online</a> with your Order ID.
        </div>
      </div>
    </div>
  );
};
