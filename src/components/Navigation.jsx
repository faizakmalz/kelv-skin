import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search, ChevronDown, Leaf } from 'lucide-react';

export default function Navigation({ currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  const productCategories = [
    { name: 'Eco Body Care', path: 'products', category: 'body-care' },
    { name: 'Home Care', path: 'products', category: 'home-care' },
    { name: 'Hair Care', path: 'products', category: 'hair-care' },
    { name: 'Skin Care', path: 'products', category: 'skin-care' }
  ];

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-forest-800 shadow-sm sticky top-0 z-50 border-stone-200">
      <div className="mx-auto px-4 sm:px-8 lg:px-48">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <Leaf className="w-8 h-8 text-white" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">KELV SKIN</span>
              <span className="text-xs text-white">Face & Body Wash Eco Enzyme</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`${currentPage === 'home' ? 'text-white font-bold' : 'text-white'} hover:text-forest-500 transition font-medium`}
            >
              Home
            </button>
            
            <div 
              className="relative"
              onMouseEnter={() => setShowProductDropdown(true)}
              onMouseLeave={() => setShowProductDropdown(false)}
            >
              <button 
                onClick={() => handleNavigation('products')}
                className={`${currentPage === 'products' ? 'text-white font-bold' : 'text-white'} hover:text-forest-500 font-bold transition flex items-center font-medium`}
              >
                Products <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {showProductDropdown && (
                <div className="absolute left-0 w-48 bg-stone-50 shadow-lg rounded-lg mt-2 py-2 border border-stone-200">
                  {productCategories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavigation('products')}
                      className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-forest-50 hover:text-forest-800 font-bold"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavigation('story')}
              className={`${currentPage === 'story' ? 'text-white font-bold' : 'text-white'} hover:text-forest-500 font-bold transition font-medium`}
            >
              Our Story
            </button>
            
            <button 
              onClick={() => handleNavigation('find-us')}
              className={`${currentPage === 'find-us' ? 'text-white font-bold' : 'text-white'} hover:text-forest-500 font-bold transition font-medium`}
            >
              Find Us
            </button>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-forest-800">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-forest-800">
              <User className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-forest-800 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-forest-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => handleNavigation('home')}
              className="block w-full text-left text-stone-700 hover:text-forest-800"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('products')}
              className="block w-full text-left text-stone-700 hover:text-forest-800"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavigation('story')}
              className="block w-full text-left text-stone-700 hover:text-forest-800"
            >
              Our Story
            </button>
            <button 
              onClick={() => handleNavigation('find-us')}
              className="block w-full text-left text-stone-700 hover:text-forest-800"
            >
              Find Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}