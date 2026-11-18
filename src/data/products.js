export const PRODUCTS = [
  // --- FRUITS & VEGETABLES ---
  {
    id: 'fv-01',
    name: 'Fresh Farm Red Tomatoes (Hybrid)',
    brand: 'Farm Fresh',
    category: 'fruits-vegetables',
    subcategory: 'Fresh Vegetables',
    unit: '1 kg',
    price: 32,
    originalPrice: 50,
    discount: 36,
    rating: 4.4,
    ratingCount: 3820,
    reviewCount: 412,
    inStock: true,
    stock: 80,
    isAssured: true,
    tag: 'Deal of the Day',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1546470427-e26264be0b11?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Plump, firm, and juicy red hybrid tomatoes handpicked fresh from certified organic farms. Perfect for curries, salads, fresh soups, and sauces.',
    highlights: [
      '100% Farm Fresh Guaranteed',
      'Grown with safe agricultural practices',
      'No artificial ripening agents used',
      'Rich in Vitamin C and Lycopene'
    ],
    specifications: {
      'Type': 'Hybrid Tomato',
      'Shelf Life': '4 to 6 days',
      'Country of Origin': 'India',
      'Storage': 'Store in a cool, dry place away from direct sunlight',
      'Best Before': '5 days from delivery'
    },
    nutrition: {
      'Energy': '18 kcal',
      'Protein': '0.9 g',
      'Carbohydrates': '3.9 g',
      'Dietary Fiber': '1.2 g',
      'Vitamin C': '14 mg'
    },
    reviews: [
      { name: 'Ramesh K.', rating: 5, date: 'Yesterday', comment: 'Super fresh and firm. Very good quality, just like local mandi but cleaner!', verified: true },
      { name: 'Pooja Sharma', rating: 4, date: '3 days ago', comment: 'Delivery was within 2 hours. Tomatoes were ripe and intact without any damage.', verified: true }
    ]
  },
  {
    id: 'fv-02',
    name: 'Fresh Premium Red Onions (Nashik Quality)',
    brand: 'Farm Fresh',
    category: 'fruits-vegetables',
    subcategory: 'Fresh Vegetables',
    unit: '1 kg',
    price: 38,
    originalPrice: 60,
    discount: 37,
    rating: 4.5,
    ratingCount: 5120,
    reviewCount: 620,
    inStock: true,
    stock: 120,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Authentic Nashik red onions with strong pungent aroma and crunchy texture. Ideal for everyday tadka, gravies, biryanis, and crunchy salads.',
    highlights: [
      'Graded and sorted for consistent medium size',
      'Thin papery peel with high dry-matter content',
      'Longer shelf life'
    ],
    specifications: {
      'Type': 'Nashik Red Onion',
      'Shelf Life': '10 to 14 days',
      'Country of Origin': 'India',
      'Storage': 'Store in a well-ventilated dry basket'
    },
    nutrition: {
      'Energy': '40 kcal',
      'Protein': '1.1 g',
      'Carbohydrates': '9.3 g',
      'Dietary Fiber': '1.7 g'
    },
    reviews: [
      { name: 'Ananya Roy', rating: 5, date: '4 days ago', comment: 'Clean, no rotten onions at all. Very pleased with Extra Mart grocery packaging.', verified: true }
    ]
  },
  {
    id: 'fv-03',
    name: 'Shimla Royal Delicious Red Apples',
    brand: 'Himachal Orchards',
    category: 'fruits-vegetables',
    subcategory: 'Fresh Fruits',
    unit: '4 pcs (Approx. 650g)',
    price: 139,
    originalPrice: 199,
    discount: 30,
    rating: 4.6,
    ratingCount: 2210,
    reviewCount: 290,
    inStock: true,
    stock: 45,
    isAssured: true,
    tag: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1579613832125-5d34a13ffe0a?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Crisp, sweet, and aromatic Royal Delicious apples freshly harvested from high-altitude Himachal orchards. Natural wax-free fruit packed with antioxidants.',
    highlights: [
      'Sweet and crunchy texture',
      'Naturally grown without chemical wax',
      'Individually foam-netted to prevent bruising'
    ],
    specifications: {
      'Type': 'Royal Delicious',
      'Origin': 'Shimla, Himachal Pradesh',
      'Shelf Life': '7 to 10 days refrigerated'
    },
    nutrition: {
      'Energy': '52 kcal',
      'Dietary Fiber': '2.4 g',
      'Vitamin C': '4.6 mg'
    },
    reviews: [
      { name: 'Vikram S.', rating: 5, date: '2 days ago', comment: 'Extremely sweet and crunchy! The foam packing kept them pristine.', verified: true }
    ]
  },
  {
    id: 'fv-04',
    name: 'Robusta Golden Bananas (Ripe & Sweet)',
    brand: 'Farm Fresh',
    category: 'fruits-vegetables',
    subcategory: 'Fresh Fruits',
    unit: '500 g (Approx. 4-5 pcs)',
    price: 29,
    originalPrice: 45,
    discount: 35,
    rating: 4.3,
    ratingCount: 1980,
    reviewCount: 180,
    inStock: true,
    stock: 90,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Naturally ripened, rich in potassium, and deliciously sweet Robusta bananas. Excellent instant energy booster for breakfast smoothies and snacks.',
    highlights: ['Naturally ripened using ethylene chamber (carbide-free)', 'Rich in Potassium & Vitamin B6'],
    specifications: { 'Type': 'Robusta Banana', 'Shelf Life': '3 to 4 days' },
    nutrition: { 'Energy': '89 kcal', 'Potassium': '358 mg', 'Carbohydrates': '23 g' },
    reviews: [{ name: 'Deepak M.', rating: 4, date: '1 day ago', comment: 'Fresh and perfectly yellow, no black bruises.', verified: true }]
  },

  // --- DAIRY, BREAD & EGGS ---
  {
    id: 'db-01',
    name: 'Amul Taaza Homogenised Toned Milk',
    brand: 'Amul',
    category: 'dairy-bakery',
    subcategory: 'Milk & Cream',
    unit: '1 Litre (Tetra Pak)',
    price: 72,
    originalPrice: 75,
    discount: 4,
    rating: 4.8,
    ratingCount: 9420,
    reviewCount: 810,
    inStock: true,
    stock: 150,
    isAssured: true,
    tag: 'Daily Essential',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Amul Taaza toned milk is ultra-high temperature (UHT) treated to eliminate bacteria while retaining fresh taste and nutrients. No boiling required before drinking.',
    highlights: [
      'UHT treated long life tetra pack',
      'No added preservatives or chemicals',
      'Minimum 3.0% Milk Fat, 8.5% SNF',
      'Ready to drink straight from pack'
    ],
    specifications: {
      'Brand': 'Amul',
      'Milk Type': 'Toned Milk',
      'Fat Content': '3.0%',
      'Shelf Life': '180 days (Unopened)',
      'Storage': 'No refrigeration needed until opened; refrigerate after opening'
    },
    nutrition: {
      'Energy': '58.2 kcal',
      'Protein': '3.1 g',
      'Calcium': '150 mg',
      'Fat': '3.1 g'
    },
    reviews: [
      { name: 'Kavita Menon', rating: 5, date: '3 days ago', comment: 'Always keep 3-4 tetra paks in pantry. Genuine product and fast delivery.', verified: true }
    ]
  },
  {
    id: 'db-02',
    name: 'Amul Pasteurised Salted Butter',
    brand: 'Amul',
    category: 'dairy-bakery',
    subcategory: 'Butter & Cheese',
    unit: '500 g',
    price: 275,
    originalPrice: 285,
    discount: 4,
    rating: 4.9,
    ratingCount: 8400,
    reviewCount: 760,
    inStock: true,
    stock: 80,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'The iconic Utterly Butterly Delicious Amul Butter made from pure milk fat. Gives irresistible taste to parathas, toast, pav bhaji, and baking.',
    highlights: [
      '100% Pure cow and buffalo milk fat',
      'Iconic taste loved by Indian families for 60+ years',
      'Delivered in insulated cold chain packaging'
    ],
    specifications: {
      'Brand': 'Amul',
      'Type': 'Salted Table Butter',
      'Fat Percentage': '80%',
      'Shelf Life': '12 Months'
    },
    nutrition: {
      'Energy': '722 kcal',
      'Fat': '80 g',
      'Saturated Fat': '51 g'
    },
    reviews: [
      { name: 'Sanjay Dutt', rating: 5, date: '1 week ago', comment: 'Arrived chilled with ice packs! Great service Extra Mart.', verified: true }
    ]
  },
  {
    id: 'db-03',
    name: 'Fresh Farm Brown Eggs (High Protein)',
    brand: 'Eggoz',
    category: 'dairy-bakery',
    subcategory: 'Eggs',
    unit: 'Pack of 12 pcs',
    price: 119,
    originalPrice: 155,
    discount: 23,
    rating: 4.7,
    ratingCount: 3100,
    reviewCount: 350,
    inStock: true,
    stock: 65,
    isAssured: true,
    tag: 'Deal of the Day',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Nutrient-rich, UV sanitized brown eggs sourced from free-roam hens fed on 100% vegetarian feed. High in protein, Omega-3, and Vitamin D.',
    highlights: ['UV Sanitized & Bacteria-free shells', '6g High-Quality Protein per egg', 'Vegetarian fed hens'],
    specifications: { 'Type': 'Brown Eggs', 'Count': '12 Pieces', 'Shelf Life': '21 days' },
    nutrition: { 'Protein': '13 g', 'Energy': '143 kcal', 'Fat': '9.5 g' },
    reviews: [{ name: 'Arun V.', rating: 5, date: 'Yesterday', comment: 'All 12 eggs were in perfect condition, no breakage at all.', verified: true }]
  },
  {
    id: 'db-04',
    name: 'The Health Factory 100% Whole Wheat Bread (Zero Maida)',
    brand: 'The Health Factory',
    category: 'dairy-bakery',
    subcategory: 'Fresh Bread & Pav',
    unit: '350 g',
    price: 55,
    originalPrice: 65,
    discount: 15,
    rating: 4.6,
    ratingCount: 1650,
    reviewCount: 140,
    inStock: true,
    stock: 40,
    isAssured: true,
    tag: 'Healthy Pick',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80'],
    description: 'Truly 100% whole wheat bread crafted with zero maida and zero trans fat. Soft, fibrous slices ideal for wholesome breakfast sandwiches.',
    highlights: ['Zero Maida, Zero Trans-fat', 'Baked fresh daily', 'High dietary fiber'],
    specifications: { 'Shelf Life': '5 days', 'Type': 'Whole Wheat' },
    nutrition: { 'Energy': '245 kcal', 'Fiber': '6.2 g', 'Protein': '8.5 g' },
    reviews: [{ name: 'Megha P.', rating: 5, date: '2 days ago', comment: 'Best whole wheat bread without refined flour.', verified: true }]
  },

  // --- STAPLES & GRAINS ---
  {
    id: 'st-01',
    name: 'Aashirvaad Shudh Chakki Whole Wheat Atta',
    brand: 'Aashirvaad',
    category: 'staples-grains',
    subcategory: 'Atta & Flours',
    unit: '5 kg',
    price: 248,
    originalPrice: 310,
    discount: 20,
    rating: 4.7,
    ratingCount: 12500,
    reviewCount: 1420,
    inStock: true,
    stock: 110,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Made from the grains which are heavy on the palm, golden amber in color and hard in bite. Ground using traditional stone chakki process to retain wheat fiber and natural nutrients.',
    highlights: [
      '100% pure whole wheat grain flour',
      'Rotis stay soft and fluffy for hours',
      'Mechanically cleaned and zero touch packing',
      'High natural dietary fiber content'
    ],
    specifications: {
      'Brand': 'Aashirvaad (ITC)',
      'Type': 'Chakki Atta',
      'Quantity': '5 kg',
      'Shelf Life': '90 Days',
      'Form': 'Powdered Flour'
    },
    nutrition: {
      'Energy': '367 kcal',
      'Carbohydrates': '77.3 g',
      'Dietary Fiber': '11.1 g',
      'Protein': '10.8 g'
    },
    reviews: [
      { name: 'Sunil Rao', rating: 5, date: '3 days ago', comment: 'Rotis come out so soft and fluffy. Extra Mart price is cheaper than D-Mart!', verified: true },
      { name: 'Nandini B.', rating: 5, date: '1 week ago', comment: 'Authentic Aashirvaad pack with latest manufacturing date.', verified: true }
    ]
  },
  {
    id: 'st-02',
    name: 'India Gate Basmati Rice (Classic Premium Long Grain)',
    brand: 'India Gate',
    category: 'staples-grains',
    subcategory: 'Rice & Rice Products',
    unit: '5 kg',
    price: 549,
    originalPrice: 799,
    discount: 31,
    rating: 4.8,
    ratingCount: 7800,
    reviewCount: 920,
    inStock: true,
    stock: 75,
    isAssured: true,
    tag: 'Mega Deal',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Aged for 2 years to perfection. Slender, extra-long grains that expand up to 2.5 times when cooked, releasing an unmistakable royal aroma for Biryani & Pulao.',
    highlights: [
      'Aged for minimum 2 years',
      'Extra-long slender pearl grains',
      'Non-sticky fluffy texture after cooking',
      'Perfect choice for Royal Biryanis and Pulao'
    ],
    specifications: {
      'Brand': 'India Gate',
      'Grain Type': 'Aged Basmati',
      'Weight': '5 kg',
      'Shelf Life': '24 Months'
    },
    nutrition: {
      'Energy': '350 kcal',
      'Carbohydrates': '78 g',
      'Protein': '8.2 g'
    },
    reviews: [
      { name: 'Rajesh G.', rating: 5, date: 'Yesterday', comment: 'The aroma filled the entire home when making mutton biryani. Exceptional quality!', verified: true }
    ]
  },
  {
    id: 'st-03',
    name: 'Tata Sampann Unpolished Toor Dal (Arhar Dal)',
    brand: 'Tata Sampann',
    category: 'staples-grains',
    subcategory: 'Dals & Pulses',
    unit: '1 kg',
    price: 168,
    originalPrice: 215,
    discount: 22,
    rating: 4.7,
    ratingCount: 6300,
    reviewCount: 540,
    inStock: true,
    stock: 95,
    isAssured: true,
    tag: 'Deal of the Day',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Tata Sampann Toor Dal is unpolished, meaning it does not undergo any artificial polishing with water, oil, or leather, thereby preserving its natural wholesome goodness.',
    highlights: [
      'Unpolished - No chemical polishing',
      'Rich in dietary fiber and essential plant protein',
      'Chef Sanjeev Kapoor recommended'
    ],
    specifications: {
      'Brand': 'Tata Sampann',
      'Type': 'Toor / Arhar Dal',
      'Shelf Life': '12 Months'
    },
    nutrition: {
      'Protein': '22 g',
      'Dietary Fiber': '9.5 g',
      'Energy': '343 kcal'
    },
    reviews: [
      { name: 'Bhavna J.', rating: 5, date: '5 days ago', comment: 'Cooks quickly without turning watery. Tastes authentic and rich.', verified: true }
    ]
  },
  {
    id: 'st-04',
    name: 'Happilo Premium California Roasted & Salted Almonds',
    brand: 'Happilo',
    category: 'staples-grains',
    subcategory: 'Dry Fruits & Seeds',
    unit: '500 g (Pouch)',
    price: 435,
    originalPrice: 675,
    discount: 36,
    rating: 4.8,
    ratingCount: 4300,
    reviewCount: 510,
    inStock: true,
    stock: 50,
    isAssured: true,
    tag: 'Top Pick',
    image: 'https://images.unsplash.com/photo-1508061252966-f72fb4677350?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1508061252966-f72fb4677350?auto=format&fit=crop&w=700&q=80'],
    description: 'Crispy, crunchy California almonds roasted to perfection and lightly salted. Packed with Vitamin E, protein, and healthy fats.',
    highlights: ['100% Real California Badam', 'Crunchy roasted with pink salt', 'Heart-healthy snack'],
    specifications: { 'Weight': '500 g', 'Shelf Life': '12 Months' },
    nutrition: { 'Protein': '21 g', 'Vitamin E': '26 mg', 'Energy': '579 kcal' },
    reviews: [{ name: 'Rohit C.', rating: 5, date: '3 days ago', comment: 'Crisp and not overly salted. Very fresh.', verified: true }]
  },

  // --- COOKING OILS & MASALAS ---
  {
    id: 'mo-01',
    name: 'Fortune Sunlite Refined Sunflower Oil Pouch',
    brand: 'Fortune',
    category: 'masalas-oils',
    subcategory: 'Edible Oils',
    unit: '1 Litre',
    price: 124,
    originalPrice: 165,
    discount: 25,
    rating: 4.6,
    ratingCount: 8900,
    reviewCount: 710,
    inStock: true,
    stock: 140,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Light and healthy sunflower oil enriched with Vitamins A and D. Retains food aroma and cooks food with lower oil absorption.',
    highlights: [
      'Enriched with Vitamin A and Vitamin D',
      'High smoke point, ideal for deep frying & daily cooking',
      'Low absorb technology keeps food light'
    ],
    specifications: {
      'Brand': 'Fortune',
      'Type': 'Sunflower Oil',
      'Volume': '1 L',
      'Shelf Life': '9 Months'
    },
    nutrition: {
      'Energy': '900 kcal',
      'Monounsaturated Fat': '30 g',
      'Polyunsaturated Fat': '58 g'
    },
    reviews: [
      { name: 'Kiran Patel', rating: 5, date: '2 days ago', comment: 'Great daily cooking oil. Delivered safely in sealed box.', verified: true }
    ]
  },
  {
    id: 'mo-02',
    name: 'Amul Pure Cow Ghee (Aromatic Desi Ghee Tin)',
    brand: 'Amul',
    category: 'masalas-oils',
    subcategory: 'Desi Ghee',
    unit: '1 Litre (Tin)',
    price: 599,
    originalPrice: 680,
    discount: 12,
    rating: 4.9,
    ratingCount: 11200,
    reviewCount: 1300,
    inStock: true,
    stock: 60,
    isAssured: true,
    tag: 'Deal of the Day',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Golden granular desi cow ghee crafted from fresh cream. Enhances the flavor of sweets, dal tadka, rotis, and traditional festive delicacies.',
    highlights: [
      'Granular danedar texture',
      'Authentic rich aroma of traditional bilona style ghee',
      'Good source of fat-soluble vitamins A, D, E, and K'
    ],
    specifications: {
      'Brand': 'Amul',
      'Type': 'Pure Cow Ghee',
      'Shelf Life': '12 Months',
      'Container': 'Tin Can'
    },
    nutrition: {
      'Energy': '897 kcal',
      'Total Fat': '99.7 g',
      'Saturated Fat': '65 g'
    },
    reviews: [
      { name: 'Pooja Aggarwal', rating: 5, date: '4 days ago', comment: 'Authentic Amul Cow Ghee. Nice granular texture and great smell.', verified: true }
    ]
  },
  {
    id: 'mo-03',
    name: 'Everest Royal Garam Masala Powder',
    brand: 'Everest',
    category: 'masalas-oils',
    subcategory: 'Powdered Spices',
    unit: '100 g',
    price: 84,
    originalPrice: 105,
    discount: 20,
    rating: 4.7,
    ratingCount: 4200,
    reviewCount: 380,
    inStock: true,
    stock: 85,
    isAssured: true,
    tag: 'Essential',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80'],
    description: 'Exquisite blend of 13 whole aromatic spices ground at low temperatures. A pinch elevates curries, gravies, and biryanis to restaurant level.',
    highlights: ['Blend of 13 rich spices', 'Low temperature grinding retains essential oils'],
    specifications: { 'Brand': 'Everest', 'Weight': '100 g', 'Shelf Life': '12 Months' },
    nutrition: { 'Energy': '380 kcal', 'Carbohydrates': '44 g' },
    reviews: [{ name: 'Suresh L.', rating: 5, date: '1 week ago', comment: 'Fragrant and authentic spice blend.', verified: true }]
  },

  // --- SNACKS & BISCUITS ---
  {
    id: 'sb-01',
    name: "Haldiram's Nagpur Aloo Bhujia Namkeen (Family Pack)",
    brand: "Haldiram's",
    category: 'snacks-biscuits',
    subcategory: 'Namkeen & Bhujia',
    unit: '1 kg',
    price: 210,
    originalPrice: 280,
    discount: 25,
    rating: 4.8,
    ratingCount: 15400,
    reviewCount: 1820,
    inStock: true,
    stock: 130,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=700&q=80'
    ],
    description: "India's favorite crunchy teatime namkeen prepared from potato shreds, gram flour, and a spicy blend of mint, cloves, red chilli, and hing.",
    highlights: [
      'Iconic spicy tangy potato namkeen',
      'Crispy bite perfect with chai and evening snacks',
      'Zip-lock vacuum pouch keeps freshness intact'
    ],
    specifications: {
      'Brand': "Haldiram's",
      'Type': 'Aloo Bhujia',
      'Weight': '1 kg',
      'Shelf Life': '6 Months'
    },
    nutrition: {
      'Energy': '572 kcal',
      'Protein': '8.6 g',
      'Carbohydrates': '42.8 g',
      'Fat': '40.6 g'
    },
    reviews: [
      { name: 'Aditya Sen', rating: 5, date: 'Yesterday', comment: 'Always fresh, crunchy and zesty. Huge savings on 1kg pack.', verified: true }
    ]
  },
  {
    id: 'sb-02',
    name: 'Cadbury Dairy Milk Silk Chocolate Family Bar',
    brand: 'Cadbury',
    category: 'snacks-biscuits',
    subcategory: 'Chocolates & Sweets',
    unit: '150 g',
    price: 145,
    originalPrice: 180,
    discount: 19,
    rating: 4.9,
    ratingCount: 9800,
    reviewCount: 1100,
    inStock: true,
    stock: 90,
    isAssured: true,
    tag: 'Top Pick',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'Immerse in the smooth, velvety, and creamy taste of pure chocolate bliss. Richer, darker, and smoother than ever.',
    highlights: ['Silky smooth milk chocolate', 'Perfect treat for desserts and gifting', 'Delivered in thermal cool wrap'],
    specifications: { 'Brand': 'Cadbury', 'Weight': '150 g', 'Shelf Life': '12 Months' },
    nutrition: { 'Energy': '532 kcal', 'Carbohydrates': '58 g', 'Sugar': '54 g' },
    reviews: [{ name: 'Simran K.', rating: 5, date: '3 days ago', comment: 'Did not melt at all thanks to the ice wrap! Great delivery.', verified: true }]
  },
  {
    id: 'sb-03',
    name: 'Maggi 2-Minute Masala Instant Noodles (Pack of 12)',
    brand: 'Nestle',
    category: 'snacks-biscuits',
    subcategory: 'Noodles & Pasta',
    unit: '840 g (12 x 70g)',
    price: 144,
    originalPrice: 168,
    discount: 14,
    rating: 4.8,
    ratingCount: 18500,
    reviewCount: 2200,
    inStock: true,
    stock: 120,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=700&q=80'],
    description: 'The taste of childhood. Maggi 2-minute Masala noodles with the signature Tastemaker infused with 10 roasted spices.',
    highlights: ['Signature Tastemaker blend', 'Goodness of Iron in every serving', 'Quick 2-minute comfort food'],
    specifications: { 'Brand': 'Nestle Maggi', 'Packs': '12 packs', 'Shelf Life': '9 Months' },
    nutrition: { 'Energy': '312 kcal', 'Protein': '6.8 g', 'Carbohydrates': '44 g' },
    reviews: [{ name: 'Manish T.', rating: 5, date: 'Yesterday', comment: 'Unbeatable price for the 12-pack.', verified: true }]
  },
  {
    id: 'sb-04',
    name: 'Oreo Original Vanilla Creme Sandwich Biscuits (Mega Saver)',
    brand: 'Cadbury Oreo',
    category: 'snacks-biscuits',
    subcategory: 'Biscuits & Cookies',
    unit: '300 g',
    price: 72,
    originalPrice: 95,
    discount: 24,
    rating: 4.7,
    ratingCount: 5200,
    reviewCount: 430,
    inStock: true,
    stock: 75,
    isAssured: true,
    tag: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80'],
    description: 'Twist, lick, and dunk! Rich chocolatey biscuits filled with sweet vanilla creme.',
    highlights: ['Rich dark cocoa wafers', 'Smooth vanilla creme center'],
    specifications: { 'Brand': 'Oreo', 'Weight': '300 g', 'Shelf Life': '9 Months' },
    nutrition: { 'Energy': '478 kcal', 'Carbohydrates': '69 g' },
    reviews: [{ name: 'Tanvi J.', rating: 5, date: '4 days ago', comment: 'Kids love it with cold milk.', verified: true }]
  },

  // --- BEVERAGES & TEA ---
  {
    id: 'bv-01',
    name: 'Tata Tea Gold Premium Black Tea Pouch',
    brand: 'Tata Tea',
    category: 'beverages-tea',
    subcategory: 'Tea & Green Tea',
    unit: '1 kg',
    price: 495,
    originalPrice: 650,
    discount: 24,
    rating: 4.8,
    ratingCount: 11400,
    reviewCount: 1250,
    inStock: true,
    stock: 85,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'An exquisite balance of rich CTC tea granules gently blended with 15% gently rolled long tea leaves from Assam for exceptional aroma and taste.',
    highlights: [
      'Assam CTC tea with 15% long leaves',
      'Unmatched aroma and rich golden liquor',
      'Pouch preserves fresh garden aroma'
    ],
    specifications: {
      'Brand': 'Tata Tea',
      'Type': 'Black CTC Tea with Long Leaves',
      'Weight': '1 kg',
      'Shelf Life': '12 Months'
    },
    nutrition: {
      'Energy': '0 kcal',
      'Carbohydrates': '0 g'
    },
    reviews: [
      { name: 'Pradeep J.', rating: 5, date: '2 days ago', comment: 'The best tea for morning kadak chai. Fragrant and strong!', verified: true }
    ]
  },
  {
    id: 'bv-02',
    name: 'Nescafe Classic 100% Pure Instant Coffee Jar',
    brand: 'Nescafe',
    category: 'beverages-tea',
    subcategory: 'Coffee',
    unit: '200 g (Glass Jar)',
    price: 549,
    originalPrice: 699,
    discount: 21,
    rating: 4.8,
    ratingCount: 8900,
    reviewCount: 940,
    inStock: true,
    stock: 65,
    isAssured: true,
    tag: 'Deal of the Day',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80'],
    description: 'Rich, bold, and aromatic instant coffee granules made from finely selected Robusta coffee beans roasted to dark perfection.',
    highlights: ['100% Pure Coffee', 'Rich aroma and bold dark roast profile', 'Instant soluble granules'],
    specifications: { 'Brand': 'Nescafe', 'Weight': '200 g', 'Shelf Life': '24 Months' },
    nutrition: { 'Energy': '2 kcal per cup' },
    reviews: [{ name: 'Harish R.', rating: 5, date: '1 day ago', comment: 'Original glass jar pack, perfectly sealed and fast delivered.', verified: true }]
  },
  {
    id: 'bv-03',
    name: 'Real 100% Mixed Fruit Juice (No Added Preservatives)',
    brand: 'Real',
    category: 'beverages-tea',
    subcategory: 'Fruit Juices',
    unit: '1 Litre (Tetra Pak)',
    price: 115,
    originalPrice: 140,
    discount: 18,
    rating: 4.6,
    ratingCount: 3900,
    reviewCount: 320,
    inStock: true,
    stock: 90,
    isAssured: true,
    tag: 'Top Pick',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80'],
    description: 'Delicious blend of 9 handpicked fruits packed with natural fruit energy and Vitamin C. No added preservatives or colors.',
    highlights: ['Goodness of 9 wholesome fruits', 'Rich in Vitamin C', 'Six-layer aseptic tetra packaging'],
    specifications: { 'Brand': 'Real (Dabur)', 'Volume': '1 L', 'Shelf Life': '7 Months' },
    nutrition: { 'Energy': '56 kcal', 'Carbohydrates': '14 g', 'Vitamin C': '17.5 mg' },
    reviews: [{ name: 'Pooja T.', rating: 5, date: '5 days ago', comment: 'Tastes pure and refreshing when chilled.', verified: true }]
  },

  // --- CLEANING & HOUSEHOLD ---
  {
    id: 'ch-01',
    name: 'Surf Excel Matic Front Load Liquid Detergent Pouch',
    brand: 'Surf Excel',
    category: 'cleaning-household',
    subcategory: 'Detergents & Fabric Care',
    unit: '2 Litres',
    price: 389,
    originalPrice: 475,
    discount: 18,
    rating: 4.8,
    ratingCount: 14200,
    reviewCount: 1600,
    inStock: true,
    stock: 70,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=700&q=80'],
    description: 'Advanced liquid formula specifically engineered for front load washing machines. Penetrates stubborn stains faster than powder and leaves no white residue on clothes.',
    highlights: [
      'Cleans tough stains inside washing machines without rubbing',
      'Dissolves completely with zero residue',
      'Long-lasting fresh linen fragrance'
    ],
    specifications: {
      'Brand': 'Surf Excel (HUL)',
      'Type': 'Matic Liquid Detergent',
      'Volume': '2 Litres',
      'Shelf Life': '24 Months'
    },
    nutrition: { 'Biodegradable': 'Yes' },
    reviews: [
      { name: 'Sarita V.', rating: 5, date: '2 days ago', comment: 'Much better than powder, clothes smell amazing and keep colors bright.', verified: true }
    ]
  },
  {
    id: 'ch-02',
    name: 'Vim Dishwash Gel with Lemon Fragrance Bottle',
    brand: 'Vim',
    category: 'cleaning-household',
    subcategory: 'Dishwash Liquids',
    unit: '750 ml',
    price: 155,
    originalPrice: 195,
    discount: 21,
    rating: 4.7,
    ratingCount: 7800,
    reviewCount: 680,
    inStock: true,
    stock: 95,
    isAssured: true,
    tag: 'Essential',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80'],
    description: 'Powered by 100 lemons. 1 spoon of Vim gel easily cleans a sink full of oily utensils without scratching delicate non-stick cookware.',
    highlights: ['Power of 100 lemons', 'Does not leave white marks or scratch surfaces', 'Gentle on hands'],
    specifications: { 'Brand': 'Vim', 'Volume': '750 ml', 'Shelf Life': '24 Months' },
    nutrition: {},
    reviews: [{ name: 'Neelam K.', rating: 5, date: '3 days ago', comment: 'Very concentrated, one bottle lasts two months.', verified: true }]
  },
  {
    id: 'ch-03',
    name: 'Lizol Floral Surface Disinfectant Floor Cleaner',
    brand: 'Lizol',
    category: 'cleaning-household',
    subcategory: 'Floor & Surface Cleaners',
    unit: '2 Litres',
    price: 345,
    originalPrice: 420,
    discount: 18,
    rating: 4.8,
    ratingCount: 9200,
    reviewCount: 890,
    inStock: true,
    stock: 80,
    isAssured: true,
    tag: 'Deal of the Day',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=700&q=80'],
    description: 'Kills 99.9% germs, viruses, and bacteria. Safe on marble, tiles, granite, and hardwood floors with lasting floral fragrance.',
    highlights: ['Kills 99.9% illness-causing germs', '10x better cleaning than phenyl', 'Pleasant floral fragrance'],
    specifications: { 'Brand': 'Lizol (Reckitt)', 'Volume': '2 Litres', 'Shelf Life': '24 Months' },
    nutrition: {},
    reviews: [{ name: 'Jyoti D.', rating: 5, date: '1 week ago', comment: 'Leaves the floor shiny and smelling fresh.', verified: true }]
  },

  // --- PERSONAL CARE & HYGIENE ---
  {
    id: 'pc-01',
    name: 'Dettol Original Germ Protection Bathing Soap (Buy 4 Get 1 Free)',
    brand: 'Dettol',
    category: 'personal-care',
    subcategory: 'Soaps & Body Wash',
    unit: 'Pack of 5 (125g each)',
    price: 245,
    originalPrice: 325,
    discount: 25,
    rating: 4.8,
    ratingCount: 16200,
    reviewCount: 1950,
    inStock: true,
    stock: 110,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=700&q=80'],
    description: 'Iconic pine fragrance with reliable 99.99% germ defense. Enriched with skin moisturizers to keep skin clean, healthy, and germ-free.',
    highlights: [
      'Trusted 99.99% germ protection for entire family',
      'Value pack: Buy 4 Get 1 Free',
      'Recommended by Indian Medical Association (IMA)'
    ],
    specifications: {
      'Brand': 'Dettol',
      'Weight': '5 x 125g (625g total)',
      'Shelf Life': '36 Months'
    },
    nutrition: {},
    reviews: [
      { name: 'Aakash M.', rating: 5, date: 'Yesterday', comment: 'Value for money deal. Original Dettol fragrance.', verified: true }
    ]
  },
  {
    id: 'pc-02',
    name: 'Colgate Strong Teeth Dental Cavity Protection Toothpaste',
    brand: 'Colgate',
    category: 'personal-care',
    subcategory: 'Oral Care',
    unit: '500 g (Saver Pack 2x250g)',
    price: 215,
    originalPrice: 280,
    discount: 23,
    rating: 4.8,
    ratingCount: 11300,
    reviewCount: 1100,
    inStock: true,
    stock: 90,
    isAssured: true,
    tag: 'Essential',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80'],
    description: 'Enriched with Calcium Boost formula to reinforce enamel and protect teeth against cavities and early decay.',
    highlights: ['2X Stronger enamel defense', 'Fresh mint breath for 12 hours', 'IDA accepted'],
    specifications: { 'Brand': 'Colgate', 'Weight': '500 g', 'Shelf Life': '24 Months' },
    nutrition: {},
    reviews: [{ name: 'Vinay K.', rating: 5, date: '3 days ago', comment: 'Always our go-to toothpaste at best discount.', verified: true }]
  },
  {
    id: 'pc-03',
    name: 'Dove Intense Repair Shampoo with Keratin Actives',
    brand: 'Dove',
    category: 'personal-care',
    subcategory: 'Hair Care & Shampoos',
    unit: '650 ml (Pump Bottle)',
    price: 499,
    originalPrice: 699,
    discount: 29,
    rating: 4.7,
    ratingCount: 8400,
    reviewCount: 910,
    inStock: true,
    stock: 55,
    isAssured: true,
    tag: 'Top Pick',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=700&q=80'],
    description: 'Formulated with Keratin Actives that penetrate deep within hair cuticles, progressively nourishing and repairing damage from within.',
    highlights: ['Repairs damaged cuticles', 'Formulated with Keratin Actives', 'Convenient pump dispenser'],
    specifications: { 'Brand': 'Dove', 'Volume': '650 ml', 'Shelf Life': '24 Months' },
    nutrition: {},
    reviews: [{ name: 'Sneha R.', rating: 5, date: '4 days ago', comment: 'Makes hair silky and manageable after 2 washes.', verified: true }]
  },

  // Additional Supermarket Favorites
  {
    id: 'fv-05',
    name: 'Fresh Farm Green Capsicum (Shimla Mirch)',
    brand: 'Farm Fresh',
    category: 'fruits-vegetables',
    subcategory: 'Fresh Vegetables',
    unit: '500 g',
    price: 36,
    originalPrice: 55,
    discount: 35,
    rating: 4.5,
    ratingCount: 1540,
    reviewCount: 120,
    inStock: true,
    stock: 60,
    isAssured: true,
    tag: 'Fresh',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=700&q=80'],
    description: 'Crisp, glossy green capsicums perfect for noodles, stir-fries, pizza toppings, and stuffed delicacies.',
    highlights: ['Crisp and crunchy', 'Direct from polyhouse farmers', 'Zero chemical wash'],
    specifications: { 'Origin': 'India', 'Shelf Life': '5 days' },
    nutrition: { 'Energy': '20 kcal', 'Vitamin C': '80 mg' },
    reviews: [{ name: 'Geeta P.', rating: 5, date: '2 days ago', comment: 'Crisp and shiny, no wrinkles.', verified: true }]
  },
  {
    id: 'st-05',
    name: 'Tata Salt Vacuum Evaporated Iodised Salt',
    brand: 'Tata Salt',
    category: 'staples-grains',
    subcategory: 'Sugar, Jaggery & Salt',
    unit: '1 kg',
    price: 26,
    originalPrice: 28,
    discount: 7,
    rating: 4.9,
    ratingCount: 22100,
    reviewCount: 2400,
    inStock: true,
    stock: 200,
    isAssured: true,
    tag: 'Daily Essential',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80'],
    description: 'Desh Ka Namak. Pure vacuum evaporated iodised salt ensuring mental development and daily health in millions of Indian households.',
    highlights: ['Vacuum evaporated purity', 'Adequate daily Iodine', 'Guaranteed free-flowing'],
    specifications: { 'Brand': 'Tata Salt', 'Weight': '1 kg', 'Shelf Life': '24 Months' },
    nutrition: { 'Sodium': '38.7 g', 'Iodine': '15 ppm' },
    reviews: [{ name: 'Shyam S.', rating: 5, date: 'Yesterday', comment: 'Purity standard for Indian kitchens.', verified: true }]
  },
  {
    id: 'db-05',
    name: 'Amul Fresh Malai Paneer (Rich & Soft Block)',
    brand: 'Amul',
    category: 'dairy-bakery',
    subcategory: 'Paneer & Curd',
    unit: '200 g',
    price: 90,
    originalPrice: 95,
    discount: 5,
    rating: 4.8,
    ratingCount: 7100,
    reviewCount: 650,
    inStock: true,
    stock: 75,
    isAssured: true,
    tag: 'Daily Fresh',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80'],
    description: 'Soft, melt-in-the-mouth cottage cheese crafted from high-fat pasteurised milk. Excellent for paneer butter masala, tikka, and bhurji.',
    highlights: ['Melt in mouth tenderness', 'Rich in natural milk protein', 'Delivered chilled'],
    specifications: { 'Brand': 'Amul', 'Weight': '200 g', 'Shelf Life': '45 days refrigerated' },
    nutrition: { 'Protein': '18 g', 'Fat': '25 g', 'Energy': '296 kcal' },
    reviews: [{ name: 'Swati R.', rating: 5, date: '3 days ago', comment: 'So soft and fresh, paneer cooked beautifully.', verified: true }]
  },
  {
    id: 'sb-05',
    name: "Lay's India's Magic Masala Potato Chips (Party Pack)",
    brand: "Lay's",
    category: 'snacks-biscuits',
    subcategory: 'Chips & Crisps',
    unit: '115 g',
    price: 45,
    originalPrice: 50,
    discount: 10,
    rating: 4.7,
    ratingCount: 8800,
    reviewCount: 790,
    inStock: true,
    stock: 150,
    isAssured: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=700&q=80',
    images: ['https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=700&q=80'],
    description: "Crispy ridge-cut potato chips coated in an irresistible fiery blend of whole Indian spices. Perfect party munchie.",
    highlights: ['100% real farm potatoes', 'Spicy aromatic Magic Masala flavor'],
    specifications: { 'Brand': "Lay's (PepsiCo)", 'Weight': '115 g', 'Shelf Life': '4 Months' },
    nutrition: { 'Energy': '544 kcal', 'Carbohydrates': '52 g' },
    reviews: [{ name: 'Karthik N.', rating: 5, date: 'Yesterday', comment: 'Crisp and not crushed, packed with air cushion.', verified: true }]
  }
];
