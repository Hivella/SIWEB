'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TambahKidsPage() {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    stock: 0,
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/kidsproducts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...product,
        price: Number(product.price),
        stock: Number(product.stock),
      }),
    });
    alert('Produk baru berhasil ditambahkan!');
    router.push('/dashboard/kidskaryawan');
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Tambah Produk Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Nama Produk</label>
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
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
            required
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
            required
          />
        </div>
        <div>
          <label className="block font-medium">URL Gambar</label>
          <input
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Tambah Produk
        </button>
      </form>
    </div>
  );
}