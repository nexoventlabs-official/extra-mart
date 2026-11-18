export const COUPONS = [
  {
    code: 'FIRSTMART',
    discountType: 'percentage',
    discountValue: 15,
    maxDiscount: 150,
    minOrder: 400,
    description: '15% OFF up to ₹150 on your first grocery order'
  },
  {
    code: 'EXTRA50',
    discountType: 'flat',
    discountValue: 50,
    maxDiscount: 50,
    minOrder: 499,
    description: 'Flat ₹50 OFF on orders above ₹499'
  },
  {
    code: 'FRESH100',
    discountType: 'flat',
    discountValue: 100,
    maxDiscount: 100,
    minOrder: 999,
    description: 'Flat ₹100 OFF on orders above ₹999'
  },
  {
    code: 'SUPERPLUS',
    discountType: 'percentage',
    discountValue: 20,
    maxDiscount: 250,
    minOrder: 1200,
    description: 'Extra 20% OFF up to ₹250 for Extra Mart Plus Members'
  }
];

export const BANK_OFFERS = [
  {
    bank: 'HDFC Bank',
    offer: '10% Instant Discount on HDFC Credit & Debit Cards on orders above ₹1,500',
    code: 'HDFCGROCERY'
  },
  {
    bank: 'Axis Bank',
    offer: '5% Cashback on Extra Mart Axis Bank Co-branded Credit Card',
    code: 'AXISEXTRA'
  },
  {
    bank: 'Paytm UPI',
    offer: 'Get up to ₹100 Cashback on first 3 UPI transactions via Paytm',
    code: 'PAYTMUPI'
  },
  {
    bank: 'Extra Mart Wallet',
    offer: 'Flat ₹25 Bonus Cashback added directly to wallet on orders above ₹600',
    code: 'WALLET25'
  }
];
