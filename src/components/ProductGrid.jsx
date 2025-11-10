import React from 'react';
import { Star } from 'lucide-react';

const productsSample = [
  {
    id: '1',
    name: 'Aurora Headphones',
    price: 129.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJvcmElMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjI3MjUzNjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'Bestseller'
  },
  {
    id: '2',
    name: 'Solar Smartwatch',
    price: 199.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    badge: 'Trending'
  },
  {
    id: '3',
    name: 'Breeze Sneakers',
    price: 89.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Halo Lamp',
    price: 59.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1701836923385-91279df56013?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYWxvJTIwTGFtcHxlbnwwfDB8fHwxNzYyNzcxNzc2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-400" />
          </div>
          <span>{product.rating}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button onClick={() => onAdd(product)} className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:translate-y-[-1px] transition-transform">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ onAddToCart }) => {
  return (
    <section id="shop" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-1">Curated picks our customers love</p>
          </div>
          <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsSample.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
