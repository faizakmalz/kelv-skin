import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ name, category, benefits, image, onViewDetail }) {
  return (
    <div className="bg-stone-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 group border border-stone-200">
      <div className="bg-gradient-to-br from-emerald-100 to-amber-100 h-64 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-800 opacity-0 group-hover:opacity-10 transition"></div>
        {image && image.startsWith('/images/') ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="text-6xl">🧴</div>';
            }}
          />
        ) : (
          <div className="text-6xl">{image || '🧴'}</div>
        )}
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">{category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3 text-stone-800">{name}</h3>
        <p className="text-stone-600 text-sm mb-4 line-clamp-2">{benefits}</p>
        <button 
          onClick={onViewDetail}
          className="w-full bg-emerald-800 text-stone-50 py-3 rounded-full font-semibold hover:bg-emerald-900 transition flex items-center justify-center gap-2"
        >
          Lihat Detail <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}