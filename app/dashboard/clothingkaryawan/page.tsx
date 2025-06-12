'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminNavBar from '@/app/components/AdminNavBar';

export default function ClothingPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/clothingproducts')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const toggleMenu = (id: number) => {
    setActiveMenu(prev => (prev === id ? null : id));
  };

  const handleEdit = (id: number) => {
    router.push(`/dashboard/editclothing?id=${id}`);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Yakin ingin menghapus produk ini?")) {
      await fetch('/api/clothingproducts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      setProducts(products.filter((p) => p.id !== id));
      setActiveMenu(null);
    }
  };

  const updateStock = async (id: number, newStock: number) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    const updatedProduct = { ...product, stock: newStock };
    await fetch('/api/clothingproducts', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    });
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: newStock } : p))
    );
  };

  const handleAddStock = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    updateStock(id, product.stock + 1);
  };

  const handleSubtractStock = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (!product || product.stock <= 0) return;
    updateStock(id, product.stock - 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <AdminNavBar />

      <div className="px-10 py-8">
        <h1 className="text-3xl font-bold mb-10">Stok Baju Clothing</h1>

        <Link href="/dashboard/tambahclothingkaryawan">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md mb-6">
            Tambah Produk
          </button>
        </Link>

        <div className="space-y-10">
          {products.map((product) => (
            <div key={product.id} className="flex items-center gap-6 relative">
              <div className="w-24 h-28 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md border"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-md font-semibold">{product.name}</h2>
                <p className="text-gray-700">Rp {product.price.toLocaleString('id-ID')}</p>
              </div>

              <div className="flex items-center gap-2 relative">
                <button
                  className="w-8 h-8 border rounded-full text-lg font-semibold hover:bg-gray-200"
                  onClick={() => handleAddStock(product.id)}
                >+</button>
                <button
                  className="w-8 h-8 border rounded-full text-lg font-semibold hover:bg-gray-200"
                  onClick={() => handleSubtractStock(product.id)}
                >−</button>
                <div className="w-10 h-8 bg-gray-300 flex items-center justify-center rounded-md">
                  {product.stock}
                </div>
                <button
                  className="ml-2 text-2xl font-bold text-gray-600"
                  onClick={() => toggleMenu(product.id)}
                >
                  ⋮
                </button>

                {activeMenu === product.id && (
                  <div className="absolute right-0 top-12 bg-white border shadow rounded-md z-20">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => handleEdit(product.id)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => handleDelete(product.id)}
                    >
                      🗑️ Hapus
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}