'use client';

import React from "react";
import { useRouter } from "next/navigation";

interface Testimoni {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  product: {
    name: string;
    image: string;
    price: number;
  };
}

const testimonies: Testimoni[] = [
  {
    id: 1,
    name: "A********",
    date: "1/10/24",
    rating: 5,
    comment: "Kainnya lembut, nyaman dipakai dan ukuran pas",
    product: {
      name: "Kaos Polo Dry Pique Garis",
      price: 149000,
      image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/477678/item/idgoods_53_477678_3x4.jpg?width=494',
    }
  },
  {
    id: 2,
    name: "F********",
    date: "5/1/24",
    rating: 4,
    comment: "Anak saya suka banget! Nyaman dan adem.",
    product: {
      name: "KIDS Kaos Polo Dry Pique",
      price: 149000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-wbVVWddFRXvLxtuE6f2n8FzHw1gcfeycQ&s',
    }
  }
];

const TestimoniPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => router.push('/dashboard')}>
          UNIQLO
        </div>
        <ul className="flex space-x-6 text-sm">
          <li><button onClick={() => router.push('/dashboard/bestseller')} className="hover:underline">Best Seller</button></li>
          <li><button onClick={() => router.push('/dashboard/newarrival')} className="hover:underline">New Arrivals</button></li>
          <li><button onClick={() => router.push('/dashboard/clothing')} className="hover:underline">Clothing</button></li>
          <li><button onClick={() => router.push('/dashboard/kids')} className="hover:underline">Kids</button></li>
          <li><button onClick={() => router.push('/dashboard/testimoni')} className="hover:underline">Testimoni</button></li>
          <li><button onClick={() => router.push('/dashboard/tentangkami')} className="hover:underline">Tentang Kami</button></li>
        </ul>
        <div className="text-2xl">👤</div>
      </nav>

      {/* Title + Search */}
      <section className="px-8 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Testimoni</h2>
          <div className="text-xl">🔍</div>
        </div>

        {/* Testimoni List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonies.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full md:w-48 h-64 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600">{item.name} | {item.date}</p>
                  <div className="flex mb-2">
                    {Array(item.rating).fill(0).map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                    {Array(5 - item.rating).fill(0).map((_, i) => (
                      <span key={i} className="text-gray-300 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-2">{item.comment}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{item.product.name}</p>
                  <p className="text-gray-700 text-sm">Rp {item.product.price.toLocaleString("id-ID")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimoniPage;
