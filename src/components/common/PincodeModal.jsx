import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { MapPin, X, Check, Search, Navigation } from 'lucide-react';

const POPULAR_CITIES = [
  { city: 'Bengaluru', pincode: '560034', area: 'Koramangala' },
  { city: 'Mumbai', pincode: '400001', area: 'Fort / South Mumbai' },
  { city: 'Delhi NCR', pincode: '110001', area: 'Connaught Place' },
  { city: 'Hyderabad', pincode: '500081', area: 'Hitech City' },
  { city: 'Chennai', pincode: '600002', area: 'Anna Salai' },
  { city: 'Kolkata', pincode: '700001', area: 'BBD Bagh' },
  { city: 'Pune', pincode: '411001', area: 'Shivajinagar' },
  { city: 'Ahmedabad', pincode: '380001', area: 'Navrangpura' }
];

export const PincodeModal = ({ isOpen, onClose }) => {
  const { deliveryLocation, setDeliveryLocation, showToast } = useCart();
  const [inputPincode, setInputPincode] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleApplyPincode = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(inputPincode)) {
      setError('Please enter a valid 6-digit Indian PIN code');
      return;
    }

    // Determine mock location from pincode
    const matched = POPULAR_CITIES.find(c => c.pincode === inputPincode);
    const newLoc = {
      pincode: inputPincode,
      city: matched ? matched.city : 'Express Zone',
      area: matched ? matched.area : `Sector ${inputPincode.slice(3)}`,
      state: 'India'
    };

    setDeliveryLocation(newLoc);
    showToast(`Delivery location updated to ${newLoc.pincode} (${newLoc.city})`);
    setError('');
    setInputPincode('');
    onClose();
  };

  const handleSelectCity = (c) => {
    setDeliveryLocation({
      pincode: c.pincode,
      city: c.city,
      area: c.area,
      state: 'India'
    });
    showToast(`Delivering to ${c.city} (${c.pincode})`);
    onClose();
  };

  const handleUseCurrentLocation = () => {
    setDeliveryLocation({
      pincode: '560034',
      city: 'Bengaluru',
      area: 'Koramangala 5th Block (Current GPS)',
      state: 'Karnataka'
    });
    showToast('Detected location: Bengaluru - 560034 (2-Hour Delivery Available)');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-brand-primary text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-yellow" />
            <h3 className="font-semibold text-lg">Choose Your Delivery Location</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          <p className="text-xs text-gray-500">
            Select your city or enter PIN code to check grocery delivery speed, available stock, and slots.
          </p>

          {/* Quick GPS detect */}
          <button
            onClick={handleUseCurrentLocation}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md border border-brand-primary text-brand-primary font-medium text-sm hover:bg-blue-50 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Use Current Location (GPS)
          </button>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-3 text-xs uppercase tracking-wider text-gray-400 font-semibold">Or enter PIN code</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* PIN code form */}
          <form onSubmit={handleApplyPincode} className="space-y-2">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN code (e.g. 560034)"
                  value={inputPincode}
                  onChange={(e) => {
                    setInputPincode(e.target.value.replace(/\D/g, ''));
                    if (error) setError('');
                  }}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-orange text-white font-semibold px-5 py-2.5 rounded-md text-sm hover:bg-orange-600 transition-colors shadow-sm"
              >
                Apply
              </button>
            </div>
            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
          </form>

          {/* Popular Cities */}
          <div>
            <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2.5">
              Popular Cities (2-Hour Grocery Delivery)
            </h4>
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
              {POPULAR_CITIES.map((c) => {
                const isSelected = deliveryLocation.pincode === c.pincode;
                return (
                  <button
                    key={c.pincode}
                    onClick={() => handleSelectCity(c)}
                    className={`flex items-center justify-between text-left p-2.5 rounded border text-xs transition-colors ${
                      isSelected
                        ? 'border-brand-primary bg-blue-50/70 text-brand-primary font-semibold'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-gray-900">{c.city}</div>
                      <div className="text-[11px] text-gray-500">{c.pincode}</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-brand-primary" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Current: <strong className="text-gray-800">{deliveryLocation.city} ({deliveryLocation.pincode})</strong></span>
          <span className="text-brand-green font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
            Supermarket Live
          </span>
        </div>
      </div>
    </div>
  );
};
