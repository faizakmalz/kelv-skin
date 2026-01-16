import React, { useState } from 'react';
import { Star, Heart, Leaf, Sparkles, Package } from 'lucide-react';

export default function ProductDetailPage({ product, setCurrentPage }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '300ml');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-stone-50 py-20 text-center">
        <h2 className="text-2xl font-bold text-stone-800">Produk tidak ditemukan</h2>
        <button 
          onClick={() => setCurrentPage('products')}
          className="mt-4 text-emerald-800 hover:underline"
        >
          Kembali ke Produk
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <button 
          onClick={() => setCurrentPage('products')}
          className="text-emerald-800 hover:text-emerald-900 mb-8 flex items-center gap-2 font-medium"
        >
          ← Kembali ke Produk
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-3xl h-96 md:h-full flex items-center justify-center sticky top-24">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">{product.category}</span>
            <h1 className="text-4xl font-bold text-stone-800 mt-2 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-stone-600">(128 reviews)</span>
            </div>

            <p className="text-3xl font-bold text-emerald-800 mb-6">{product.price}</p>

            <div className="mb-6">
              <h3 className="font-semibold text-stone-800 mb-2">Manfaat:</h3>
              <p className="text-stone-600 leading-relaxed">{product.benefits}</p>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-stone-800 mb-3">Ukuran:</h3>
                <div className="flex gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-full font-medium transition ${
                        selectedSize === size
                          ? 'bg-emerald-800 text-stone-50'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-800 mb-3">Jumlah:</h3>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center font-bold text-stone-700"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center font-bold text-stone-700"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-emerald-800 text-stone-50 py-4 rounded-full font-semibold hover:bg-emerald-900 transition shadow-lg">
                Tambah ke Keranjang
              </button>
              <button className="px-6 py-4 border-2 border-emerald-800 text-emerald-800 rounded-full font-semibold hover:bg-emerald-50 transition">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t border-stone-200 pt-8">
              <h3 className="font-semibold text-stone-800 mb-4">Keunggulan Produk:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-emerald-800 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-600">Terbuat dari eco enzyme alami</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-emerald-800 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-600">Aman untuk kulit sensitif</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-800 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-600">Bebas bahan kimia berbahaya</span>
                </li>
                <li className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-emerald-800 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-600">Kemasan ramah lingkungan</span>
                </li>
              </ul>
            </div>

            {/* Ingredients (if needed later) */}
            <div className="mt-8 bg-emerald-50 rounded-2xl p-6">
              <h3 className="font-semibold text-stone-800 mb-2">📦 Pengiriman Cepat</h3>
              <p className="text-sm text-stone-600">Dikirim dari Surabaya, estimasi 2-3 hari kerja</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}