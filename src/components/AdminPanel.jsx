import React, { useState } from 'react';
import { UploadCloud, Package, CheckCircle2, AlertCircle } from 'lucide-react';

const AdminPanel = ({ onReceiveOrder }) => {
  const [product, setProduct] = useState({ name: '', price: '', image: '', badge: '' });
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(null);
  const [auth, setAuth] = useState({ password: '', loggedIn: false });

  const backend = import.meta.env.VITE_BACKEND_URL;

  const login = async () => {
    try {
      const res = await fetch(`${backend}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: auth.password }),
      });
      const data = await res.json();
      if (data.success) setAuth((a) => ({ ...a, loggedIn: true }));
      else setStatus({ type: 'error', message: 'Invalid admin password.' });
    } catch (e) {
      setStatus({ type: 'error', message: 'Unable to login to admin.' });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!auth.loggedIn) {
      setStatus({ type: 'error', message: 'Please login as admin first.' });
      return;
    }
    if (!product.name || !product.price || !product.image) {
      setStatus({ type: 'error', message: 'Please fill in name, price and image URL.' });
      return;
    }
    try {
      const body = { ...product, price: Number(product.price), rating: 4.7 };
      const res = await fetch(`${backend}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('Upload failed');
      const saved = await res.json();
      setProducts((prev) => [saved, ...prev]);
      setProduct({ name: '', price: '', image: '', badge: '' });
      setStatus({ type: 'success', message: 'Product uploaded successfully.' });
    } catch (e) {
      setStatus({ type: 'error', message: 'Failed to upload product.' });
    }
  };

  // Simulate receiving an order from client
  const simulateOrder = async () => {
    if (products.length === 0) {
      setStatus({ type: 'error', message: 'Upload a product first to simulate an order.' });
      return;
    }
    try {
      const order = {
        items: [
          { name: products[0].name, price: Number(products[0].price), qty: 1, image: products[0].image, product_id: products[0].id },
        ],
        total: Number(products[0].price || 0),
        customer_name: 'Demo Customer',
      };
      const res = await fetch(`${backend}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
      if (!res.ok) throw new Error('Order failed');
      const saved = await res.json();
      onReceiveOrder(saved);
      setStatus({ type: 'success', message: 'New order created.' });
    } catch (e) {
      setStatus({ type: 'error', message: 'Failed to create order.' });
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <UploadCloud className="w-5 h-5 text-gray-700" />
              <h3 className="font-bold text-lg">Admin</h3>
            </div>
            {!auth.loggedIn ? (
              <div className="space-y-3 mb-6">
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Admin password"
                  value={auth.password}
                  onChange={(e) => setAuth((a) => ({ ...a, password: e.target.value }))}
                />
                <button onClick={login} className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold">Login</button>
              </div>
            ) : (
              <form onSubmit={handleUpload} className="space-y-4">
                <input
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Product name"
                  value={product.name}
                  onChange={(e) => setProduct({ ...product, name: e.target.value })}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={product.price}
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                  />
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Badge (optional)"
                    value={product.badge}
                    onChange={(e) => setProduct({ ...product, badge: e.target.value })}
                  />
                </div>
                <input
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Image URL"
                  value={product.image}
                  onChange={(e) => setProduct({ ...product, image: e.target.value })}
                />
                <button type="submit" className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold">Save Product</button>
              </form>
            )}
            {status && (
              <div className={`mt-4 flex items-center gap-2 text-sm ${status.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                {status.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{status.message}</span>
              </div>
            )}
            <button onClick={simulateOrder} className="mt-6 w-full py-3 rounded-xl bg-yellow-400 text-yellow-900 font-bold">Simulate Order → Admin</button>
          </div>

          <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-gray-700" />
              <h3 className="font-bold text-lg">Products</h3>
            </div>
            {products.length === 0 ? (
              <p className="text-gray-600">No products yet. Upload one to see it here.</p>
            ) : (
              <ul className="divide-y divide-black/5">
                {products.map((p) => (
                  <li key={p.id} className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <p className="font-semibold">{p.name}</p>
                        <p className="text-sm text-gray-600">${Number(p.price).toFixed(2)}</p>
                      </div>
                    </div>
                    {p.badge && <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{p.badge}</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
