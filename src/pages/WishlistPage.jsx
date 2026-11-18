import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Heart, ShoppingCart, Trash2, ArrowRight, Star } from 'lucide-react';

export const WishlistPage = () => {
  const { wishlist, toggleWishlist, addToCart } = useCart();

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    toggleWishlist(product.id);
  };

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900">
            My Wishlist ({wishlist.length})
          </h1>
          <p className="text-xs text-gray-500">Saved supermarket groceries to buy later</p>
        </div>
        <Link
          to="/products"
          className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center max-w-md mx-auto space-y-4">
          <Heart className="w-16 h-16 text-gray-300 mx-auto" />
          <h3 className="text-base font-bold text-gray-800">Your wishlist is empty</h3>
          <p className="text-xs text-gray-500">
            Tap the heart icon on any supermarket item to save it here for quick re-ordering.
          </p>
          <Link
            to="/products"
            className="inline-block bg-brand-primary text-white font-bold text-xs px-5 py-2.5 rounded shadow hover:bg-blue-700"
          >
            Explore Groceries
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-md border border-gray-200 shadow-sm divide-y divide-gray-100">
          {wishlistedProducts.map((p) => (
            <div key={p.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link to={`/product/${p.id}`} className="w-20 h-20 rounded border p-1 bg-gray-50 shrink-0">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                </Link>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{p.brand}</span>
                  <Link
                    to={`/product/${p.id}`}
                    className="text-sm font-bold text-gray-900 hover:text-brand-primary block line-clamp-1"
                  >
                    {p.name}
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold text-gray-500">{p.unit}</span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-0.5 bg-brand-green text-white text-[10px] font-bold px-1 rounded">
                      <span>{p.rating}</span>
                      <Star className="w-2.5 h-2.5 fill-current" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1.5">
                    <span className="text-sm font-black text-gray-900">₹{p.price}</span>
                    <span className="text-xs text-gray-400 line-through">₹{p.originalPrice}</span>
                    <span className="text-xs font-bold text-brand-green">{p.discount}% off</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => handleMoveToCart(p)}
                  className="bg-brand-primary hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Move to Cart</span>
                </button>
                <button
                  onClick={() => toggleWishlist(p.id)}
                  className="p-2 text-gray-400 hover:text-red-600 rounded transition-colors"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
