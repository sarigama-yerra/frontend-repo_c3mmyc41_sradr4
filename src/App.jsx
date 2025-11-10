import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('shop'); // 'shop' | 'admin'
  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + (i.qty || 1), 0), [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleReceiveOrder = (order) => {
    // For now, just log. In future iterations we'll wire this to the backend.
    console.log('Admin received order:', order);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartCount} currentView={view} onChangeView={setView} />

      {view === 'shop' && (
        <>
          <Hero />
          <ProductGrid onAddToCart={handleAddToCart} />
          {/* Simple cart preview */}
          {cart.length > 0 && (
            <section className="py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-xl mb-4">Your Cart</h3>
                  <ul className="divide-y divide-black/5">
                    {cart.map((item) => (
                      <li key={item.id} className="py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                          </div>
                        </div>
                        <div className="font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-end">
                    <button className="px-5 py-3 rounded-xl bg-yellow-400 text-yellow-900 font-bold">Checkout</button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {view === 'admin' && <AdminPanel onReceiveOrder={handleReceiveOrder} />}

      <Footer />
    </div>
  );
}

export default App;
