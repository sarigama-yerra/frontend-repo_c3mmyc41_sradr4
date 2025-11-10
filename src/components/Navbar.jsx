import React from 'react';
import { ShoppingCart, Sun, Shield, LayoutDashboard } from 'lucide-react';

const Navbar = ({ cartCount = 0, currentView = 'shop', onChangeView }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-yellow-400/80 shadow-sm shadow-yellow-500/30">
              <Sun className="w-5 h-5 text-yellow-700" />
            </div>
            <span className="font-extrabold tracking-tight text-xl sm:text-2xl text-gray-900">Sunny Online Store</span>
          </div>

          <nav className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onChangeView('shop')}
              className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currentView === 'shop'
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Shield className="w-4 h-4" /> Shop
            </button>
            <button
              onClick={() => onChangeView('admin')}
              className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currentView === 'admin'
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Admin
            </button>

            <div className="relative">
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-5 h-5 grid place-items-center">
                {cartCount}
              </span>
              <div className="p-2 rounded-full bg-gray-900 text-white">
                <ShoppingCart className="w-5 h-5" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
