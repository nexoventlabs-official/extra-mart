import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/product/ProductCard';
import {
  Star,
  Heart,
  ShoppingCart,
  Zap,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Tag,
  ChevronRight,
  MapPin,
  Clock,
  ThumbsUp,
  Share2
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInWishlist, toggleWishlist, deliveryLocation, showToast } = useCart();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(product.image || product.images?.[0]);
  const [pincodeInput, setPincodeInput] = useState(deliveryLocation.pincode);
  const [pincodeChecked, setPincodeChecked] = useState(true);
  const [userReview, setUserReview] = useState({ name: '', comment: '', rating: 5 });
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [localReviews, setLocalReviews] = useState(product.reviews || []);

  const isWishlisted = isInWishlist(product.id);

  // Sync image if product changes
  React.useEffect(() => {
    setSelectedImage(product.image || product.images?.[0]);
    setLocalReviews(product.reviews || []);
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigate('/checkout');
  };

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (/^\d{6}$/.test(pincodeInput)) {
      setPincodeChecked(true);
      showToast(`Delivery available to PIN ${pincodeInput} (Next Slot: Tomorrow 8 AM)`);
    } else {
      showToast('Please enter a valid 6-digit PIN code', 'warning');
    }
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!userReview.name || !userReview.comment) {
      showToast('Please fill all review fields', 'warning');
      return;
    }

    const newRev = {
      name: userReview.name,
      rating: Number(userReview.rating),
      date: 'Just now',
      comment: userReview.comment,
      verified: true
    };

    setLocalReviews([newRev, ...localReviews]);
    setUserReview({ name: '', comment: '', rating: 5 });
    setShowReviewModal(false);
    showToast('Thank you! Your verified review has been published.', 'success');
  };

  const similarProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 space-y-6">
      {/* Breadcrumbs */}
      <div className="text-xs text-gray-500 flex items-center gap-1.5 px-1 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link to="/products" className="hover:text-brand-primary">Grocery</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link to={`/category/${product.category}`} className="hover:text-brand-primary">
          {CATEGORIES.find((c) => c.id === product.category)?.name || product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="font-semibold text-gray-800 truncate max-w-xs">{product.name}</span>
      </div>

      {/* Main Flipkart Product Card (Split View) */}
      <div className="bg-white rounded-md border border-gray-200 shadow-sm p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Image Gallery + Big Action Buttons (5 Cols) */}
        <div className="md:col-span-5 flex flex-col space-y-4">
          
          <div className="relative border border-gray-100 rounded-lg p-2 bg-gray-50 aspect-square flex items-center justify-center overflow-hidden">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-contain max-h-[360px] hover:scale-110 transition-transform duration-300"
            />

            {/* Wishlist button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-3 right-3 p-2 rounded-full shadow-md bg-white transition-colors ${
                isWishlisted ? 'text-pink-500' : 'text-gray-400 hover:text-pink-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            {/* Discount Badge */}
            {product.discount > 0 && (
              <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-black px-2 py-1 rounded shadow-sm">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Image Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-2 justify-center">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-14 h-14 rounded border-2 overflow-hidden bg-white p-0.5 transition-all ${
                    selectedImage === img ? 'border-brand-primary ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover rounded" />
                </button>
              ))}
            </div>
          )}

          {/* Flipkart Iconic Yellow & Orange Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-3">
            <button
              onClick={handleAddToCart}
              className="bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-black py-3.5 px-4 rounded shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-95 text-xs sm:text-sm uppercase tracking-wider"
            >
              <ShoppingCart className="w-4 h-4 fill-current" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-brand-orange hover:bg-orange-600 text-white font-black py-3.5 px-4 rounded shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-95 text-xs sm:text-sm uppercase tracking-wider"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Buy Now</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-2">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> 100% Authentic
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <RotateCcw className="w-4 h-4 text-blue-600" /> Easy 24-hr Return
            </span>
          </div>
        </div>

        {/* Right Column: Title, Prices, Offers, Specs (7 Cols) */}
        <div className="md:col-span-7 space-y-4">
          
          {/* Brand & Title */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                {product.brand}
              </span>
              <span className="text-xs text-gray-500">• {product.subcategory}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              {product.name} ({product.unit})
            </h1>
          </div>

          {/* Rating & Assured Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-brand-green text-white text-xs font-bold px-2 py-0.5 rounded">
              <span>{product.rating}</span>
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-semibold text-gray-500">
              {product.ratingCount?.toLocaleString() || 3420} Ratings & {product.reviewCount || 420} Reviews
            </span>
            {product.isAssured && (
              <span className="flex items-center gap-1 text-xs font-black italic text-brand-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                <Check className="w-3.5 h-3.5 text-brand-primary stroke-[3]" /> Extra Mart Assured
              </span>
            )}
          </div>

          {/* Special Price Tag & Price Row */}
          <div className="bg-green-50/60 p-3 rounded-md border border-green-200/60">
            <div className="text-[11px] font-bold text-green-700 uppercase tracking-wider mb-0.5">
              Special Supermarket Price
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-black text-gray-900">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-sm font-bold text-brand-green">
                    {product.discount}% off
                  </span>
                </>
              )}
            </div>
            <p className="text-xs text-green-800 font-medium mt-1">
              You save ₹{product.originalPrice - product.price} on this item! (Inclusive of all taxes)
            </p>
          </div>

          {/* Available Offers Box (Flipkart Style) */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Available Offers
            </h4>
            <div className="space-y-1.5 text-xs text-gray-700">
              <div className="flex items-start gap-2">
                <Tag className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>
                  <strong>Bank Offer:</strong> 10% Instant Discount on HDFC Bank Credit & Debit cards on orders above ₹1,500.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Tag className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>
                  <strong>Special Price:</strong> Flat ₹50 OFF on orders above ₹499. Use coupon <strong>EXTRA50</strong> at checkout.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Tag className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>
                  <strong>Supermarket Perks:</strong> Free delivery on all grocery orders above ₹499.
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Pincode Checker */}
          <div className="border-t border-b border-gray-100 py-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-primary" /> Delivery & Services
              </span>
            </div>

            <form onSubmit={handleCheckPincode} className="flex gap-2 max-w-sm">
              <input
                type="text"
                maxLength={6}
                value={pincodeInput}
                onChange={(e) => setPincodeInput(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6 digit PIN code"
                className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-brand-primary"
              />
              <button
                type="submit"
                className="bg-brand-primary text-white font-bold text-xs px-4 py-1.5 rounded hover:bg-blue-700 transition-colors"
              >
                Check
              </button>
            </form>

            {pincodeChecked && (
              <div className="text-xs space-y-1 pt-1 text-gray-600">
                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <Clock className="w-3.5 h-3.5 text-brand-green" />
                  <span>Delivery by Tomorrow 8:00 AM - 11:00 AM</span>
                </div>
                <p className="text-gray-500 pl-5">
                  Shipping Fee: <strong className="text-brand-green">FREE</strong> on orders above ₹499 (Standard ₹40)
                </p>
                <p className="text-gray-500 pl-5">
                  Cash on Delivery & UPI at doorstep available.
                </p>
              </div>
            )}
          </div>

          {/* Highlights */}
          {product.highlights && (
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-700">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
              Description
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Supermarket Specifications Table */}
          {product.specifications && (
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                Specifications
              </h4>
              <div className="border border-gray-200 rounded overflow-hidden text-xs">
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <div
                    key={key}
                    className={`grid grid-cols-3 p-2.5 ${
                      idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <span className="text-gray-500 font-medium">{key}</span>
                    <span className="col-span-2 text-gray-900 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nutritional Info Table */}
          {product.nutrition && Object.keys(product.nutrition).length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                Nutritional Values (Approx. per 100g)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {Object.entries(product.nutrition).map(([key, val]) => (
                  <div key={key} className="bg-blue-50/50 border border-blue-100 p-2 rounded">
                    <span className="text-gray-500 block text-[11px]">{key}</span>
                    <span className="text-brand-primary font-bold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Customer Ratings & Reviews Section */}
      <section className="bg-white rounded-md border border-gray-200 shadow-sm p-4 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Ratings & Reviews</h3>
            <p className="text-xs text-gray-500">Verified Extra Mart customer purchases</p>
          </div>
          <button
            onClick={() => setShowReviewModal(true)}
            className="bg-brand-primary text-white font-bold text-xs px-4 py-2 rounded hover:bg-blue-700 transition-colors shadow-sm self-start sm:self-auto"
          >
            Rate Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Big Score Card */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg text-center">
            <div className="text-4xl font-black text-gray-900 flex items-center gap-1">
              <span>{product.rating}</span>
              <Star className="w-7 h-7 text-brand-green fill-current" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {product.ratingCount?.toLocaleString() || 3420} Ratings & {product.reviewCount || 420} Reviews
            </p>
            <span className="mt-3 text-[11px] font-bold text-brand-green bg-green-100 px-2.5 py-1 rounded-full">
              ★ 94% Recommended by shoppers
            </span>
          </div>

          {/* Reviews List */}
          <div className="md:col-span-2 space-y-4">
            {localReviews.map((rev, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-3 last:border-0 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 bg-brand-green text-white text-[11px] font-bold px-1.5 py-0.5 rounded">
                    <span>{rev.rating}</span>
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <span className="text-xs font-bold text-gray-900">{rev.comment}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <span className="font-semibold text-gray-700">{rev.name}</span>
                  {rev.verified && (
                    <span className="flex items-center gap-0.5 text-brand-green font-semibold">
                      <Check className="w-3 h-3 stroke-[3]" /> Certified Buyer
                    </span>
                  )}
                  <span>•</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-5 space-y-4">
            <h3 className="font-bold text-base text-gray-900">Write a Customer Review</h3>
            <form onSubmit={handleAddReview} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh K."
                  value={userReview.name}
                  onChange={(e) => setUserReview({ ...userReview, name: e.target.value })}
                  className="w-full text-xs p-2 border border-gray-300 rounded focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Rating</label>
                <select
                  value={userReview.rating}
                  onChange={(e) => setUserReview({ ...userReview, rating: e.target.value })}
                  className="w-full text-xs p-2 border border-gray-300 rounded"
                >
                  <option value={5}>5 Stars - Excellent Quality & Fresh</option>
                  <option value={4}>4 Stars - Very Good</option>
                  <option value={3}>3 Stars - Average</option>
                  <option value={2}>2 Stars - Below Expectation</option>
                  <option value={1}>1 Star - Poor</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Review Comments</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share details about the packaging, freshness, taste..."
                  value={userReview.comment}
                  onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })}
                  className="w-full text-xs p-2 border border-gray-300 rounded focus:border-brand-primary"
                />
              </div>

              <div className="flex gap-2 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-brand-primary hover:bg-blue-700 rounded shadow"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Similar Supermarket Products */}
      {similarProducts.length > 0 && (
        <section className="bg-white rounded-md border border-gray-200 shadow-sm p-4 sm:p-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Similar Supermarket Items</h3>
              <p className="text-xs text-gray-500">Customers who bought this item also purchased</p>
            </div>
            <Link
              to={`/category/${product.category}`}
              className="text-brand-primary text-xs font-bold hover:underline"
            >
              View More
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {similarProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
