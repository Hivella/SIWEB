'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const kidsProducts = [
  {
    id: 1,
    name: "KIDS Kaos Polo Dry Pique",
    price: 149000,
    stock: 20,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/474645/item/idgoods_00_474645_3x4.jpg?width=494',
  },
  {
    id: 2,
    name: "GIRLS Celana Lebar Rib",
    price: 149000,
    stock: 11,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITUqbNGlGsbKAsazVtZRY1TSlaGIyzIPUxA&s',
  },
  {
    id: 3,
    name: "KIDS Celana Rileks Lebar Linen Blend",
    price: 199000,
    stock: 10,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/475771/item/idgoods_31_475771_3x4.jpg?width=494',
  },
];

function Header() {
  return (
    <header className="bg-black text-white px-10 py-4 rounded-b-2xl flex items-center justify-between">
      <div className="text-xl font-semibold">UNIQLO ADMIN</div>
      <nav className="flex items-center space-x-10 text-sm">
        <Link href="/dashboard/kidskaryawan" className="hover:text-gray-300 font-bold">Kids</Link>
        <Link href="/dashboard/clothingkaryawan" className="hover:text-gray-300">Clothing</Link>
        <Link href="/dashboard/bestsellerkaryawan" className="hover:text-gray-300">Best seller</Link>
        <Link href="/dashboard/newarrivalkaryawan" className="hover:text-gray-300">New Arrival</Link>
        <Link href="/dashboard/daftartransaksi" className="hover:text-gray-300">Daftar transaksi</Link>
      </nav>
      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-lg">👤</div>
    </header>
  );
}

export default function KidsPage() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const router = useRouter();

  const toggleMenu = (id: number) => {
    setActiveMenu(prev => (prev === id ? null : id));
  };

  const handleEdit = (id: number) => {
    router.push(`/dashboard/editkids?id=${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Hapus produk dengan ID: ${id}`);
  };

  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="px-10 py-8">
        <h1 className="text-3xl font-bold mb-10">Stok baju Kids</h1>

        {/* Tambahkan tombol "Tambah Produk" */}
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md mb-6"
          onClick={() => alert("Tombol tambah produk ditekan!")}
        >
          Tambah Produk
        </button>

        <div className="space-y-10">
          {kidsProducts.map((product) => (
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
                <button className="w-8 h-8 border rounded-full text-lg font-semibold hover:bg-gray-200">+</button>
                <button className="w-8 h-8 border rounded-full text-lg font-semibold hover:bg-gray-200">−</button>
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
