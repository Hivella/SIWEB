// app/kids/page.tsx
'use client';

import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "KIDS Kaos Polo Dry Pique",
    price: 149000,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/474645/item/idgoods_00_474645_3x4.jpg?width=494',
  },
  {
    id: 2,
    name: "GIRLS Celana Lebar Rib",
    price: 149000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITUqbNGlGsbKAsazVtZRY1TSlaGIyzIPUxA&s',
  },
  {
    id: 3,
    name: "KIDS Celana Rileks Lebar Linen Blend",
    price: 199000,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/475771/item/idgoods_31_475771_3x4.jpg?width=494',
  },
];

const KidsPage: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">UNIQLO</div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#">Best Seller</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#">Testimoni</a></li>
          <li><a href="#">Tentang Kami</a></li>
        </ul>
        <div className="text-2xl">👤</div>
      </nav>

      <section className="px-8 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Kids</h2>
          <div className="text-xl">🔍</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded shadow"
              />
              <p className="mt-2 font-medium">{product.name}</p>
              <p className="text-gray-700">Rp {product.price.toLocaleString("id-ID")}</p>
              <div className="text-2xl mt-1 cursor-pointer">🤍</div>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-4 right-4 text-3xl">🛍️</div>
    </div>
  );
};

export default KidsPage;
