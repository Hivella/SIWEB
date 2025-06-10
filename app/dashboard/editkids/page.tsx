'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

function EditProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  const [product, setProduct] = useState({
    id: 0,
    name: '',
    price: 0,
    stock: 0,
    image: '',
  });

  useEffect(() => {
    if (productId) {
      fetch('/api/kidsproducts')
        .then(res => res.json())
        .then(data => {
          const prod = data.find((p: any) => p.id === Number(productId));
          if (prod) setProduct(prod);
        });
    }
  }, [productId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Update the product via API
    await fetch('/api/kidsproducts', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...product, id: Number(productId), price: Number(product.price), stock: Number(product.stock) }),
    });
    alert('Produk berhasil diperbarui!');
    router.push('/dashboard/kidskaryawan');
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Edit Produk</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Nama Produk</label>
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Harga</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Stok</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">URL Gambar</label>
          <input
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}

export default function EditProductPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditProductPage />
    </Suspense>
  );
}