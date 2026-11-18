import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Zap,
  ArrowRight,
  Percent,
  Sparkles,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Tag
} from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    title: 'SUPERMARKET MEGA SAVINGS',
    subtitle: 'Daily Staples & Grocery at Unbeatable Wholesale Rates',
    highlight: 'Up to 50% OFF',
    code: 'Use code EXTRA50',
    cta: 'Shop Daily Staples',
    link: '/products?category=staples-grains',
    bgGradient: 'from-blue-600 to-indigo-800',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: '100% FARM FRESH HARVEST',
    subtitle: 'Delivered in 2 Hours Directly From Certified Mandis',
    highlight: 'Starts at ₹29/kg',
    code: 'Zero Chemical Ripening',
    cta: 'Order Fresh Produce',
    link: '/products?category=fruits-vegetables',
    bgGradient: 'from-emerald-700 to-green-900',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'MORNING DAIRY & BREAKFAST',
    subtitle: 'Fresh Milk, Butter, Farm Eggs & Zero Maida Breads',
    highlight: 'Flat 20% OFF Combos',
    code: 'Delivered Daily by 7 AM',
    cta: 'Explore Dairy',
    link: '/products?category=dairy-bakery',
    bgGradient: 'from-amber-600 to-orange-700',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1000&q=80'
  }
];

export const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Countdown timer for "Deal of the Day"
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Slide autoplay
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(slideTimer);
  }, []);

  // Product groups
  const dealOfTheDayProducts = PRODUCTS.filter(p => p.tag === 'Deal of the Day' || p.discount >= 25).slice(0, 4);
  const bestsellers = PRODUCTS.filter(p => p.tag === 'Bestseller' || p.rating >= 4.8).slice(0, 4);
  const freshVeggies = PRODUCTS.filter(p => p.category === 'fruits-vegetables').slice(0, 4);
  const dailyStaples = PRODUCTS.filter(p => p.category === 'staples-grains').slice(0, 4);

  return (
    <div className="space-y-6 pb-8">
      {/* 1. Flipkart-Style Category Icon Bar */}
      <section className="bg-white py-4 px-2 sm:px-6 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-4 text-center">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="flex flex-col items-center group p-1.5 rounded-lg hover:bg-blue-50/60 transition-all"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-1.5 border-2 border-transparent group-hover:border-brand-primary p-0.5 transition-all shadow-sm">
                <img
                  src={cat.banner}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-gray-800 group-hover:text-brand-primary leading-tight line-clamp-1">
                {cat.shortName}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. Hero Carousel Banner */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="relative rounded-lg overflow-hidden shadow-fk bg-gray-900 min-h-[220px] sm:min-h-[340px]">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 text-white bg-gradient-to-r ${slide.bgGradient} ${
                idx === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div className="max-w-lg space-y-2 sm:space-y-3 text-center md:text-left z-10">
                <span className="inline-flex items-center gap-1.5 bg-brand-yellow text-gray-900 text-xs sm:text-sm font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> {slide.highlight}
                </span>
                <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-base text-gray-100 font-medium line-clamp-2">
                  {slide.subtitle}
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <Link
                    to={slide.link}
                    className="bg-brand-orange hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded shadow-lg transition-transform active:scale-95 flex items-center gap-2"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-amber-200 font-bold bg-black/30 px-3 py-2 rounded border border-amber-300/30">
                    {slide.code}
                  </span>
                </div>
              </div>

              {/* Slide image preview */}
              <div className="hidden md:block w-72 h-64 rounded-lg overflow-hidden shadow-2xl border-2 border-white/20 transform rotate-1 hover:rotate-0 transition-transform">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}

          {/* Carousel Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-14 bg-white/30 hover:bg-white/70 text-gray-900 rounded-r flex items-center justify-center transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-14 bg-white/30 hover:bg-white/70 text-gray-900 rounded-l flex items-center justify-center transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide ? 'w-6 bg-brand-yellow' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deal of the Day with Countdown Timer (Flipkart style) */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-gray-100 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-600 animate-ping"></span>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
                  Deals of the Day
                </h3>
              </div>
              <div className="flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded text-xs font-bold">
                <Clock className="w-4 h-4" />
                <span>
                  {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s Left
                </span>
              </div>
            </div>

            <Link
              to="/products"
              className="bg-brand-primary text-white font-bold text-xs px-4 py-2 rounded hover:bg-blue-700 transition-colors self-start sm:self-auto shadow-sm"
            >
              VIEW ALL DEALS
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {dealOfTheDayProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bank Offers & Express Delivery Promo Strip */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">2-Hour Express Delivery</h4>
              <p className="text-xs text-gray-600">Fresh vegetables, milk & breakfast delivered lightning fast.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Extra Mart Plus Guarantee</h4>
              <p className="text-xs text-gray-600">Use code <strong>EXTRA50</strong> for ₹50 off on orders above ₹499.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Zero Contact & Fresh Checked</h4>
              <p className="text-xs text-gray-600">Every vegetable & fruit is hygienically packed in breathable crates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Farm Fresh Fruits & Vegetables Showcase */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-black text-gray-900">Farm Fresh Fruits & Vegetables</h3>
              <p className="text-xs text-gray-500">Handpicked organic produce direct from local farms</p>
            </div>
            <Link
              to="/category/fruits-vegetables"
              className="text-brand-primary text-xs font-bold hover:underline flex items-center gap-1"
            >
              <span>View All Fresh Produce</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {freshVeggies.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Daily Staples, Atta & Basmati Rice */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-black text-gray-900">Daily Staples & Grains</h3>
              <p className="text-xs text-gray-500">Aashirvaad Atta, Tata Sampann Dals & India Gate Basmati</p>
            </div>
            <Link
              to="/category/staples-grains"
              className="text-brand-primary text-xs font-bold hover:underline flex items-center gap-1"
            >
              <span>Explore Staples</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {dailyStaples.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bestselling Supermarket Favorites */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-black text-gray-900">Bestselling Grocery Essentials</h3>
              <p className="text-xs text-gray-500">Highest rated daily items loved by 50,000+ Indian households</p>
            </div>
            <Link
              to="/products"
              className="text-brand-primary text-xs font-bold hover:underline flex items-center gap-1"
            >
              <span>Browse Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {bestsellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Supermarket Trust Features */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-lg p-6 sm:p-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="bg-brand-yellow text-blue-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              Why Extra Mart Supermarket?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              India's Favorite Digital Supermarket Experience
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              We bring the trust of your neighborhood supermarket and the convenience of instant 2-hour doorstep delivery. Sourced fresh, packed hygienically, and priced lower every single day.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xl sm:text-2xl font-black text-brand-yellow">50,000+</div>
                <div className="text-xs text-blue-200">Daily Happy Orders</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xl sm:text-2xl font-black text-brand-yellow">2 Hours</div>
                <div className="text-xs text-blue-200">Guaranteed Delivery</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xl sm:text-2xl font-black text-brand-yellow">100% Fresh</div>
                <div className="text-xs text-blue-200">Or Instant Refund</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xl sm:text-2xl font-black text-brand-yellow">₹499+</div>
                <div className="text-xs text-blue-200">Free Home Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
