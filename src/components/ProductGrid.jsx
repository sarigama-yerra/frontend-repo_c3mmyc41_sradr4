import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
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
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-400" />
          </div>
          <span>{(product.rating ?? 4.7).toFixed(1)}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${Number(product.price).toFixed(2)}</span>
          <button onClick={() => onAdd(product)} className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:translate-y-[-1px] transition-transform">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const base = import.meta.env.VITE_BACKEND_URL;
        const res = await fetch(`${base}/api/products`);
        if (!res.ok) throw new Error('Failed to load products');
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError('Unable to load products. Showing curated samples.');
        setProducts([
          {
            id: '1',
            name: 'Aurora Headphones',
            price: 129.99,
            rating: 4.7,
            image:
              'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJvcmElMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjI3MjUzNjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
            badge: 'Bestseller',
          },
          {
            id: '2',
            name: 'Solar Smartwatch',
            price: 199.99,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1557045157-0c9880d11677?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2xhciUyMFNtYXJ0d2F0Y2h8ZW58MHwwfHx8MTc2Mjc3MzkxOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
            badge: 'Trending',
          },
          {
            id: '3',
            name: 'Breeze Sneakers',
            price: 89.99,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1605061757049-c44efcff3798?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmVlemUlMjBTbmVha2Vyc3xlbnwwfDB8fHwxNzYyNzczOTE5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
          },
          {
            id: '4',
            name: 'Halo Lamp',
            price: 59.99,
            rating: 4.5,
            image:
              'https://images.unsplash.com/photo-1701836923385-91279df56013?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYWxvJTIwTGFtcHxlbnwwfDB8fHwxNzYyNzcxNzc2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="shop" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-10 right-10 w-72 h-72 rounded-full bg-yellow-300/30 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-1">Curated picks our customers love</p>
          </div>
          <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">View all</a>
        </div>

        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-64 rounded-2xl bg-gray-100 animate-pulse" />
            ))}
          </div>
        )}

        {!loading && (
          <>
            {error && <div className="mb-4 text-sm text-yellow-800 bg-yellow-100 border border-yellow-200 rounded-xl px-4 py-3">{error}</div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
