import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { CATEGORIES } from '../../data/categories';
import { PRODUCTS } from '../../data/products';
import { PincodeModal } from './PincodeModal';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  MapPin,
  ChevronDown,
  Clock,
  Sparkles,
  Package,
  HelpCircle,
  LogOut,
  X,
  Menu,
  ShieldCheck,
  TrendingUp,
  Tag
} from 'lucide-react';

export const Header = () => {
  const navigate = useNavigate();
  const { totalItemsCount, subtotal, wishlist, deliveryLocation } = useCart();
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchRef = useRef(null);
  const accountRef = useRef(null);

  // Search autocomplete
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const q = searchQuery.toLowerCase();
      const matched = PRODUCTS.filter(
        p => p.name.toLowerCase().includes(q) ||
             p.brand.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             p.subcategory.toLowerCase().includes(q)
      ).slice(0, 6);
      setSearchSuggestions(matched);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setIsAccountMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSelectSuggestion = (p) => {
    setSearchQuery('');
    setIsSearchFocused(false);
    navigate(`/product/${p.id}`);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-md">
        {/* Top Mini Promo Bar */}
        <div className="bg-[#1C5BBA] text-white text-xs py-1.5 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                Extra Mart Supermarket Savings: Flat ₹100 OFF on orders above ₹999 with code <strong>FRESH100</strong>
              </span>
              <span className="text-blue-200">|</span>
              <span className="flex items-center gap-1 text-blue-100">
                <Clock className="w-3.5 h-3.5" /> Express 2-Hour Delivery Slot Available
              </span>
            </div>
            <div className="flex items-center gap-4 text-blue-100 text-[11px]">
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-white transition-colors">24x7 Support (contact@extramart.online)</Link>
              <span>•</span>
              <span className="text-amber-300 font-semibold">extramart.online</span>
            </div>
          </div>
        </div>

        {/* Main Flipkart-Style Blue Header */}
        <div className="bg-brand-primary text-white py-2.5 px-3 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 md:gap-6">
            
            {/* Mobile menu hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Extra Mart Brand Logo */}
            <div className="flex items-center gap-4 shrink-0">
              <Link to="/" className="flex items-center group">
                <span className="text-xl sm:text-2xl font-black tracking-wide text-white drop-shadow-sm font-sans">
                  Extra Mart
                </span>
              </Link>

              {/* Delivery Pincode Selector */}
              <button
                onClick={() => setIsPincodeModalOpen(true)}
                className="hidden lg:flex items-center gap-1.5 bg-blue-700/50 hover:bg-blue-700/80 text-left px-3 py-1.5 rounded text-xs transition-colors border border-blue-400/30"
              >
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0" />
                <div>
                  <div className="text-[10px] text-blue-200 uppercase font-semibold leading-tight">Deliver to</div>
                  <div className="font-bold text-white leading-tight truncate max-w-[120px]">
                    {deliveryLocation.pincode} ({deliveryLocation.city})
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-blue-200 ml-0.5" />
              </button>
            </div>

            {/* Flipkart-Style Search Bar */}
            <div ref={searchRef} className="relative flex-1 max-w-2xl">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search for fresh vegetables, milk, atta, snacks, grocery brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-full bg-white text-gray-900 text-sm pl-4 pr-11 py-2 sm:py-2.5 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow placeholder-gray-500"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-10 text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : null}
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 px-3.5 bg-transparent text-brand-primary hover:text-blue-700 flex items-center justify-center transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Autocomplete Suggestions Dropdown */}
              {isSearchFocused && searchSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1.5 bg-white text-gray-800 rounded-md shadow-2xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50 border-b">
                    Products & Groceries
                  </div>
                  {searchSuggestions.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelectSuggestion(p)}
                      className="flex items-center gap-3 p-2.5 hover:bg-blue-50 cursor-pointer border-b border-gray-50 last:border-0 transition-colors"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-10 h-10 object-cover rounded shrink-0 border"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-gray-900 truncate">{p.name}</div>
                        <div className="text-[11px] text-gray-500">
                          {p.brand} • <span className="text-brand-green font-bold">₹{p.price}</span>{' '}
                          <span className="line-through text-gray-400">₹{p.originalPrice}</span>
                        </div>
                      </div>
                      <span className="text-[10px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded">
                        {p.discount}% OFF
                      </span>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="w-full text-center py-2 text-xs font-semibold text-brand-primary bg-blue-50/60 hover:bg-blue-100 transition-colors"
                  >
                    View all matching results for "{searchQuery}" →
                  </button>
                </div>
              )}
            </div>

            {/* Right Action Icons: Login, Wishlist, Cart */}
            <div className="flex items-center gap-2 sm:gap-5 shrink-0">
              
              {/* Account / Login Dropdown */}
              <div ref={accountRef} className="relative">
                <button
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                  className="bg-white text-brand-primary font-bold px-4 py-1.5 rounded text-sm hover:bg-blue-50 transition-colors hidden sm:flex items-center gap-1.5 shadow-sm"
                >
                  <User className="w-4 h-4 text-brand-primary" />
                  <span>My Account</span>
                  <ChevronDown className="w-3.5 h-3.5 text-brand-primary" />
                </button>

                {/* Account mobile icon */}
                <button
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                  className="sm:hidden p-1.5 text-white hover:bg-white/10 rounded"
                >
                  <User className="w-6 h-6" />
                </button>

                {/* Account Dropdown Menu */}
                {isAccountMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-md shadow-2xl border border-gray-100 text-gray-800 py-1.5 z-50 animate-fade-in">
                    <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
                      <p className="text-xs text-gray-500">Welcome to Extra Mart</p>
                      <p className="text-sm font-bold text-gray-900">supermarket@extramart.online</p>
                    </div>
                    <Link
                      to="/orders"
                      onClick={() => setIsAccountMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-brand-primary transition-colors"
                    >
                      <Package className="w-4 h-4 text-blue-600" />
                      <span>My Orders & Tracking</span>
                    </Link>
                    <Link
                      to="/wishlist"
                      onClick={() => setIsAccountMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-brand-primary transition-colors"
                    >
                      <Heart className="w-4 h-4 text-pink-500" />
                      <span>My Wishlist ({wishlist.length})</span>
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsAccountMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-brand-primary transition-colors"
                    >
                      <HelpCircle className="w-4 h-4 text-emerald-600" />
                      <span>24x7 Customer Care</span>
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={() => {
                        setIsAccountMenuOpen(false);
                        setIsPincodeModalOpen(true);
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      <span>Change Pincode ({deliveryLocation.pincode})</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                className="hidden md:flex items-center gap-1.5 text-white hover:text-amber-200 transition-colors text-sm font-semibold relative"
              >
                <div className="relative">
                  <Heart className="w-5 h-5" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </div>
                <span>Wishlist</span>
              </Link>

              {/* Flipkart Supermarket Cart Button */}
              <Link
                to="/cart"
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded font-bold text-sm transition-all shadow-sm border border-blue-400/40 group"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 text-brand-yellow group-hover:scale-110 transition-transform" />
                  {totalItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[11px] font-black w-4.5 h-4.5 min-w-[18px] rounded-full flex items-center justify-center px-1">
                      {totalItemsCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col text-left leading-none">
                  <span className="text-[10px] text-blue-200 font-normal">Cart</span>
                  <span className="text-white text-xs font-black">₹{subtotal}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Supermarket Department Navigation Strip */}
        <nav className="bg-white border-b border-gray-200 overflow-x-auto hide-scrollbar">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold text-gray-700 whitespace-nowrap min-w-max md:min-w-0">
            <Link
              to="/products"
              className="py-2.5 px-3 hover:text-brand-primary flex items-center gap-1.5 border-b-2 border-transparent hover:border-brand-primary transition-all text-brand-primary font-bold"
            >
              <Tag className="w-3.5 h-3.5 text-brand-orange" />
              <span>All Products</span>
            </Link>

            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="py-2.5 px-3 hover:text-brand-primary flex items-center gap-1 border-b-2 border-transparent hover:border-brand-primary transition-all text-gray-700"
              >
                <span>{cat.shortName}</span>
              </Link>
            ))}

            <Link
              to="/orders"
              className="py-2.5 px-3 text-brand-green font-bold hover:text-emerald-800 flex items-center gap-1 transition-colors"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Track Orders</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/60 flex animate-fade-in">
            <div className="bg-white w-4/5 max-w-sm h-full overflow-y-auto p-4 space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center">
                  <span className="text-xl font-black tracking-wide text-brand-primary font-sans">
                    Extra Mart
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Delivery location selector in mobile */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsPincodeModalOpen(true);
                }}
                className="w-full flex items-center gap-2 p-2.5 rounded bg-blue-50 text-brand-primary text-xs font-semibold"
              >
                <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Deliver to: {deliveryLocation.pincode} - {deliveryLocation.city}</span>
              </button>

              <div className="space-y-1">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2">Departments</h4>
                <Link
                  to="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded text-sm font-semibold text-gray-800 hover:bg-gray-100"
                >
                  🛒 All Supermarket Products
                </Link>
                {CATEGORIES.map(c => (
                  <Link
                    key={c.id}
                    to={`/category/${c.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded text-sm text-gray-700 hover:bg-blue-50 hover:text-brand-primary"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>

              <div className="border-t pt-3 space-y-1">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2">Account & Help</h4>
                <Link
                  to="/orders"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  📦 My Orders & Tracking
                </Link>
                <Link
                  to="/wishlist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  ❤️ My Wishlist ({wishlist.length})
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  🏢 About Extra Mart
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  📞 Contact Support (contact@extramart.online)
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Pincode Modal */}
      <PincodeModal
        isOpen={isPincodeModalOpen}
        onClose={() => setIsPincodeModalOpen(false)}
      />
    </>
  );
};
