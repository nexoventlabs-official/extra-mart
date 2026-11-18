# Extra Mart (extramart.online) - Supermarket E-Commerce Platform

A feature-rich, high-performance Flipkart-style supermarket e-commerce web application built for **Extra Mart** (`extramart.online`).

## 🛒 Features

- **Flipkart-Style Supermarket UI & Experience**:
  - Classic header with "Explore Plus" supermarket branding, location/PIN code delivery selector modal, instant autocomplete search bar, account dropdown, wishlist & cart badges.
  - Category navigation bar for departments: Fresh Fruits & Vegetables, Dairy, Bread & Eggs, Staples & Grains, Cooking Oils & Masalas, Snacks & Biscuits, Beverages, Cleaning & Household, Personal Care.
  - Multi-slide promotional hero carousel with supermarket deals and bank offers.
  - **Deal of the Day** live countdown timer and product grid.
  - Category showcases and supermarket trust badges.

- **Dynamic Supermarket Catalog & Filters**:
  - Filter by category, price slider, minimum discount (10%+, 20%+, 30%+), customer rating (4★+, 3★+), popular FMCG brands (Amul, Aashirvaad, Tata Sampann, Fortune, Haldiram's, Nestle, etc.), and Extra Mart Assured items.
  - Flipkart-style sorting tabs: Popularity, Price (Low to High), Price (High to Low), Customer Rating, Discount %.

- **Comprehensive Product Details**:
  - Image gallery with thumbnail preview.
  - Flipkart yellow "ADD TO CART" & orange "BUY NOW" action buttons.
  - Available bank offers and promo discounts.
  - PIN code delivery estimator with 2-hour express delivery check.
  - Supermarket specifications table & nutritional information breakdown.
  - Customer review summary with rating breakdown bars and interactive "Write a Review" modal.

- **Interactive Cart & Checkout**:
  - 2-hour express delivery banner & free shipping progress meter (Free shipping on orders above ₹499).
  - Quantity controls, save for later, item removal.
  - Coupon code engine (`EXTRA50`, `FIRSTMART`, `FRESH100`, `SUPERPLUS`).
  - Flipkart 4-step accordion checkout:
    1. Login credentials
    2. Delivery address (Select saved or add new)
    3. Delivery time slot (Express 2-hour, Morning 7-10 AM, Afternoon 1-4 PM, Evening 6-9 PM)
    4. Order summary
    5. Payment options: UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Cash on Delivery with captcha verification.

- **Order Confirmation & Tracking**:
  - Order success screen with unique Order ID (`EM-XXXXXX`) and invoice download/print support.
  - Real-time 4-step delivery tracker: Order Placed → Items Packed → Out for Delivery → Delivered.
  - Cancel order & reorder functionality.

- **Complete Informational & Legal Pages**:
  - About Us
  - Contact Us (`contact@extramart.online`, 1800-202-9832, interactive support ticket form)
  - FAQ
  - Cancellation, Return & Refund Policy (24-hr fresh produce guarantee, 7-day packaged return)
  - Terms of Use & Privacy Policy

- **Production Ready for Vercel**:
  - Includes `vercel.json` rewrites for single-page routing without 404 errors.

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite 5 + Tailwind CSS
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **State Management**: React Context API with persistent `localStorage` for Cart, Wishlist, Saved Addresses, and Orders.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

## 📬 Contact & Support

- **Website**: [extramart.online](https://extramart.online)
- **Email**: [contact@extramart.online](mailto:contact@extramart.online)
- **Toll-Free**: 1800-202-9832
