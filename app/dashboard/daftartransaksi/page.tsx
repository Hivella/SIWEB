'use client';

import Link from 'next/link';
import { useState } from 'react';

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

const transactions = [
  {
    id: 'TRX001',
    date: '2025-04-20',
    customer: 'Andi Saputra',
    total: 478000,
    status: 'Selesai',
  },
  {
    id: 'TRX002',
    date: '2025-04-21',
    customer: 'Budi Santoso',
    total: 199000,
    status: 'Menunggu Pembayaran',
  },
  {
    id: 'TRX003',
    date: '2025-04-21',
    customer: 'Citra Lestari',
    total: 899000,
    status: 'Dibatalkan',
  },
];

export default function DaftarTransaksiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="px-10 py-10">
        <h1 className="text-3xl font-bold mb-8">Daftar Transaksi</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-6 py-3 text-left">ID Transaksi</th>
                <th className="px-6 py-3 text-left">Tanggal</th>
                <th className="px-6 py-3 text-left">Pelanggan</th>
                <th className="px-6 py-3 text-left">Total</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx) => (
                <tr key={trx.id} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-4">{trx.id}</td>
                  <td className="px-6 py-4">{trx.date}</td>
                  <td className="px-6 py-4">{trx.customer}</td>
                  <td className="px-6 py-4">Rp {trx.total.toLocaleString('id-ID')}</td>
                  <td className="px-6 py-4">{trx.status}</td>
                  <td className="px-6 py-4">
                    <Link href={`/dashboard/detailtransaksi?id=${trx.id}`} className="text-blue-600 hover:underline">
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

//test
//yes