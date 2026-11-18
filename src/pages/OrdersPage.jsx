import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  Package,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronRight,
  RotateCcw,
  AlertCircle,
  HelpCircle,
  Truck,
  ArrowRight,
  Check
} from 'lucide-react';

const TRACKING_STEPS = [
  { step: 1, label: 'Order Placed', desc: 'Extra Mart system accepted your grocery order' },
  { step: 2, label: 'Items Packed', desc: 'Picked fresh & sanitized at local hub' },
  { step: 3, label: 'Out for Delivery', desc: 'Delivery partner on the way in temperature insulated bag' },
  { step: 4, label: 'Delivered', desc: 'Handed over at your doorstep' }
];

export const OrdersPage = () => {
  const { orders, cancelOrder, addToCart, showToast } = useCart();
  const [activeTrackingOrderId, setActiveTrackingOrderId] = useState(null);

  const handleReorder = (order) => {
    order.items.forEach((item) => {
      addToCart(item, item.quantity);
    });
    showToast(`Items from order ${order.id} re-added to your cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900">My Supermarket Orders</h1>
          <p className="text-xs text-gray-500">Track packages, download tax invoices, and reorder daily groceries</p>
        </div>
        <Link
          to="/products"
          className="bg-brand-primary text-white text-xs font-bold px-4 py-2 rounded hover:bg-blue-700 transition-colors self-start sm:self-auto flex items-center gap-1.5"
        >
          <span>Shop More Groceries</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center max-w-md mx-auto space-y-4">
          <Package className="w-16 h-16 text-gray-300 mx-auto" />
          <h3 className="text-base font-bold text-gray-800">You haven't placed any orders yet</h3>
          <p className="text-xs text-gray-500">
            Stock up on milk, fresh fruits, vegetables, atta, and snacks at Extra Mart.
          </p>
          <Link
            to="/products"
            className="inline-block bg-brand-primary text-white font-bold text-xs px-5 py-2.5 rounded shadow"
          >
            Explore Supermarket
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const isTracking = activeTrackingOrderId === order.id;
            const currentStep = order.trackingStep || 1;
            const isCancelled = order.status === 'Cancelled';

            return (
              <div
                key={order.id}
                className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden"
              >
                {/* Order Top Strip */}
                <div className="bg-gray-50 p-3 sm:p-4 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase font-bold">Order Placed</span>
                      <span className="font-semibold text-gray-800">
                        {new Date(order.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase font-bold">Total Amount</span>
                      <span className="font-bold text-gray-900">₹{order.pricing?.finalTotal}</span>
                    </div>

                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase font-bold">Ship To</span>
                      <span className="font-semibold text-gray-800">
                        {order.deliveryAddress?.fullName} ({order.deliveryAddress?.city})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-gray-500">Order #{order.id}</span>
                    <button
                      onClick={() => setActiveTrackingOrderId(isTracking ? null : order.id)}
                      className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>{isTracking ? 'Hide Tracking' : 'Track Order'}</span>
                    </button>
                  </div>
                </div>

                {/* Tracking Timeline Accordion */}
                {isTracking && (
                  <div className="p-4 sm:p-6 bg-blue-50/40 border-b border-blue-100 animate-fade-in">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-primary" /> Live Delivery Tracker ({order.deliverySlot})
                    </h4>

                    {isCancelled ? (
                      <div className="p-3 bg-red-50 text-red-700 rounded text-xs font-semibold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        <span>This order was cancelled. Any prepaid payments are refunded to original source.</span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
                        {TRACKING_STEPS.map((s, idx) => {
                          const isDone = currentStep >= s.step;
                          const isCurrent = currentStep === s.step;

                          return (
                            <div key={s.step} className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                                  isDone
                                    ? 'bg-brand-green text-white shadow-sm'
                                    : 'bg-gray-200 text-gray-500'
                                }`}
                              >
                                {isDone ? <Check className="w-4 h-4" /> : s.step}
                              </div>
                              <div className="text-left sm:text-center">
                                <div className={`text-xs font-bold ${isCurrent ? 'text-brand-primary' : 'text-gray-900'}`}>
                                  {s.label}
                                </div>
                                <div className="text-[11px] text-gray-500">{s.desc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Items in this Order */}
                <div className="p-4 divide-y divide-gray-100">
                  {order.items?.map((item) => (
                    <div key={item.id} className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-contain rounded border border-gray-100 p-0.5"
                        />
                        <div>
                          <Link
                            to={`/product/${item.id}`}
                            className="text-xs sm:text-sm font-bold text-gray-900 hover:text-brand-primary"
                          >
                            {item.name}
                          </Link>
                          <div className="text-xs text-gray-500">
                            {item.brand} • {item.unit} • Qty: {item.quantity}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <span className="text-sm font-bold text-gray-900">
                          ₹{item.price * item.quantity}
                        </span>
                        <Link
                          to={`/product/${item.id}`}
                          className="text-xs font-bold text-brand-primary hover:underline whitespace-nowrap"
                        >
                          Rate & Review
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Footer Actions */}
                <div className="bg-gray-50 p-3 sm:p-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700">Status:</span>
                    <span
                      className={`font-black uppercase text-[11px] px-2 py-0.5 rounded ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Cancelled'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {order.status}
                    </span>
                    <span className="text-gray-400">({order.paymentMethod})</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
                      <button
                        onClick={() => cancelOrder(order.id)}
                        className="text-red-600 hover:text-red-800 font-bold hover:underline"
                      >
                        Cancel Order
                      </button>
                    )}
                    <button
                      onClick={() => handleReorder(order)}
                      className="bg-brand-primary hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded transition-colors"
                    >
                      Buy Again / Reorder
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
