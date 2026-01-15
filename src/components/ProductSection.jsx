import ProductCard from "./ProductCard";

// Products Section
const ProductsSection = () => {
  const products = [
    {
      name: "Gel Shower Parijis Van Bali",
      category: "Eco Body Care",
      benefits: "Membersihkan dengan lembut, aroma lavender menenangkan",
      image: "🧴"
    },
    {
      name: "Shampoo Anti Dandruff",
      category: "Hair Care",
      benefits: "Mengatasi ketombe dan kulit kepala gatal",
      image: "🧴"
    },
    {
      name: "Face Wash Lacto Rice",
      category: "Skin Care",
      benefits: "Mencerahkan kulit tanpa membuatnya kering",
      image: "🧼"
    },
    {
      name: "Eco Detergent Sienna",
      category: "Home Care",
      benefits: "Membersihkan pakaian tanpa merusak serat kain",
      image: "🧺"
    },
    {
      name: "Moisturizer Daily Nourish",
      category: "Skin Care",
      benefits: "Menjaga kelembapan kulit sepanjang hari",
      image: "💧"
    },
    {
      name: "Conditioner Unlimited",
      category: "Hair Care",
      benefits: "Melembutkan dan menutrisi rambut rusak",
      image: "🧴"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50" id="products">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Produk Bestseller</h2>
          <p className="text-xl text-gray-600">Dipercaya oleh ribuan pelanggan di seluruh Indonesia</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;