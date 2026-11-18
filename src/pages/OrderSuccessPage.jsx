import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  CheckCircle2,
  Package,
  MapPin,
  Clock,
  Printer,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Share2
} from 'lucide-react';

export const OrderSuccessPage = () => {
  const { id } = useParams();
  const { orders } = useCart();

  const order = orders.find((o) => o.id === id) || orders[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Top Success Banner */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-brand-green">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-black uppercase tracking-wider text-brand-green bg-green-50 px-3 py-1 rounded-full">
            Order Confirmed
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
            Thank you for shopping at Extra Mart!
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Your supermarket grocery order has been successfully placed.
          </p>
        </div>

        <div className="inline-block bg-blue-50 border border-blue-200 rounded-md px-4 py-2 text-xs">
          Order ID: <strong className="text-brand-primary font-mono text-sm">{order.id}</strong>
        </div>

        <p className="text-xs text-gray-500 max-w-md mx-auto">
          We have sent the invoice and real-time live tracking link to <strong className="text-gray-700">contact@extramart.online</strong> and your mobile.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/orders"
            className="bg-brand-primary text-white font-bold text-xs px-6 py-2.5 rounded shadow hover:bg-blue-700 flex items-center gap-1.5"
          >
            <Package className="w-4 h-4" />
            <span>Track Order Status</span>
          </Link>

          <button
            onClick={handlePrint}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs px-4 py-2.5 rounded flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Invoice</span>
          </button>

          <Link
            to="/products"
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-xs px-5 py-2.5 rounded flex items-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4 text-brand-orange" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>

      {/* Order Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Delivery Slot & Address */}
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm space-y-3">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-primary" /> Delivery Slot & Timeline
          </h3>
          <div className="p-3 bg-blue-50/50 rounded border border-blue-100 text-xs">
            <span className="font-bold text-brand-primary block text-sm mb-1">{order.deliverySlot}</span>
            <span className="text-gray-600">Our delivery partner will arrive in temperature-controlled bags to keep fresh items chilled.</span>
          </div>

          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5 pt-2">
            <MapPin className="w-4 h-4 text-brand-primary" /> Delivery Address
          </h3>
          <div className="text-xs text-gray-700 leading-relaxed">
            <div className="font-bold text-gray-900">{order.deliveryAddress?.fullName}</div>
            <div>{order.deliveryAddress?.house}, {order.deliveryAddress?.locality || order.deliveryAddress?.area}</div>
            <div>{order.deliveryAddress?.city}, {order.deliveryAddress?.state} - <strong>{order.deliveryAddress?.pincode}</strong></div>
            <div className="text-gray-500 mt-1">Phone: {order.deliveryAddress?.phone}</div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm space-y-3">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Payment Breakdown
          </h3>
          <div className="space-y-2 text-xs text-gray-600 border-b pb-3">
            <div className="flex justify-between">
              <span>Payment Mode:</span>
              <strong className="text-gray-900">{order.paymentMethod}</strong>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="font-bold text-brand-green">{order.paymentStatus}</span>
            </div>
            <div className="flex justify-between">
              <span>Items Total (MRP):</span>
              <span>₹{order.pricing?.mrpTotal}</span>
            </div>
            <div className="flex justify-between text-brand-green">
              <span>Supermarket Discount:</span>
              <span>- ₹{order.pricing?.productDiscount}</span>
            </div>
            {order.pricing?.couponDiscount > 0 && (
              <div className="flex justify-between text-brand-green">
                <span>Coupon Applied:</span>
                <span>- ₹{order.pricing?.couponDiscount}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Delivery Fee:</span>
              <span className="text-brand-green font-bold">FREE</span>
            </div>
          </div>

          <div className="flex justify-between text-base font-black text-gray-900 pt-1">
            <span>Amount Paid:</span>
            <span>₹{order.pricing?.finalTotal}</span>
          </div>
        </div>
      </div>

      {/* Ordered Products Items */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm space-y-4">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          Ordered Groceries ({order.items?.length} items)
        </h3>
        <div className="divide-y divide-gray-100">
          {order.items?.map((item) => (
            <div key={item.id} className="py-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-contain rounded border" />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <div className="text-gray-500">{item.brand} • {item.unit} • Qty: {item.quantity}</div>
                </div>
              </div>
              <div className="text-right">
                <span className="font-bold text-gray-900 text-sm">₹{item.price * item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
