import React from 'react';

export const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Privacy & Security Policy
        </h1>
        <p className="text-xs text-gray-500">Extra Mart (extramart.online) Consumer Data Protection</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8 space-y-5 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">1. Information We Collect</h2>
          <p>
            When you register, place orders, or browse on <strong>extramart.online</strong>, we collect personal information necessary to deliver your supermarket orders: delivery address, PIN code, contact phone number, and support email communications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">2. Payment Security</h2>
          <p>
            We do not store your raw credit/debit card numbers or CVV. All electronic transactions are routed through PCI-DSS Level 1 compliant banking gateways with 256-bit SSL encryption.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">3. Data Sharing Restrictions</h2>
          <p>
            Extra Mart never sells or rents your personal data to external advertisers. Data is solely shared with our certified logistics partners to enable physical doorstep delivery of your groceries.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-gray-900 text-base">4. Contact Data Protection Officer</h2>
          <p>
            If you have questions regarding data privacy or wish to request data deletion, write to us at:
            <br />
            <strong>Email:</strong> <a href="mailto:contact@extramart.online" className="text-brand-primary underline">contact@extramart.online</a>
          </p>
        </section>
      </div>
    </div>
  );
};
