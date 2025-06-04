// app/profiles/page.tsx
'use client';

import Image from 'next/image';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const profiles = [
  {
    name: 'Christhrophorus Karol Adrian',
    description: 'I am the ultimate waifu!\nSaya berusaha sekuat tenaga namun dipet sedangkan :(',
    image: '/hero-desktop.png', // Ganti sesuai nama file avatar
  },
  {
    name: 'Syella Herlin Febrianti',
    description: 'Deskripsi singkat.',
    image: '/hero-desktop.png',
  },
  {
    name: 'Muhamad Adika Bintang Pratama',
    description: 'Amatarp Gnatnib Akida Damahum.',
    image: '/hero-desktop.png',
  },
];

export default function ProfilesPage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-2xl font-bold mb-2">Profiles</h1>
      <p className="text-gray-500 mb-6">Profile diri milik pengembang UI</p>

      <div className="flex flex-col gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-black text-white p-4 rounded-xl shadow-md"
          >
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-white">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{profile.name}</h2>
              <p className="text-sm whitespace-pre-line">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
