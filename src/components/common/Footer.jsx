import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  HelpCircle,
  Gift,
  Store,
  Mail,
  Phone,
  ShieldCheck,
  Truck,
  RotateCcw,
  Award,
  Sparkles
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#172337] text-white text-xs mt-12 border-t border-gray-800">
      {/* Supermarket Value Propositions Bar */}
      <div className="bg-[#1C2C44] border-b border-gray-700/60 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-brand-primary shrink-0">
              <Truck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">2-Hour Express Delivery</h5>
              <p className="text-[11px] text-gray-400">Guaranteed slots or free shipping</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
              <Award className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">100% Fresh & Authentic</h5>
              <p className="text-[11px] text-gray-400">Direct from certified mandi & farms</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <RotateCcw className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Instant Doorstep Returns</h5>
              <p className="text-[11px] text-gray-400">No questions asked refund</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Safe & Secure Payments</h5>
              <p className="text-[11px] text-gray-400">256-bit SSL encrypted checkout</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Flipkart-Style Multi-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 text-gray-300">
          
          {/* Column 1: ABOUT */}
          <div>
            <h4 className="text-gray-400 font-bold uppercase tracking-wider text-[11px] mb-3">About</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/contact" className="hover:underline hover:text-white">Contact Us</Link></li>
              <li><Link to="/about" className="hover:underline hover:text-white">About Us</Link></li>
              <li><Link to="/about" className="hover:underline hover:text-white">Careers</Link></li>
              <li><Link to="/about" className="hover:underline hover:text-white">Extra Mart Stories</Link></li>
              <li><Link to="/about" className="hover:underline hover:text-white">Press & Media</Link></li>
              <li><Link to="/about" className="hover:underline hover:text-white">Corporate Information</Link></li>
            </ul>
          </div>

          {/* Column 2: HELP */}
          <div>
            <h4 className="text-gray-400 font-bold uppercase tracking-wider text-[11px] mb-3">Help</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/faq" className="hover:underline hover:text-white">Payments</Link></li>
              <li><Link to="/faq" className="hover:underline hover:text-white">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:underline hover:text-white">Cancellation & Returns</Link></li>
              <li><Link to="/faq" className="hover:underline hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:underline hover:text-white">Report Infringement</Link></li>
            </ul>
          </div>

          {/* Column 3: CONSUMER POLICY */}
          <div>
            <h4 className="text-gray-400 font-bold uppercase tracking-wider text-[11px] mb-3">Consumer Policy</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/returns" className="hover:underline hover:text-white">Cancellation & Returns</Link></li>
              <li><Link to="/terms" className="hover:underline hover:text-white">Terms Of Use</Link></li>
              <li><Link to="/privacy" className="hover:underline hover:text-white">Security & Privacy</Link></li>
              <li><Link to="/privacy" className="hover:underline hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline hover:text-white">Grievance Redressal</Link></li>
              <li><Link to="/faq" className="hover:underline hover:text-white">EPR Compliance</Link></li>
            </ul>
          </div>

          {/* Column 4: SOCIAL */}
          <div>
            <h4 className="text-gray-400 font-bold uppercase tracking-wider text-[11px] mb-3">Connect With Us</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">Twitter / X</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">YouTube</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">Instagram</a></li>
            </ul>
          </div>

          {/* Column 5: MAIL US (Border Left on desktop) */}
          <div className="md:border-l md:border-gray-700 md:pl-6">
            <h4 className="text-gray-400 font-bold uppercase tracking-wider text-[11px] mb-3">Mail Us:</h4>
            <div className="text-xs text-gray-300 leading-relaxed space-y-1">
              <p className="font-semibold text-white">Extra Mart Internet Private Limited,</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
              <p className="pt-2">
                <span className="text-gray-400">Support Email:</span><br />
                <a href="mailto:contact@extramart.online" className="text-blue-400 hover:underline font-medium">
                  contact@extramart.online
                </a>
              </p>
              <p>
                <span className="text-gray-400">Official Portal:</span><br />
                <span className="text-amber-300 font-semibold">extramart.online</span>
              </p>
            </div>
          </div>

          {/* Column 6: REGISTERED OFFICE */}
          <div>
            <h4 className="text-gray-400 font-bold uppercase tracking-wider text-[11px] mb-3">Registered Office Address:</h4>
            <div className="text-xs text-gray-300 leading-relaxed space-y-1">
              <p className="font-semibold text-white">Extra Mart Internet Private Limited,</p>
              <p>Outer Ring Road, Bellandur,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
              <p className="text-[11px] text-gray-400 pt-1">CIN: U51109KA2024PTC198234</p>
              <p className="text-[11px] text-gray-400">
                Telephone: <a href="tel:18002029832" className="text-blue-400 hover:underline">1800-202-9832</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Flipkart-Style Horizontal Bottom Utility Bar */}
      <div className="border-t border-gray-700/80 py-4 px-4 bg-[#111A29]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/about" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Store className="w-4 h-4 text-brand-yellow" />
              <span>Become a Seller</span>
            </Link>
            <Link to="/about" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span>Advertise</span>
            </Link>
            <Link to="/products" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Gift className="w-4 h-4 text-brand-yellow" />
              <span>Gift Cards</span>
            </Link>
            <Link to="/contact" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <HelpCircle className="w-4 h-4 text-brand-yellow" />
              <span>Help Center</span>
            </Link>
          </div>

          {/* Copyright & Website */}
          <div className="text-center md:text-right text-gray-400 text-xs">
            <span>© 2026 Extra Mart (<span className="text-white font-medium">extramart.online</span>). All rights reserved.</span>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mr-1">Payment Partners:</span>
            <div className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded text-[11px] font-semibold text-gray-200">
              <span>Visa</span> • <span>Mastercard</span> • <span>RuPay</span> • <span>UPI</span> • <span>COD</span>
            </div>
          </div>

        </div>
      </div>

      {/* Supermarket Informational Footer Note (Flipkart Grocery SEO layout) */}
      <div className="bg-[#0D1522] py-6 px-4 text-gray-400 text-[11px] border-t border-gray-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <h5 className="font-bold text-gray-300 text-xs uppercase tracking-wider">
            Extra Mart: India's Premier Online Supermarket & Grocery Store
          </h5>
          <p className="leading-relaxed">
            Welcome to <strong>Extra Mart (extramart.online)</strong>, your trusted digital supermarket bringing farm-fresh vegetables, handpicked juicy fruits, pure dairy, daily staples (atta, dal, rice, edible oils), teatime munchies, beverages, and personal hygiene essentials directly to your doorstep. Powered by advanced cold-chain technology and dedicated 2-hour express delivery slots, Extra Mart guarantees supermarket-grade quality at unbeatable prices lower than your local kirana and traditional supermarket chains.
          </p>
          <p className="leading-relaxed">
            Our catalog features household staples from trusted brands including Amul, Aashirvaad, Tata Sampann, India Gate, Fortune, Haldiram's, Nescafe, Dettol, Surf Excel, and Dove. Every fresh vegetable and fruit batch undergoes rigorous 3-step grading at our certified farm collection centers to guarantee zero chemical ripening and optimum freshness. For customer assistance, write to us 24x7 at <a href="mailto:contact@extramart.online" className="text-blue-400 underline">contact@extramart.online</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};
