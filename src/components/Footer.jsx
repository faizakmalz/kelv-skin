import React from 'react';
import { Leaf } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-stone-900 text-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-bold">KELV SKIN</span>
            </div>
            <p className="text-stone-400 text-sm">
              Produk perawatan alami berbasis eco enzyme untuk kulit dan lingkungan yang lebih sehat.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <button onClick={() => handleNavigation('home')} className="hover:text-emerald-500 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('products')} className="hover:text-emerald-500 transition">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('story')} className="hover:text-emerald-500 transition">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('find-us')} className="hover:text-emerald-500 transition">
                  Find Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <button onClick={() => handleNavigation('products')} className="hover:text-emerald-500 transition">
                  Eco Body Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('products')} className="hover:text-emerald-500 transition">
                  Home Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('products')} className="hover:text-emerald-500 transition">
                  Hair Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('products')} className="hover:text-emerald-500 transition">
                  Skin Care
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Return & Exchange</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 text-center text-stone-400 text-sm">
          <p>© 2025 Kelv Skin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}