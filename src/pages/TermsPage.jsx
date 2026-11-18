import React from 'react';

export const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Terms and Conditions
        </h1>
        <p className="text-xs text-gray-500">Last updated: November 2026 • Extra Mart (extramart.online)</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8 space-y-5 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">1. Agreement to Terms</h2>
          <p>
            By accessing or placing an order on <strong>extramart.online</strong>, you agree to be bound by these Terms of Service. Extra Mart Internet Private Limited operates this online supermarket platform providing grocery delivery, fresh produce sales, and household goods.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">2. Product Pricing and Fresh Produce Weights</h2>
          <p>
            Prices for all supermarket commodities, fruits, vegetables, and staples are displayed in Indian Rupees (₹) and include all applicable taxes. Fresh agricultural products (such as onions, tomatoes, and apples) are weighed accurately at our distribution centers; minor natural weight deviations (within ±5%) due to moisture loss are standard in fresh produce delivery.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">3. Customer Conduct & Fair Use</h2>
          <p>
            Promotional codes such as <code>EXTRA50</code> and <code>FIRSTMART</code> are limited to legitimate consumer households. Extra Mart reserves the right to cancel orders placed using automated bots or fraudulent multi-account abuses.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">4. Contact Information</h2>
          <p>
            For legal inquiries, terms clarification, or corporate feedback, reach out to our grievance team at:
            <br />
            <strong>Email:</strong> <a href="mailto:contact@extramart.online" className="text-brand-primary underline">contact@extramart.online</a>
            <br />
            <strong>Office:</strong> Extra Mart Internet Private Limited, Outer Ring Road, Bellandur, Bengaluru 560103, Karnataka, India.
          </p>
        </section>
      </div>
    </div>
  );
};
