import React from 'react';
import { Facebook, Instagram, Twitter, Sun } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-yellow-400/90">
                <Sun className="w-5 h-5 text-yellow-900" />
              </div>
              <span className="font-extrabold text-lg">Sunny Online Store</span>
            </div>
            <p className="mt-3 text-sm text-gray-300">Shining deals and delightful designs. Your one-stop shop for trendy essentials.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
              <li><a href="#" className="hover:text-white">Gadgets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-gray-400">
          © {new Date().getFullYear()} Sunny Online Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
