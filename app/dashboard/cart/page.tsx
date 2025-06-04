'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const cartItem = {
  id: 1,
  name: 'T-Shirt SUPIMA Katun Kerah Bulat dengan Lengan Pendek',
  price: 199000,
  image: 'https://down-id.img.susercontent.com/file/id-11134201-23030-l5320fi5smove1',
  color: 'darkslategray',
  size: 'S/M',
  quantity: 1,
};

const CartPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      {/* HEADER */}
      <header className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="text-2xl font-bold">UNIQLO</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <button onClick={() => router.push('/dashboard/bestseller')} className="hover:text-gray-300">Best Seller</button>
          <button onClick={() => router.push('/dashboard/newarrival')} className="hover:text-gray-300">New Arrivals</button>
          <button onClick={() => router.push('/dashboard/clothing')} className="hover:text-gray-300">Clothing</button>
          <button onClick={() => router.push('/dashboard/kids')} className="hover:text-gray-300">Kids</button>
          <li><button onClick={() => router.push('/dashboard/testimoni')} className="hover:underline">Testimoni</button></li>
          <li><button onClick={() => router.push('/dashboard/tentangkami')} className="hover:underline">Tentang Kami</button></li>
        </nav>
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
          </svg>
          {/* User Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 1.2c-3.6 0-10.8 1.8-10.8 5.4V21h21.6v-2.4c0-3.6-7.2-5.4-10.8-5.4z" />
          </svg>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-white px-4 py-6 md:px-12">
        <h1 className="text-3xl font-semibold mb-6">Keranjang</h1>

        <div className="border rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start shadow-md">
          {/* Gambar Produk */}
          <div className="w-full md:w-[300px]">
            <img
              src={cartItem.image}
              alt={cartItem.name}
              className="w-full h-auto object-cover shadow"
            />
            <p className="text-xs text-right mt-2 text-gray-500">Height: 6'1&quot;/185cm<br />Size: 31inch</p>
          </div>

          {/* Detail Produk */}
          <div className="flex flex-col flex-grow gap-3">
            <h2 className="text-md font-normal">{cartItem.name}</h2>
            <p className="text-md font-medium">Rp {cartItem.price.toLocaleString('id-ID')}</p>

            {/* Warna */}
            <div>
              <p className="text-sm font-medium mb-1">Warna:</p>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full border-2 border-black" style={{ backgroundColor: 'darkslategray' }} />
                <span className="w-6 h-6 rounded-full border" style={{ backgroundColor: '#EDF3F2' }} />
                <span className="w-6 h-6 rounded-full border" />
              </div>
            </div>

            {/* Ukuran */}
            <div>
              <p className="text-sm font-medium mb-1 mt-2">Ukuran</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 border text-xs rounded-sm bg-gray-100">{cartItem.size}</button>
                <button className="px-3 py-1 border text-xs rounded-sm">L/XL</button>
              </div>
            </div>

            {/* Kuantitas */}
            <div className="flex items-center gap-2 mt-2">
              <button className="w-10 h-10 border text-lg rounded hover:bg-gray-100">-</button>
              <span className="text-lg font-medium">{cartItem.quantity}</span>
              <button className="w-10 h-10 border text-lg rounded hover:bg-gray-100">+</button>
            </div>

            {/* Tombol Beli dan Favorite */}
            <div className="flex items-center justify-between mt-4">
              <button className="flex-1 bg-pink-100 text-black font-medium py-3 rounded-full hover:bg-pink-200 text-sm">
                BELI SEKARANG
              </button>
              <button className="ml-3 text-black hover:text-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5-1.568 0-2.948.805-3.75 2.028A4.491 4.491 0 0 0 9 3.75C6.515 3.75 4.5 5.765 4.5 8.25c0 4.525 7.5 9.75 7.5 9.75s7.5-5.225 7.5-9.75Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Icon Trash */}
          <div className="md:ml-auto mt-4 md:mt-0">
            <button className="text-red-500 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path
                  d="M9 3a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0 0 1H6v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6h.5a.5.5 0 0 0 0-1H16V4a1 1 0 0 0-1-1H9Zm1 2V4h4v1h-4Zm-2 1h8v13H8V6Zm2 2a.5.5 0 0 1 1 0v8a.5.5 0 0 1-1 0V8Zm4 0a.5.5 0 0 1 1 0v8a.5.5 0 0 1-1 0V8Z" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
