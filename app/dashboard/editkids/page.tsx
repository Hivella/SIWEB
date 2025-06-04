'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function EditProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('id'); // atau gunakan params kalau pakai file-based routing

  const [product, setProduct] = useState({
    name: '',
    price: 0,
    stock: 0,
    image: '',
  });

  useEffect(() => {
    // Simulasi ambil data dari backend berdasarkan id
    if (productId) {
      const dummyData = {
        name: 'T-Shirt SUPIMA Katun',
        price: 199000,
        stock: 20,
        image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/477678/item/idgoods_53_477678_3x4.jpg?width=494',
      };
      setProduct(dummyData);
    }
  }, [productId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi update ke database
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
