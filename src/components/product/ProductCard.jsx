import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star, Heart, Plus, Minus, ShoppingCart, Check } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { cart, addToCart, updateQuantity, isInWishlist, toggleWishlist } = useCart();

  // Find if item already in cart
  const cartItem = cart.find((i) => i.product.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="bg-white rounded-md border border-gray-200 hover:shadow-fk-hover transition-all duration-200 flex flex-col justify-between p-3 sm:p-4 group relative">
      {/* Top badges: Tag + Wishlist */}
      <div className="flex items-center justify-between mb-2">
        {product.tag ? (
          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800 tracking-wider">
            {product.tag}
          </span>
        ) : (
          <span className="text-[10px] font-bold text-gray-400">{product.brand}</span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`p-1.5 rounded-full transition-colors ${
            isWishlisted
              ? 'text-pink-500 bg-pink-50'
              : 'text-gray-300 hover:text-pink-500 hover:bg-gray-100'
          }`}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Image with link */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded mb-3 bg-gray-50 aspect-square flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-brand-green text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
            {product.discount}% OFF
          </div>
        )}
      </Link>

      {/* Content Details */}
      <div className="flex-1 flex flex-col">
        {/* Brand & Unit */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span className="font-semibold text-gray-600 truncate">{product.brand}</span>
          <span className="bg-gray-100 text-gray-700 font-medium px-1.5 py-0.5 rounded text-[11px]">
            {product.unit}
          </span>
        </div>

        {/* Title */}
        <Link
          to={`/product/${product.id}`}
          className="font-medium text-xs sm:text-sm text-gray-900 group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug mb-2 min-h-[36px]"
          title={product.name}
        >
          {product.name}
        </Link>

        {/* Rating Pill & Assured Badge */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-0.5 bg-brand-green text-white text-[11px] font-bold px-1.5 py-0.5 rounded">
            <span>{product.rating}</span>
            <Star className="w-3 h-3 fill-current" />
          </div>
          <span className="text-[11px] text-gray-400">
            ({product.ratingCount?.toLocaleString() || 240})
          </span>
          {product.isAssured && (
            <span className="text-[10px] font-black italic text-brand-primary flex items-center gap-0.5 ml-auto">
              <Check className="w-3 h-3 text-brand-primary stroke-[3]" />
              Assured
            </span>
          )}
        </div>

        {/* Price Row */}
        <div className="mt-auto pt-2 border-t border-gray-100 flex items-baseline gap-2 mb-3">
          <span className="text-base sm:text-lg font-black text-gray-900">
            ₹{product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
          <span className="text-xs font-bold text-brand-green ml-auto">
            Save ₹{product.originalPrice - product.price}
          </span>
        </div>

        {/* Action Button: Add to Cart OR Quantity Controller */}
        {quantityInCart === 0 ? (
          <button
            onClick={() => addToCart(product, 1)}
            className="w-full bg-white hover:bg-brand-primary text-brand-primary hover:text-white border border-brand-primary font-bold py-2 px-3 rounded text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>ADD TO CART</span>
          </button>
        ) : (
          <div className="flex items-center justify-between bg-brand-primary text-white rounded font-bold text-xs p-1 shadow-sm">
            <button
              onClick={() => updateQuantity(product.id, quantityInCart - 1)}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-blue-800 transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-sm font-black px-2">{quantityInCart} in Cart</span>
            <button
              onClick={() => updateQuantity(product.id, quantityInCart + 1)}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-blue-800 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
