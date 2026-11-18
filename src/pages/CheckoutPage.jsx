import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  CheckCircle2,
  MapPin,
  Clock,
  CreditCard,
  ShieldCheck,
  Check,
  Plus,
  ArrowRight,
  Sparkles,
  Smartphone,
  Banknote,
  Building,
  Lock
} from 'lucide-react';

const SAVED_ADDRESSES = [
  {
    id: 'addr-1',
    fullName: 'Rahul Sharma',
    phone: '9876543210',
    pincode: '560034',
    locality: 'Koramangala 5th Block',
    house: 'Flat 402, Green Glen Layout, 14th Main',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Home'
  },
  {
    id: 'addr-2',
    fullName: 'Rahul Sharma (Office)',
    phone: '9876543210',
    pincode: '560103',
    locality: 'Bellandur',
    house: 'Tower 3, Embassy Tech Village, Outer Ring Road',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Work'
  }
];

const DELIVERY_SLOTS = [
  { id: 'express', label: '⚡ Express 2-Hour Delivery', sub: 'Guaranteed delivery within 120 minutes', fee: 'FREE' },
  { id: 'morning', label: 'Tomorrow Morning (7:00 AM – 10:00 AM)', sub: 'Ideal for breakfast milk, fruits & fresh bread', fee: 'FREE' },
  { id: 'afternoon', label: 'Tomorrow Afternoon (1:00 PM – 4:00 PM)', sub: 'Standard afternoon supermarket slot', fee: 'FREE' },
  { id: 'evening', label: 'Tomorrow Evening (6:00 PM – 9:00 PM)', sub: 'Evening dinner prep groceries & staples', fee: 'FREE' }
];

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const {
    cart,
    totalItemsCount,
    mrpTotal,
    subtotal,
    productDiscount,
    deliveryFee,
    couponDiscount,
    finalTotal,
    totalSavings,
    appliedCoupon,
    placeOrder,
    showToast
  } = useCart();

  // Multi-step accordion: 1 = Address, 2 = Slot, 3 = Summary, 4 = Payment
  const [currentStep, setCurrentStep] = useState(1);

  // Address state
  const [selectedAddressId, setSelectedAddressId] = useState(SAVED_ADDRESSES[0].id);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    fullName: '',
    phone: '',
    pincode: '',
    locality: '',
    house: '',
    city: '',
    state: 'Karnataka',
    type: 'Home'
  });

  // Slot state
  const [selectedSlot, setSelectedSlot] = useState(DELIVERY_SLOTS[0]);

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState('upi'); // upi, card, netbanking, cod, wallet
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [captchaInput, setCaptchaInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedAddress = SAVED_ADDRESSES.find((a) => a.id === selectedAddressId) || SAVED_ADDRESSES[0];

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleAddNewAddressSubmit = (e) => {
    e.preventDefault();
    if (!newAddress.fullName || !newAddress.phone || !newAddress.pincode || !newAddress.house) {
      showToast('Please fill all mandatory address fields', 'warning');
      return;
    }
    SAVED_ADDRESSES.push({
      ...newAddress,
      id: `addr-${Date.now()}`
    });
    setSelectedAddressId(SAVED_ADDRESSES[SAVED_ADDRESSES.length - 1].id);
    setIsAddingNewAddress(false);
    showToast('Delivery address saved successfully!');
  };

  const handleConfirmOrder = () => {
    if (paymentMethod === 'cod') {
      if (captchaInput !== '4829') {
        showToast('Please enter the correct 4-digit verification code (4829)', 'warning');
        return;
      }
    }

    if (paymentMethod === 'upi' && !upiId.includes('@')) {
      showToast('Please enter a valid UPI ID (e.g. mobile@upi or name@okaxis)', 'warning');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const order = placeOrder({
        deliveryAddress: selectedAddress,
        deliverySlot: selectedSlot.label,
        paymentMethod:
          paymentMethod === 'upi'
            ? `UPI (${upiId || 'PhonePe / GPay'})`
            : paymentMethod === 'card'
            ? 'Credit / Debit Card'
            : paymentMethod === 'netbanking'
            ? 'Net Banking'
            : paymentMethod === 'wallet'
            ? 'Extra Mart Wallet'
            : 'Cash on Delivery (COD)',
        estimatedDelivery: selectedSlot.label
      });
      setIsSubmitting(false);
      navigate(`/order-success/${order.id}`);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 space-y-4">
      {/* Flipkart-Style Stepper Header */}
      <div className="bg-white rounded-md border border-gray-200 p-3 sm:p-4 shadow-sm flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-green" />
          <span className="font-bold text-gray-900">Extra Mart 256-bit Secure Checkout</span>
        </div>
        <div className="text-gray-500 font-medium hidden sm:block">
          Support: <a href="mailto:contact@extramart.online" className="text-brand-primary underline">contact@extramart.online</a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Left Column: 4-Step Accordion Flow (8 Cols) */}
        <div className="lg:col-span-8 space-y-3">
          
          {/* STEP 1: LOGIN (Completed) */}
          <div className="bg-white rounded-md border border-gray-200 shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center">
                1
              </span>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">LOGIN</span>
                <span className="text-sm font-bold text-gray-900">Rahul Sharma (+91 98765 43210)</span>
              </div>
            </div>
            <Check className="w-5 h-5 text-brand-green" />
          </div>

          {/* STEP 2: DELIVERY ADDRESS */}
          <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
            <div
              onClick={() => setCurrentStep(1)}
              className="p-4 bg-brand-primary text-white flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-white text-brand-primary font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h3 className="text-sm font-bold tracking-wider uppercase">DELIVERY ADDRESS</h3>
              </div>
              {currentStep > 1 && (
                <button className="text-xs bg-white text-brand-primary font-bold px-3 py-1 rounded">
                  CHANGE
                </button>
              )}
            </div>

            {currentStep === 1 ? (
              <div className="p-4 space-y-4">
                <div className="space-y-3">
                  {SAVED_ADDRESSES.map((addr) => (
                    <label
                      key={addr.id}
                      className={`block p-3.5 rounded border transition-all cursor-pointer ${
                        selectedAddressId === addr.id
                          ? 'border-brand-primary bg-blue-50/50 ring-1 ring-brand-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddressId === addr.id}
                          onChange={() => setSelectedAddressId(addr.id)}
                          className="mt-1 text-brand-primary focus:ring-brand-primary"
                        />
                        <div className="flex-1 text-xs space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 text-sm">{addr.fullName}</span>
                            <span className="bg-gray-100 text-gray-600 font-bold px-1.5 py-0.5 rounded text-[10px] uppercase">
                              {addr.type}
                            </span>
                            <span className="font-semibold text-gray-700">{addr.phone}</span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {addr.house}, {addr.locality}, {addr.city}, {addr.state} - <strong className="text-gray-900">{addr.pincode}</strong>
                          </p>
                          {selectedAddressId === addr.id && (
                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={() => setCurrentStep(2)}
                                className="bg-brand-orange text-white font-bold text-xs px-6 py-2.5 rounded shadow-sm hover:bg-orange-600 uppercase tracking-wider"
                              >
                                Deliver Here
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Add new address toggle */}
                {!isAddingNewAddress ? (
                  <button
                    onClick={() => setIsAddingNewAddress(true)}
                    className="flex items-center gap-2 text-brand-primary font-bold text-xs hover:underline pt-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add a new delivery address</span>
                  </button>
                ) : (
                  <form onSubmit={handleAddNewAddressSubmit} className="border border-blue-200 rounded p-4 bg-blue-50/30 space-y-3">
                    <h4 className="text-xs font-bold text-gray-800 uppercase">New Address Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={newAddress.fullName}
                        onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })}
                        className="p-2 border rounded bg-white"
                      />
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit Mobile Number *"
                        value={newAddress.phone}
                        onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                        className="p-2 border rounded bg-white"
                      />
                      <input
                        type="text"
                        required
                        maxLength={6}
                        placeholder="Pincode *"
                        value={newAddress.pincode}
                        onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                        className="p-2 border rounded bg-white"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Locality / Area *"
                        value={newAddress.locality}
                        onChange={(e) => setNewAddress({ ...newAddress, locality: e.target.value })}
                        className="p-2 border rounded bg-white"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Flat / House No. / Building *"
                        value={newAddress.house}
                        onChange={(e) => setNewAddress({ ...newAddress, house: e.target.value })}
                        className="sm:col-span-2 p-2 border rounded bg-white"
                      />
                      <input
                        type="text"
                        required
                        placeholder="City / District *"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                        className="p-2 border rounded bg-white"
                      />
                      <select
                        value={newAddress.type}
                        onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                        className="p-2 border rounded bg-white"
                      >
                        <option value="Home">Home (All Day Delivery)</option>
                        <option value="Work">Work (10 AM - 6 PM)</option>
                      </select>
                    </div>
                    <div className="flex gap-2 justify-end pt-2">
                      <button
                        type="button"
                        onClick={() => setIsAddingNewAddress(false)}
                        className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 text-xs font-bold bg-brand-primary text-white rounded hover:bg-blue-700 shadow"
                      >
                        Save and Deliver Here
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="p-3 text-xs text-gray-700 bg-gray-50 flex items-center justify-between">
                <span>{selectedAddress.fullName} - {selectedAddress.house}, {selectedAddress.locality}, {selectedAddress.city} ({selectedAddress.pincode})</span>
              </div>
            )}
          </div>

          {/* STEP 3: DELIVERY TIME SLOT (Supermarket Essential) */}
          <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
            <div
              onClick={() => currentStep > 2 && setCurrentStep(2)}
              className={`p-4 flex items-center justify-between ${
                currentStep === 2 ? 'bg-brand-primary text-white' : 'bg-white text-gray-700 border-b'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded font-bold text-xs flex items-center justify-center ${
                  currentStep === 2 ? 'bg-white text-brand-primary' : 'bg-gray-100 text-gray-700'
                }`}>
                  3
                </span>
                <h3 className="text-sm font-bold tracking-wider uppercase">DELIVERY TIME SLOT</h3>
              </div>
              {currentStep > 2 && (
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-xs text-brand-primary font-bold hover:underline"
                >
                  CHANGE
                </button>
              )}
            </div>

            {currentStep === 2 && (
              <div className="p-4 space-y-4">
                <p className="text-xs text-gray-500">
                  Select your preferred grocery delivery slot for optimum freshness:
                </p>

                <div className="space-y-2.5">
                  {DELIVERY_SLOTS.map((slot) => (
                    <label
                      key={slot.id}
                      className={`flex items-center justify-between p-3.5 rounded border cursor-pointer transition-all ${
                        selectedSlot.id === slot.id
                          ? 'border-brand-primary bg-blue-50/60 ring-1 ring-brand-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="delivery_slot"
                          checked={selectedSlot.id === slot.id}
                          onChange={() => setSelectedSlot(slot)}
                          className="text-brand-primary focus:ring-brand-primary"
                        />
                        <div>
                          <div className="text-xs font-bold text-gray-900">{slot.label}</div>
                          <div className="text-[11px] text-gray-500">{slot.sub}</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-brand-green">{slot.fee}</span>
                    </label>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="bg-brand-orange text-white font-bold text-xs px-6 py-2.5 rounded shadow-sm hover:bg-orange-600 uppercase tracking-wider"
                  >
                    Continue to Order Summary
                  </button>
                </div>
              </div>
            )}

            {currentStep > 2 && (
              <div className="p-3 text-xs text-gray-700 bg-gray-50">
                <span className="font-bold text-gray-900">{selectedSlot.label}</span>
              </div>
            )}
          </div>

          {/* STEP 4: ORDER SUMMARY REVIEW */}
          <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
            <div
              className={`p-4 flex items-center justify-between ${
                currentStep === 3 ? 'bg-brand-primary text-white' : 'bg-white text-gray-700 border-b'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded font-bold text-xs flex items-center justify-center ${
                  currentStep === 3 ? 'bg-white text-brand-primary' : 'bg-gray-100 text-gray-700'
                }`}>
                  4
                </span>
                <h3 className="text-sm font-bold tracking-wider uppercase">ORDER SUMMARY ({totalItemsCount} ITEMS)</h3>
              </div>
            </div>

            {currentStep === 3 && (
              <div className="p-4 space-y-4">
                <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.product.id} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <img src={item.product.image} alt={item.product.name} className="w-10 h-10 object-contain rounded border" />
                        <div>
                          <div className="font-semibold text-gray-900 line-clamp-1">{item.product.name}</div>
                          <div className="text-gray-500">{item.product.unit} × {item.quantity}</div>
                        </div>
                      </div>
                      <div className="text-right font-bold text-gray-900">
                        ₹{item.product.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-between items-center border-t">
                  <div className="text-xs text-gray-500">
                    Confirmation email will be sent to <strong>contact@extramart.online</strong>
                  </div>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="bg-brand-orange text-white font-bold text-xs px-6 py-2.5 rounded shadow-sm hover:bg-orange-600 uppercase tracking-wider"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* STEP 5: PAYMENT OPTIONS */}
          <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
            <div
              className={`p-4 flex items-center justify-between ${
                currentStep === 4 ? 'bg-brand-primary text-white' : 'bg-white text-gray-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded font-bold text-xs flex items-center justify-center ${
                  currentStep === 4 ? 'bg-white text-brand-primary' : 'bg-gray-100 text-gray-700'
                }`}>
                  5
                </span>
                <h3 className="text-sm font-bold tracking-wider uppercase">PAYMENT OPTIONS</h3>
              </div>
            </div>

            {currentStep === 4 && (
              <div className="p-4 space-y-4">
                
                {/* Payment Methods */}
                <div className="space-y-3">
                  
                  {/* 1. UPI */}
                  <label className={`block p-3.5 rounded border cursor-pointer ${paymentMethod === 'upi' ? 'border-brand-primary bg-blue-50/50' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="text-brand-primary"
                      />
                      <Smartphone className="w-5 h-5 text-brand-primary" />
                      <div className="flex-1">
                        <span className="text-xs font-bold text-gray-900 block">UPI (Google Pay, PhonePe, Paytm, QR)</span>
                        <span className="text-[11px] text-gray-500">Pay directly from your bank account instantly</span>
                      </div>
                    </div>
                    {paymentMethod === 'upi' && (
                      <div className="mt-3 pl-8 flex gap-2">
                        <input
                          type="text"
                          placeholder="Enter your UPI ID (e.g. mobile@upi)"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="text-xs p-2 border border-gray-300 rounded w-full max-w-xs focus:border-brand-primary"
                        />
                        <button
                          type="button"
                          className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded"
                        >
                          Verify
                        </button>
                      </div>
                    )}
                  </label>

                  {/* 2. Credit / Debit Card */}
                  <label className={`block p-3.5 rounded border cursor-pointer ${paymentMethod === 'card' ? 'border-brand-primary bg-blue-50/50' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="text-brand-primary"
                      />
                      <CreditCard className="w-5 h-5 text-brand-primary" />
                      <div className="flex-1">
                        <span className="text-xs font-bold text-gray-900 block">Credit / Debit Card</span>
                        <span className="text-[11px] text-gray-500">Visa, MasterCard, RuPay, Maestro</span>
                      </div>
                    </div>
                    {paymentMethod === 'card' && (
                      <div className="mt-3 pl-8 grid grid-cols-2 gap-2 max-w-sm">
                        <input
                          type="text"
                          placeholder="Card Number"
                          maxLength={19}
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                          className="col-span-2 text-xs p-2 border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength={5}
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          className="text-xs p-2 border border-gray-300 rounded"
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          maxLength={3}
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          className="text-xs p-2 border border-gray-300 rounded"
                        />
                      </div>
                    )}
                  </label>

                  {/* 3. Cash on Delivery (COD) */}
                  <label className={`block p-3.5 rounded border cursor-pointer ${paymentMethod === 'cod' ? 'border-brand-primary bg-blue-50/50' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="text-brand-primary"
                      />
                      <Banknote className="w-5 h-5 text-brand-green" />
                      <div className="flex-1">
                        <span className="text-xs font-bold text-gray-900 block">Cash / UPI on Delivery</span>
                        <span className="text-[11px] text-gray-500">Pay via cash or UPI to delivery executive at your doorstep</span>
                      </div>
                    </div>
                    {paymentMethod === 'cod' && (
                      <div className="mt-3 pl-8 flex items-center gap-3">
                        <div className="bg-gray-200 text-gray-800 font-mono font-bold tracking-widest px-3 py-1.5 rounded text-sm select-none line-through">
                          4829
                        </div>
                        <input
                          type="text"
                          maxLength={4}
                          placeholder="Enter 4829"
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          className="text-xs p-2 border border-gray-300 rounded w-28 text-center font-mono font-bold focus:border-brand-primary"
                        />
                      </div>
                    )}
                  </label>

                </div>

                {/* Final Confirm Order Action */}
                <div className="pt-4 border-t flex items-center justify-between">
                  <div className="text-xs text-gray-600">
                    Payable: <strong className="text-base text-gray-900">₹{finalTotal}</strong>
                  </div>
                  <button
                    onClick={handleConfirmOrder}
                    disabled={isSubmitting}
                    className="bg-brand-orange hover:bg-orange-600 disabled:bg-gray-400 text-white font-black py-3 px-8 rounded shadow-md text-xs uppercase tracking-wider flex items-center gap-2 transition-transform active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Placing Order...</span>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>CONFIRM ORDER</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

        {/* Right Column: Price Details Sidebar (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-md border border-gray-200 shadow-sm divide-y divide-gray-100">
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
              <span>Total Payable</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>

          <div className="p-3.5 bg-green-50 text-brand-green text-xs font-bold text-center">
            Your Total Savings: ₹{totalSavings}
          </div>

          <div className="p-4 bg-gray-50 text-[11px] text-gray-500 space-y-1">
            <p className="flex items-center gap-1 font-semibold text-gray-700">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> 100% Genuine Supermarket Guarantee
            </p>
            <p>Support: contact@extramart.online | extramart.online</p>
          </div>
        </div>
      </div>
    </div>
  );
};
