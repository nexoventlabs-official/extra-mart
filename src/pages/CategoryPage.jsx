import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { ChevronRight, ArrowRight, Sparkles, Filter } from 'lucide-react';

export const CategoryPage = () => {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.id === slug) || CATEGORIES[0];
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const categoryProducts = PRODUCTS.filter((p) => p.category === category.id);

  const filteredProducts = categoryProducts
    .filter((p) => {
      if (selectedSubcategory === 'All') return true;
      return p.subcategory === selectedSubcategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'discount') return b.discount - a.discount;
      return b.ratingCount - a.ratingCount;
    });

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 space-y-6">
      {/* Breadcrumbs */}
      <div className="text-xs text-gray-500 flex items-center gap-1.5 px-1">
        <Link to="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link to="/products" className="hover:text-brand-primary">Supermarket</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="font-semibold text-gray-800">{category.name}</span>
      </div>

      {/* Category Hero Banner */}
      <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-lg text-center md:text-left z-10">
          <span className="text-xs font-black uppercase tracking-wider text-brand-yellow bg-white/10 px-3 py-1 rounded-full">
            Supermarket Department
          </span>
          <h1 className="text-2xl sm:text-4xl font-black">{category.name}</h1>
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
            {category.description}
          </p>
          <div className="pt-2 text-xs font-semibold text-amber-300">
            ⚡ Express 2-Hour Delivery Slot Available for All Products
          </div>
        </div>

        <div className="w-48 h-32 sm:w-64 sm:h-40 rounded-lg overflow-hidden border-2 border-white/20 shadow-xl shrink-0">
          <img src={category.banner} alt={category.name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Subcategory Pills Strip */}
      <div className="bg-white rounded-md border border-gray-200 p-3 shadow-sm flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
          <span className="text-xs font-bold text-gray-700 uppercase tracking-wider shrink-0 mr-1">
            Subcategories:
          </span>
          <button
            onClick={() => setSelectedSubcategory('All')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${
              selectedSubcategory === 'All'
                ? 'bg-brand-primary text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Items ({categoryProducts.length})
          </button>
          {category.subcategories?.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedSubcategory === sub
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Sort Filter */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-500 font-medium">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-xs font-semibold text-gray-800 bg-white"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="discount">Highest Discount</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Other Categories Carousel */}
      <div className="bg-white rounded-md border border-gray-200 p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
          Explore Other Supermarket Departments
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CATEGORIES.filter((c) => c.id !== category.id).slice(0, 4).map((c) => (
            <Link
              key={c.id}
              to={`/category/${c.id}`}
              className="flex items-center gap-3 p-2.5 rounded border border-gray-200 hover:border-brand-primary hover:bg-blue-50/40 transition-all group"
            >
              <img src={c.banner} alt={c.name} className="w-12 h-12 object-cover rounded shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-gray-900 group-hover:text-brand-primary line-clamp-1">{c.name}</h4>
                <p className="text-[11px] text-gray-500">Explore Items →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
