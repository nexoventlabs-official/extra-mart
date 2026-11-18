import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { COUPONS } from '../data/coupons';

const CartContext = createContext();

const INITIAL_PINCODE = {
  pincode: '560034',
  city: 'Bengaluru',
  area: 'Koramangala 5th Block',
  state: 'Karnataka'
};

const INITIAL_ORDERS = [
  {
    id: 'EM-892415',
    date: '2026-11-16T10:30:00.000Z',
    status: 'Delivered',
    trackingStep: 4, // 1: Placed, 2: Packed, 3: Out for Delivery, 4: Delivered
    deliverySlot: 'Delivered on Nov 16, 2:30 PM',
    deliveryAddress: {
      fullName: 'Rahul Sharma',
      phone: '9876543210',
      pincode: '560034',
      house: 'Flat 402, Green Glen Layout',
      area: 'Koramangala 5th Block',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Home'
    },
    items: [
      {
        id: 'st-01',
        name: 'Aashirvaad Shudh Chakki Whole Wheat Atta',
        brand: 'Aashirvaad',
        unit: '5 kg',
        price: 248,
        originalPrice: 310,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80'
      },
      {
        id: 'db-02',
        name: 'Amul Pasteurised Salted Butter',
        brand: 'Amul',
        unit: '500 g',
        price: 275,
        originalPrice: 285,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=700&q=80'
      },
      {
        id: 'fv-01',
        name: 'Fresh Farm Red Tomatoes (Hybrid)',
        brand: 'Farm Fresh',
        unit: '1 kg',
        price: 32,
        originalPrice: 50,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80'
      }
    ],
    pricing: {
      mrpTotal: 695,
      subtotal: 587,
      productDiscount: 108,
      deliveryFee: 0,
      couponDiscount: 50,
      finalTotal: 537
    },
    paymentMethod: 'UPI (Google Pay)',
    paymentStatus: 'Paid'
  }
];

export const CartProvider = ({ children }) => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('extramart_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS.find(p => p.id === 'fv-01') || PRODUCTS[0], quantity: 2 },
        { product: PRODUCTS.find(p => p.id === 'db-01') || PRODUCTS[4], quantity: 1 },
        { product: PRODUCTS.find(p => p.id === 'st-01') || PRODUCTS[7], quantity: 1 }
      ];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('extramart_wishlist');
      return saved ? JSON.parse(saved) : ['fv-03', 'mo-02', 'sb-01'];
    } catch {
      return [];
    }
  });

  // Saved for later
  const [savedForLater, setSavedForLater] = useState(() => {
    try {
      const saved = localStorage.getItem('extramart_saved_later');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Pincode / Delivery location
  const [deliveryLocation, setDeliveryLocation] = useState(() => {
    try {
      const saved = localStorage.getItem('extramart_location');
      return saved ? JSON.parse(saved) : INITIAL_PINCODE;
    } catch {
      return INITIAL_PINCODE;
    }
  });

  // Orders
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('extramart_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  // Coupon
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Toasts
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem('extramart_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('extramart_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('extramart_saved_later', JSON.stringify(savedForLater));
    } catch (e) {
      console.error(e);
    }
  }, [savedForLater]);

  useEffect(() => {
    try {
      localStorage.setItem('extramart_location', JSON.stringify(deliveryLocation));
    } catch (e) {
      console.error(e);
    }
  }, [deliveryLocation]);

  useEffect(() => {
    try {
      localStorage.setItem('extramart_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name.slice(0, 24)}..." to cart!`);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    const item = cart.find((i) => i.product.id === productId);
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    if (item) {
      showToast(`Removed "${item.product.name.slice(0, 20)}..." from cart`, 'info');
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const saveForLaterItem = (productId) => {
    const item = cart.find((i) => i.product.id === productId);
    if (!item) return;
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
    setSavedForLater((prev) => {
      if (prev.find((i) => i.id === productId)) return prev;
      return [...prev, item.product];
    });
    showToast('Item moved to Save for Later', 'info');
  };

  const moveToCartFromSaved = (product) => {
    setSavedForLater((prev) => prev.filter((i) => i.id !== product.id));
    addToCart(product, 1);
  };

  const removeSavedItem = (productId) => {
    setSavedForLater((prev) => prev.filter((i) => i.id !== productId));
  };

  // Wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Item removed from Wishlist', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Item added to your Wishlist!', 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Coupon handling
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    const found = COUPONS.find((c) => c.code === cleanCode);

    if (!found) {
      showToast('Invalid Coupon Code. Try EXTRA50 or FIRSTMART', 'warning');
      return { success: false, message: 'Invalid coupon code' };
    }

    if (subtotal < found.minOrder) {
      const msg = `Minimum cart value of ₹${found.minOrder} required for ${found.code}`;
      showToast(msg, 'warning');
      return { success: false, message: msg };
    }

    setAppliedCoupon(found);
    showToast(`Coupon "${found.code}" applied successfully!`, 'success');
    return { success: true };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  // Calculations
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const mrpTotal = cart.reduce((acc, item) => acc + item.product.originalPrice * item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const productDiscount = mrpTotal - subtotal;
  const deliveryFee = subtotal >= 499 || subtotal === 0 ? 0 : 40;

  let couponDiscount = 0;
  if (appliedCoupon && subtotal >= appliedCoupon.minOrder) {
    if (appliedCoupon.discountType === 'flat') {
      couponDiscount = appliedCoupon.discountValue;
    } else if (appliedCoupon.discountType === 'percentage') {
      const calculated = (subtotal * appliedCoupon.discountValue) / 100;
      couponDiscount = Math.min(calculated, appliedCoupon.maxDiscount);
    }
  }

  const finalTotal = Math.max(0, subtotal + deliveryFee - couponDiscount);
  const totalSavings = productDiscount + couponDiscount + (subtotal >= 499 ? 40 : 0);

  // Place Order
  const placeOrder = (orderData) => {
    const orderId = 'EM-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      id: orderId,
      date: new Date().toISOString(),
      status: 'Placed',
      trackingStep: 1, // 1: Placed, 2: Packed, 3: Out for Delivery, 4: Delivered
      deliverySlot: orderData.deliverySlot || 'Today Express (Within 2 Hours)',
      deliveryAddress: orderData.deliveryAddress,
      items: cart.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        brand: item.product.brand,
        unit: item.product.unit,
        price: item.product.price,
        originalPrice: item.product.originalPrice,
        quantity: item.quantity,
        image: item.product.image
      })),
      pricing: {
        mrpTotal,
        subtotal,
        productDiscount,
        deliveryFee,
        couponDiscount,
        finalTotal
      },
      paymentMethod: orderData.paymentMethod || 'Cash on Delivery',
      paymentStatus: orderData.paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Paid',
      estimatedDelivery: orderData.estimatedDelivery || 'Today by 6:00 PM'
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setAppliedCoupon(null);
    showToast(`Order ${orderId} placed successfully!`, 'success');
    return newOrder;
  };

  const cancelOrder = (orderId) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: 'Cancelled', trackingStep: 0 } : o
      )
    );
    showToast(`Order ${orderId} has been cancelled`, 'info');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        savedForLater,
        saveForLaterItem,
        moveToCartFromSaved,
        removeSavedItem,
        wishlist,
        toggleWishlist,
        isInWishlist,
        deliveryLocation,
        setDeliveryLocation,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        orders,
        placeOrder,
        cancelOrder,
        toasts,
        showToast,
        removeToast,
        totalItemsCount,
        mrpTotal,
        subtotal,
        productDiscount,
        deliveryFee,
        couponDiscount,
        finalTotal,
        totalSavings
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
