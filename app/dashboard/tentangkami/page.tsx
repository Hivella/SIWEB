"use client";
import React from "react";
import Link from "next/link";

const TentangKamiPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Navbar */}
      <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">UNIQLO</div>
        <div className="flex gap-6 text-sm">
          <Link href="/dashboard/bestseller">Best Seller</Link>
          <Link href="/dashboard/newarrival">New Arrivals</Link>
          <Link href="/dashboard/clothing">Clothing</Link>
          <Link href="/dashboard/kids">Kids</Link>
          <Link href="/dashboard/testimoni">Testimoni</Link>
          <Link href="/dashboard/tentangkami">Tentang Kami</Link>
        </div>
        <div className="text-purple-300 text-lg">
          👤
        </div>
      </nav>

      {/* Konten halaman tentang kami */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-6 border-r text-sm space-y-4">
          <p className="font-bold text-xl">TENTANG UNIQLO</p>
          <p>
            UNIQLO adalah perusahaan Jepang yang menyediakan pakaian kasual
            untuk semua orang.
          </p>
          <ul className="mt-6 space-y-2">
            <li>Corporate Information</li>
            <li>Business Overview</li>
            <li>Management Policy</li>
            <li>IR Information</li>
            <li>Global Brand Ambassadors</li>
            <li>Group Companies</li>
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 space-y-6">
          <div className="flex gap-4 border p-4">
            <img
              src="https://www.uniqlo.com/id/en/news/topics/2024112103/img/mimg_1_m.jpg"
              alt="Company"
              className="w-64 h-40 object-cover"
            />
            <div>
              <h2 className="text-lg font-bold">INFORMASI PERUSAHAAN</h2>
              <p className="text-sm">PROFIL PERUSAHAAN</p>
              <a
                href="#"
                className="text-black underline font-semibold text-sm"
              >
                SELENGKAPNYA
              </a>
            </div>
          </div>

          <div className="flex gap-4 border p-4">
            <img
              src="https://www.uniqlo.com/id/en/news/topics/2024112103/img/mimg_1_m.jpg"
              alt="Business"
              className="w-64 h-40 object-cover"
            />
            <div>
              <h2 className="text-lg font-bold">TINJAUAN BISNIS</h2>
              <p className="text-sm">
                Memberikan status bisnis UNIQLO saat ini.
              </p>
              <a
                href="#"
                className="text-black underline font-semibold text-sm"
              >
                SELENGKAPNYA
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TentangKamiPage;
