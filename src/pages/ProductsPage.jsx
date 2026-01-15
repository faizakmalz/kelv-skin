import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories, getProductsByCategory } from '../data/productsData';

export default function ProductsPage({ setCurrentPage, setSelectedProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = getProductsByCategory(selectedCategory);

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-stone-800 mb-4">Produk Kami</h1>
          <p className="text-xl text-stone-600">Temukan produk eco-friendly yang tepat untuk kebutuhan Anda</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedCategory === cat.id
                  ? 'bg-emerald-800 text-stone-50'
                  : 'bg-stone-50 text-stone-700 hover:bg-emerald-50 border border-stone-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              name={product.name}
              category={product.categoryName}
              benefits={product.benefits}
              image={product.image}
              onViewDetail={() => handleViewDetail(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-600 text-lg">Tidak ada produk dalam kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}