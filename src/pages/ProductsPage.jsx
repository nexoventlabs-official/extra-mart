import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/product/ProductCard';
import {
  Filter,
  X,
  ChevronRight,
  Star,
  Check,
  RotateCcw,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const searchParam = searchParams.get('search') || '';

  // Local filter states
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [minDiscount, setMinDiscount] = useState(0);
  const [assuredOnly, setAssuredOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState('popularity'); // popularity, price-asc, price-desc, rating, discount
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync category param if URL changes
  React.useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Extract unique brands from all products
  const allBrands = useMemo(() => {
    const brands = new Set(PRODUCTS.map((p) => p.brand));
    return Array.from(brands).sort();
  }, []);

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchParam) {
        const q = searchParam.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.subcategory.toLowerCase().includes(q);
        if (!matches) return false;
      }
      // Price filter
      if (product.price > priceRange) {
        return false;
      }
      // Rating filter
      if (minRating > 0 && product.rating < minRating) {
        return false;
      }
      // Discount filter
      if (minDiscount > 0 && product.discount < minDiscount) {
        return false;
      }
      // Assured only
      if (assuredOnly && !product.isAssured) {
        return false;
      }
      // In stock
      if (inStockOnly && !product.inStock) {
        return false;
      }
      // Brands
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popularity') return b.ratingCount - a.ratingCount;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'discount') return b.discount - a.discount;
      return 0;
    });
  }, [
    selectedCategory,
    searchParam,
    priceRange,
    minRating,
    minDiscount,
    assuredOnly,
    inStockOnly,
    selectedBrands,
    sortBy
  ]);

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory('');
    setPriceRange(1000);
    setMinRating(0);
    setMinDiscount(0);
    setAssuredOnly(false);
    setInStockOnly(false);
    setSelectedBrands([]);
    setSortBy('popularity');
    setSearchParams({});
  };

  const activeFiltersCount =
    (selectedCategory ? 1 : 0) +
    (priceRange < 1000 ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (minDiscount > 0 ? 1 : 0) +
    (assuredOnly ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    selectedBrands.length;

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 space-y-4">
      {/* Breadcrumbs */}
      <div className="text-xs text-gray-500 flex items-center gap-1.5 px-1">
        <Link to="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link to="/products" className="hover:text-brand-primary">Supermarket</Link>
        {selectedCategory && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-gray-800">
              {CATEGORIES.find((c) => c.id === selectedCategory)?.name || selectedCategory}
            </span>
          </>
        )}
        {searchParam && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-gray-800">"{searchParam}"</span>
          </>
        )}
      </div>

      {/* Main 2-Column Flipkart Layout */}
      <div className="flex gap-4 items-start">
        
        {/* Left Filter Sidebar (Desktop) */}
        <aside className="w-64 bg-white rounded-md border border-gray-200 shadow-sm p-4 hidden md:block shrink-0 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-brand-primary" />
              <span>Filters</span>
            </h3>
            {activeFiltersCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-brand-primary hover:underline font-semibold flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Clear All
              </button>
            )}
          </div>

          {/* Categories Filter */}
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
              Categories
            </h4>
            <div className="space-y-1 text-xs">
              <button
                onClick={() => setSelectedCategory('')}
                className={`w-full text-left py-1 px-2 rounded ${
                  !selectedCategory
                    ? 'font-bold bg-blue-50 text-brand-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All Departments
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`w-full text-left py-1 px-2 rounded truncate transition-colors ${
                    selectedCategory === c.id
                      ? 'font-bold bg-blue-50 text-brand-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between text-xs font-bold text-gray-800 mb-2">
              <span>Price Range</span>
              <span className="text-brand-primary">Up to ₹{priceRange}</span>
            </div>
            <input
              type="range"
              min={30}
              max={1000}
              step={10}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-brand-primary cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>₹30</span>
              <span>₹500</span>
              <span>₹1000+</span>
            </div>
          </div>

          {/* Extra Mart Assured Filter */}
          <div className="border-t border-gray-100 pt-4">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-gray-800">
              <input
                type="checkbox"
                checked={assuredOnly}
                onChange={(e) => setAssuredOnly(e.target.checked)}
                className="w-4 h-4 rounded text-brand-primary focus:ring-brand-primary border-gray-300"
              />
              <span className="flex items-center gap-1 text-brand-primary font-black italic">
                <Check className="w-3.5 h-3.5 stroke-[3]" /> Extra Mart Assured
              </span>
            </label>
          </div>

          {/* Discount Filter */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
              Discount
            </h4>
            <div className="space-y-1.5 text-xs text-gray-700">
              {[
                { label: '30% or more', val: 30 },
                { label: '20% or more', val: 20 },
                { label: '10% or more', val: 10 },
                { label: 'Any discount', val: 0 }
              ].map((d) => (
                <label key={d.val} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="discount"
                    checked={minDiscount === d.val}
                    onChange={() => setMinDiscount(d.val)}
                    className="text-brand-primary focus:ring-brand-primary"
                  />
                  <span>{d.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Customer Ratings Filter */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
              Customer Ratings
            </h4>
            <div className="space-y-1.5 text-xs text-gray-700">
              {[4, 3].map((r) => (
                <label key={r} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={minRating === r}
                    onChange={() => setMinRating(minRating === r ? 0 : r)}
                    className="text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="flex items-center gap-1">
                    <span>{r}★ & above</span>
                  </span>
                </label>
              ))}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={minRating === 0}
                  onChange={() => setMinRating(0)}
                  className="text-brand-primary focus:ring-brand-primary"
                />
                <span>All Ratings</span>
              </label>
            </div>
          </div>

          {/* Brands Filter */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
              Popular Brands
            </h4>
            <div className="max-h-40 overflow-y-auto space-y-1.5 text-xs pr-1">
              {allBrands.map((brand) => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandToggle(brand)}
                    className="w-3.5 h-3.5 rounded text-brand-primary focus:ring-brand-primary border-gray-300"
                  />
                  <span className="truncate">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="border-t border-gray-100 pt-4">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-3.5 h-3.5 rounded text-brand-primary focus:ring-brand-primary border-gray-300"
              />
              <span>In Stock Items Only</span>
            </label>
          </div>
        </aside>

        {/* Right Content Products Area */}
        <main className="flex-1 min-w-0 space-y-3">
          
          {/* Header Bar with Sorting Tabs (Flipkart Style) */}
          <div className="bg-white rounded-md border border-gray-200 p-3 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
              <div>
                <h1 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                  {selectedCategory
                    ? CATEGORIES.find((c) => c.id === selectedCategory)?.name
                    : searchParam
                    ? `Results for "${searchParam}"`
                    : 'All Supermarket Groceries & Essentials'}
                </h1>
                <p className="text-xs text-gray-500">
                  Showing {filteredProducts.length} items with instant 2-hour doorstep delivery
                </p>
              </div>

              {/* Mobile Filter Toggle Button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="md:hidden flex items-center justify-center gap-2 bg-blue-50 text-brand-primary font-bold text-xs py-2 px-4 rounded border border-blue-200"
              >
                <Filter className="w-4 h-4" />
                <span>Filters ({activeFiltersCount})</span>
              </button>
            </div>

            {/* Flipkart-Style Horizontal Sorting Tabs */}
            <div className="flex items-center gap-1 sm:gap-4 pt-3 overflow-x-auto text-xs text-gray-600 font-medium hide-scrollbar">
              <span className="font-bold text-gray-900 uppercase tracking-wider text-[11px] shrink-0">
                Sort By
              </span>
              {[
                { id: 'popularity', label: 'Popularity' },
                { id: 'price-asc', label: 'Price -- Low to High' },
                { id: 'price-desc', label: 'Price -- High to Low' },
                { id: 'rating', label: 'Customer Rating' },
                { id: 'discount', label: 'Discount %' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSortBy(tab.id)}
                  className={`px-2.5 py-1 rounded-sm whitespace-nowrap transition-colors ${
                    sortBy === tab.id
                      ? 'text-brand-primary font-bold border-b-2 border-brand-primary bg-blue-50/50'
                      : 'hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Chips */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 py-1">
              <span className="text-[11px] text-gray-500 font-medium">Applied:</span>
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 bg-white border border-gray-300 text-gray-800 text-xs px-2.5 py-1 rounded shadow-xs">
                  {CATEGORIES.find((c) => c.id === selectedCategory)?.name || selectedCategory}
                  <button onClick={() => setSelectedCategory('')}><X className="w-3 h-3 text-gray-500" /></button>
                </span>
              )}
              {priceRange < 1000 && (
                <span className="inline-flex items-center gap-1 bg-white border border-gray-300 text-gray-800 text-xs px-2.5 py-1 rounded shadow-xs">
                  Under ₹{priceRange}
                  <button onClick={() => setPriceRange(1000)}><X className="w-3 h-3 text-gray-500" /></button>
                </span>
              )}
              {minDiscount > 0 && (
                <span className="inline-flex items-center gap-1 bg-white border border-gray-300 text-gray-800 text-xs px-2.5 py-1 rounded shadow-xs">
                  {minDiscount}%+ OFF
                  <button onClick={() => setMinDiscount(0)}><X className="w-3 h-3 text-gray-500" /></button>
                </span>
              )}
              {assuredOnly && (
                <span className="inline-flex items-center gap-1 bg-white border border-gray-300 text-brand-primary font-semibold text-xs px-2.5 py-1 rounded shadow-xs">
                  Assured Only
                  <button onClick={() => setAssuredOnly(false)}><X className="w-3 h-3 text-gray-500" /></button>
                </span>
              )}
              {selectedBrands.map((b) => (
                <span key={b} className="inline-flex items-center gap-1 bg-white border border-gray-300 text-gray-800 text-xs px-2.5 py-1 rounded shadow-xs">
                  {b}
                  <button onClick={() => handleBrandToggle(b)}><X className="w-3 h-3 text-gray-500" /></button>
                </span>
              ))}
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-md border border-gray-200 p-12 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-brand-primary">
                <SlidersHorizontal className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-base font-bold text-gray-900">No supermarket items found matching your filters</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try widening your price range, clearing brand selections, or search for other daily essentials.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-brand-primary text-white font-bold text-xs px-5 py-2.5 rounded shadow hover:bg-blue-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end md:hidden animate-fade-in">
          <div className="bg-white w-4/5 max-w-sm h-full overflow-y-auto p-4 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-sm text-gray-900">Filter Supermarket Products</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="p-1 text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Mobile category selection */}
            <div>
              <h4 className="text-xs font-bold text-gray-700 uppercase mb-2">Category</h4>
              <div className="space-y-1 text-xs">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedCategory(c.id);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`block w-full text-left py-1.5 px-2 rounded ${
                      selectedCategory === c.id ? 'bg-blue-50 text-brand-primary font-bold' : 'text-gray-700'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t pt-3">
              <button
                onClick={() => {
                  handleResetFilters();
                  setIsMobileFilterOpen(false);
                }}
                className="w-full py-2 bg-gray-100 text-gray-800 font-bold text-xs rounded mb-2"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-2 bg-brand-primary text-white font-bold text-xs rounded"
              >
                Apply Filters ({filteredProducts.length} items)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
