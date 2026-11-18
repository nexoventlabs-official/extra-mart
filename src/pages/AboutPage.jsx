import React from 'react';
import { Link } from 'react-router-dom';
import {
  Store,
  Truck,
  ShieldCheck,
  Award,
  Users,
  Clock,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white rounded-lg p-8 sm:p-12 text-center space-y-4 shadow-sm">
        <span className="bg-brand-yellow text-blue-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          About Extra Mart
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          India's Smartest Online Supermarket
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          At <strong>Extra Mart (<span className="text-amber-300">extramart.online</span>)</strong>, our mission is simple: provide every Indian household with farm-fresh groceries, premium staples, and daily essentials at prices lower than wholesale, delivered directly to your doorstep in 2 hours.
        </p>
      </div>

      {/* Key Numbers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-gray-200 text-center shadow-sm">
          <div className="text-3xl font-black text-brand-primary">50,000+</div>
          <div className="text-xs text-gray-500 font-semibold mt-1">Daily Supermarket Orders</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 text-center shadow-sm">
          <div className="text-3xl font-black text-brand-green">120 Mins</div>
          <div className="text-xs text-gray-500 font-semibold mt-1">Guaranteed Delivery Slot</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 text-center shadow-sm">
          <div className="text-3xl font-black text-amber-500">10,000+</div>
          <div className="text-xs text-gray-500 font-semibold mt-1">Curated Daily Products</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 text-center shadow-sm">
          <div className="text-3xl font-black text-purple-600">99.8%</div>
          <div className="text-xs text-gray-500 font-semibold mt-1">On-Time Fulfillment</div>
        </div>
      </div>

      {/* Core Pillars */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 text-center">Our Supermarket Commitments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-gray-900">Farm Direct Freshness</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We partner directly with certified agricultural producers across Karnataka, Maharashtra, and Himachal Pradesh. Our 3-stage sorting removes bruised produce before it leaves the collection center.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-primary flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-gray-900">Cold Chain 2-Hour Delivery</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              From our dark store network to your refrigerator, milk, butter, and farm greens travel in insulated thermal bags with cold gel packs, ensuring maximum freshness at zero spoilage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-gray-900">No-Questions-Asked Refund</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              If any fruit, vegetable, or grocery item fails to meet your expectation upon delivery, simply request an instant replacement or refund via our app or support email.
            </p>
          </div>
        </div>
      </div>

      {/* Corporate & Operations Info */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 space-y-4 text-xs text-gray-700 leading-relaxed shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
          Company Overview & Corporate Headquarters
        </h3>
        <p>
          <strong>Extra Mart Internet Private Limited</strong> operates <strong>extramart.online</strong>, delivering high-grade groceries and daily staples across key metro regions. By combining automated micro-fulfillment centers with direct sourcing from farmers and fast-moving consumer goods (FMCG) brand partners like Amul, Tata, Aashirvaad, and HUL, Extra Mart removes unnecessary middleman margins, passing the savings directly back to consumers.
        </p>
        <div className="pt-2 border-t grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-gray-900">Registered Office:</h4>
            <p className="text-gray-600">
              Extra Mart Internet Private Limited<br />
              Clove Embassy Tech Village, Outer Ring Road, Bellandur<br />
              Bengaluru, Karnataka 560103, India
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Official Communications:</h4>
            <p className="text-gray-600">
              Customer Support: <a href="mailto:contact@extramart.online" className="text-brand-primary underline">contact@extramart.online</a><br />
              Website: <strong className="text-gray-900">extramart.online</strong><br />
              CIN: U51109KA2024PTC198234
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-2">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-xs px-6 py-3 rounded shadow hover:bg-blue-700 transition-colors uppercase tracking-wider"
        >
          <span>Explore Extra Mart Products</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
