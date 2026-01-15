// src/data/productsData.js

export const products = [
  // Eco Body Care
  {
    id: 1,
    name: "Gel Shower Parijis Van Bali",
    category: "body-care",
    categoryName: "Eco Body Care",
    benefits: "Membersihkan dengan lembut, aroma lavender menenangkan. Dilengkapi dengan aroma bunga lavender yang lembut dan menenangkan saat digunakan.",
    image: "/images/parijis van bali gel shower.png",
    price: "Rp 75.000",
    sizes: ["300ml", "500ml"],
    ingredients: "Aqua, Metyl Ester Sulfonat, Eco Enzyme, Glyserin, Essential Oil, Cocamidopropyl Betaine, Ekstrak Lavender, Butterfly Pea Flower",
    description: "Membersihkan tubuh dari kotoran dan minyak berlebih, membantu menjaga kesegaran dan kelembapan alami kulit."
  },
  {
    id: 2,
    name: "Gel Shower Siena",
    category: "body-care",
    categoryName: "Eco Body Care",
    benefits: "Aroma lemon segar yang cerah, memberikan sensasi fresh saat mandi",
    image: "/images/siena gel shower.jpeg",
    price: "Rp 75.000",
    sizes: ["300ml", "500ml"],
    ingredients: "Aqua, Metyl Ester Sulfonat, Eco Enzyme, Glyserin, Essential Oil, Cocamidopropyl Betaine, Ekstrak Lemon, Butterfly Pea Flower",
    description: "Hadir dengan aroma lemon dan jeruk segar yang cerah, memberikan sensasi fresh saat mandi."
  },
  {
    id: 3,
    name: "Gel Shower Hangzhou",
    category: "body-care",
    categoryName: "Eco Body Care",
    benefits: "Cherry blossom extract yang menyegarkan dengan aroma floral yang lembut",
    image: "/images/hangzou gel shower.jpeg",
    price: "Rp 75.000",
    sizes: ["300ml", "500ml"],
    ingredients: "Aqua, Metyl Ester Sulfonat, Eco Enzyme, Glyserin, Essential Oil, Cocamidopropyl Betaine, Cherry Blossom Extract",
    description: "Membersihkan dengan lembut sambil memberikan aroma cherry blossom yang menyegarkan."
  },
  {
    id: 4,
    name: "Gel Shower Osaka",
    category: "body-care",
    categoryName: "Eco Body Care",
    benefits: "Aroma bunga mawar yang mewah dan bold, memberikan kesan premium",
    image: "/images/osaka gel shower.jpeg",
    price: "Rp 75.000",
    sizes: ["300ml", "500ml"],
    ingredients: "Aqua, Metyl Ester Sulfonat, Eco Enzyme, Glyserin, Essential Oil Stress Health, Cocamidopropyl Betaine, Cherry Blossom Extract",
    description: "Memiliki aroma bunga mawar yang kuat dan berkarakter, memberikan kesan mewah dan bold."
  },
  {
    id: 5,
    name: "Gel Shower",
    category: "body-care",
    categoryName: "Eco Body Care",
    benefits: "Membersihkan tubuh dengan formula eco enzyme yang lembut",
    image: "/images/gel shower.jpg",
    price: "Rp 75.000",
    sizes: ["300ml", "500ml"],
    description: "Gel shower dengan formula eco enzyme untuk pengalaman mandi yang natural."
  },

  // Home Care
  {
    id: 6,
    name: "Liquid Eco Detergent Siena",
    category: "home-care",
    categoryName: "Home Care",
    benefits: "Membersihkan pakaian secara efektif tanpa merusak serat kain, aman untuk kulit sensitif",
    image: "/images/liquid eco detergent.jpeg",
    price: "Rp 55.000",
    sizes: ["500ml", "1000ml"],
    ingredients: "Methyl Ester Sulfonat, Eco Enzyme, Aqua, Fragrance Oil Lavender",
    description: "Ramah lingkungan & mudah terurai dengan aroma lavender yang menenangkan."
  },

  // Hair Care
  {
    id: 7,
    name: "Shampoo Parijis Van Bali Anti Dandruff",
    category: "hair-care",
    categoryName: "Hair Care",
    benefits: "Mengatasi ketombe dan kulit kepala gatal, membersihkan kulit kepala secara mendalam namun lembut",
    image: "/images/shampoo parijis van bali.jpeg",
    price: "Rp 85.000",
    sizes: ["200ml", "300ml"],
    ingredients: "Licorice Extract, Sereh (Lemongrass), Eco Enzyme, Surfaktan, Gliserin, Xanthan Gum, Aqua, Aloe Vera Extract, Germall Plus, Essential Oil, Btms 50",
    description: "Menyeimbangkan produksi minyak berlebih dan menenangkan iritasi kulit kepala."
  },

  // Skin Care
  {
    id: 8,
    name: "Face Wash Lacto Rice",
    category: "skin-care",
    categoryName: "Skin Care",
    benefits: "Mencerahkan kulit tanpa membuatnya kering, membantu menjaga tampilan kulit tetap cerah alami",
    image: "/images/face wash lacto.jpeg",
    price: "Rp 65.000",
    sizes: ["100ml"],
    ingredients: "Olive Oil, Coconut Oil, Sunflowers Oil, Sodium Hidroksida, Eco Enzyme, Lacto Rice, Fermentasi Daun Telang",
    description: "Kulit terasa halus dan lembut setelah dibersihkan."
  },
  {
    id: 9,
    name: "Moisturizer Daily Nourish",
    category: "skin-care",
    categoryName: "Skin Care",
    benefits: "Menjaga kelembapan kulit sepanjang hari, membuat kulit terasa lebih lembut dan kenyal",
    image: "/images/moisturizer.png",
    price: "Rp 95.000",
    sizes: ["50ml"],
    ingredients: "Sweet Almond Oil, Olive Oil, Mango Butter, Pulawak, Cetyl Alcohol, Eco Enzyme, Aloe Vera Extract, Aqua, Germall Plus, Essential Oil, Argan Oil",
    description: "Cocok untuk kulit normal hingga kering, memberikan nutrisi optimal."
  },
  {
    id: 10,
    name: "Moisturizer",
    category: "skin-care",
    categoryName: "Skin Care",
    benefits: "Melembapkan dan menutrisi kulit dengan formula ringan",
    image: "/images/moisturizer.png",
    price: "Rp 95.000",
    sizes: ["50ml"],
    description: "Moisturizer dengan formula eco enzyme untuk kulit sehat dan lembap."
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

// Helper function to get product by id
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

// Categories list
export const categories = [
  { id: 'all', name: 'Semua Produk' },
  { id: 'body-care', name: 'Eco Body Care' },
  { id: 'home-care', name: 'Home Care' },
  { id: 'hair-care', name: 'Hair Care' },
  { id: 'skin-care', name: 'Skin Care' }
];