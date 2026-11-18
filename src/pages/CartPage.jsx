import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { COUPONS } from '../data/coupons';
import {
  ShoppingCart,
  Trash2,
  Bookmark,
  Plus,
  Minus,
  ShieldCheck,
  Tag,
  ArrowRight,
  Truck,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  X
} from 'lucide-react';

export const CartPage = () => {
  const navigate = useNavigate();
  const {
    cart,
    updateQuantity,
    removeFromCart,
    savedForLater,
    saveForLaterItem,
    moveToCartFromSaved,
    removeSavedItem,
    totalItemsCount,
    mrpTotal,
    subtotal,
    productDiscount,
    deliveryFee,
    couponDiscount,
    finalTotal,
    totalSavings,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    deliveryLocation
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [showCouponsModal, setShowCouponsModal] = useState(false);

  const handleApplyCoupon = (code) => {
    applyCoupon(code);
    setCouponInput('');
    setShowCouponsModal(false);
  };

  const freeDeliveryThreshold = 499;
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryPercent = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  if (cart.length === 0 && savedForLater.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-md border border-gray-200 shadow-sm p-12 text-center max-w-lg mx-auto space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-brand-primary">
            <ShoppingCart className="w-12 h-12 text-brand-primary" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Your Supermarket Basket is Empty!</h2>
          <p className="text-xs text-gray-500">
            Explore fresh fruits, vegetables, dairy, atta, snacks and daily essentials at lowest prices.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded shadow-md transition-colors"
          >
            <span>START SHOPPING</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 space-y-4">
      {/* Top Delivery Header Banner */}
      <div className="bg-white rounded-md border border-gray-200 p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
          <div>
            <div className="text-xs text-gray-500 font-medium">Deliver groceries to:</div>
            <div className="text-sm font-bold text-gray-900">
              {deliveryLocation.area}, {deliveryLocation.city} - {deliveryLocation.pincode}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-brand-green font-bold bg-green-50 px-3 py-1.5 rounded border border-green-200">
          <Clock className="w-4 h-4" />
          <span>Express 2-Hour Slot Available for this Address</span>
        </div>
      </div>

      {/* Main 2-Column Cart Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        
        {/* Left Column: Cart Items List + Free Shipping Meter + Saved for Later (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Free Shipping Meter */}
          <div className="bg-white rounded-md border border-gray-200 p-4 shadow-sm">
            {remainingForFreeDelivery > 0 ? (
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-gray-700">
                    Add <strong className="text-brand-orange">₹{remainingForFreeDelivery}</strong> more groceries for <strong>FREE Delivery</strong>
                  </span>
                  <span className="font-bold text-brand-primary">{Math.round(freeDeliveryPercent)}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-primary h-full transition-all duration-300"
                    style={{ width: `${freeDeliveryPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-bold text-brand-green">
                <CheckCircle2 className="w-4 h-4" />
                <span>Congratulations! Your cart has qualified for FREE Supermarket Delivery!</span>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="bg-white rounded-md border border-gray-200 shadow-sm divide-y divide-gray-100">
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">
                Extra Mart Grocery Basket ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})
              </h2>
              <span className="text-xs text-gray-500 font-medium">
                Standard & Fresh Grocery Items
              </span>
            </div>

            {cart.map((item) => {
              const p = item.product;
              return (
                <div key={p.id} className="p-4 flex flex-col sm:flex-row gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded border border-gray-100 p-1 bg-gray-50 shrink-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/product/${p.id}`}
                          className="text-sm font-semibold text-gray-900 hover:text-brand-primary line-clamp-2"
                        >
                          {p.name}
                        </Link>
                        <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
                          Tomorrow
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Brand: <span className="font-medium text-gray-700">{p.brand}</span> • Unit: <span className="font-medium text-gray-700">{p.unit}</span>
                      </div>
                    </div>

                    {/* Price Row */}
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-base font-black text-gray-900">
                        ₹{p.price * item.quantity}
                      </span>
                      {p.originalPrice > p.price && (
                        <>
                          <span className="text-xs text-gray-400 line-through">
                            ₹{p.originalPrice * item.quantity}
                          </span>
                          <span className="text-xs font-bold text-brand-green">
                            Save ₹{(p.originalPrice - p.price) * item.quantity}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Actions: Quantity Modifier + Save for later + Remove */}
                    <div className="flex flex-wrap items-center gap-4 mt-3 pt-2 border-t border-gray-50">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() => updateQuantity(p.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-9 text-center text-xs font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(p.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => saveForLaterItem(p.id)}
                        className="text-xs font-bold text-gray-700 hover:text-brand-primary flex items-center gap-1 transition-colors"
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>Save For Later</span>
                      </button>

                      <button
                        onClick={() => removeFromCart(p.id)}
                        className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Saved For Later Section */}
          {savedForLater.length > 0 && (
            <div className="bg-white rounded-md border border-gray-200 shadow-sm divide-y divide-gray-100">
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900">
                  Saved For Later ({savedForLater.length})
                </h3>
              </div>
              {savedForLater.map((p) => (
                <div key={p.id} className="p-4 flex gap-4 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-14 h-14 object-cover rounded border" />
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 line-clamp-1">{p.name}</h4>
                      <p className="text-xs text-gray-500 font-bold">₹{p.price} <span className="line-through text-gray-400 font-normal">₹{p.originalPrice}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => moveToCartFromSaved(p)}
                      className="bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-blue-700"
                    >
                      Move To Cart
                    </button>
                    <button
                      onClick={() => removeSavedItem(p.id)}
                      className="text-gray-400 hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Secure Shopping Info */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-3.5 flex items-center gap-3 text-xs text-gray-600">
            <ShieldCheck className="w-6 h-6 text-brand-green shrink-0" />
            <div>
              <span className="font-bold text-gray-800">Safe & Secure Extra Mart Guarantee:</span>
              <p className="text-[11px] text-gray-500">
                All farm groceries and packaged staples are packed in sanitized conditions and checked before delivery. Instant refund if not satisfied.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Price Details Summary (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Coupons Card */}
          <div className="bg-white rounded-md border border-gray-200 p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-brand-orange" /> Coupons & Offers
              </h4>
              <button
                onClick={() => setShowCouponsModal(true)}
                className="text-xs font-bold text-brand-primary hover:underline"
              >
                View All
              </button>
            </div>

            {appliedCoupon ? (
              <div className="flex items-center justify-between p-2.5 rounded bg-green-50 border border-green-200 text-xs">
                <div>
                  <div className="font-bold text-brand-green flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>'{appliedCoupon.code}' Applied</span>
                  </div>
                  <div className="text-[11px] text-gray-600">You saved ₹{couponDiscount}</div>
                </div>
                <button
                  onClick={removeCoupon}
                  className="text-red-600 hover:text-red-800 font-bold text-xs"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (couponInput.trim()) applyCoupon(couponInput.trim());
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Enter Coupon (e.g. EXTRA50)"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                  className="w-full text-xs px-3 py-2 border border-gray-300 rounded focus:border-brand-primary uppercase"
                />
                <button
                  type="submit"
                  className="bg-brand-primary text-white font-bold text-xs px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Apply
                </button>
              </form>
            )}
          </div>

          {/* Price Details Card (Flipkart Sticky Style) */}
          <div className="bg-white rounded-md border border-gray-200 shadow-sm divide-y divide-gray-100">
            <div className="p-3.5">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Price Details
              </h3>
            </div>

            <div className="p-4 space-y-3 text-xs text-gray-700">
              <div className="flex justify-between">
                <span>Price ({totalItemsCount} items)</span>
                <span>₹{mrpTotal}</span>
              </div>

              <div className="flex justify-between text-brand-green">
                <span>Discount on MRP</span>
                <span>- ₹{productDiscount}</span>
              </div>

              {appliedCoupon && (
                <div className="flex justify-between text-brand-green">
                  <span>Coupon Discount ({appliedCoupon.code})</span>
                  <span>- ₹{couponDiscount}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span>Delivery Charges</span>
                {deliveryFee === 0 ? (
                  <span className="text-brand-green font-bold">
                    <span className="line-through text-gray-400 mr-1">₹40</span> FREE
                  </span>
                ) : (
                  <span>₹{deliveryFee}</span>
                )}
              </div>

              <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between items-center text-sm font-black text-gray-900">
                <span>Total Amount</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>

            {/* Savings Banner */}
            <div className="p-3.5 bg-green-50 text-brand-green text-xs font-bold text-center">
              You will save ₹{totalSavings} on this order!
            </div>

            {/* Place Order Button */}
            <div className="p-4 bg-gray-50">
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-black py-3.5 px-4 rounded text-sm uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>PLACE ORDER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Safe & Secure Badge */}
          <div className="text-center text-gray-400 text-[11px] space-y-1">
            <p>🛡️ 100% Safe and Secure Payments</p>
            <p>Support: <a href="mailto:contact@extramart.online" className="text-blue-500 underline">contact@extramart.online</a></p>
          </div>

        </div>
      </div>

      {/* Coupons Modal */}
      {showCouponsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-5 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-sm text-gray-900">Available Supermarket Coupons</h3>
              <button onClick={() => setShowCouponsModal(false)} className="p-1 text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {COUPONS.map((c) => (
                <div key={c.code} className="border border-dashed border-brand-primary/40 bg-blue-50/50 p-3 rounded-md flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-brand-primary tracking-wider">{c.code}</div>
                    <div className="text-xs text-gray-700 font-medium">{c.description}</div>
                    <div className="text-[10px] text-gray-500">Min. order: ₹{c.minOrder}</div>
                  </div>
                  <button
                    onClick={() => handleApplyCoupon(c.code)}
                    className="bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-blue-700 shadow-sm"
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
