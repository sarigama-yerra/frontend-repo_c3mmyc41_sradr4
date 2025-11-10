import React, { useState } from 'react';
import { UploadCloud, Package, CheckCircle2, AlertCircle } from 'lucide-react';

const AdminPanel = ({ onReceiveOrder }) => {
  const [product, setProduct] = useState({ name: '', price: '', image: '', badge: '' });
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.image) {
      setStatus({ type: 'error', message: 'Please fill in name, price and image URL.' });
      return;
    }
    const newProduct = { ...product, id: Date.now().toString(), rating: 4.7 };
    setProducts((prev) => [newProduct, ...prev]);
    setProduct({ name: '', price: '', image: '', badge: '' });
    setStatus({ type: 'success', message: 'Product uploaded successfully.' });
  };

  // Simulate receiving an order from client
  const simulateOrder = () => {
    if (products.length === 0) {
      setStatus({ type: 'error', message: 'Upload a product first to simulate an order.' });
      return;
    }
    const order = {
      id: 'ORD-' + Math.floor(Math.random() * 100000),
      items: [products[0]],
      total: Number(products[0].price || 0),
      customer: 'Demo Customer'
    };
    onReceiveOrder(order);
    setStatus({ type: 'success', message: 'New order sent to admin dashboard.' });
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <UploadCloud className="w-5 h-5 text-gray-700" />
              <h3 className="font-bold text-lg">Upload Product</h3>
            </div>
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
              <p className="text-gray-600">No products yet. Use the form to add your first product.</p>
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
