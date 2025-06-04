'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "T-Shirt SUPIMA Katun Kerah Bulat dengan Lengan Pendek",
    price: 199000,
    image: 'https://down-id.img.susercontent.com/file/id-11134201-23030-l5320fi5smove1',
  },
  {
    id: 2,
    name: "Jaket Blouson Pendek",
    price: 899000,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/475403/item/idgoods_38_475403_3x4.jpg?width=494',
  },
  {
    id: 3,
    name: "AIRism Katun T-Shirt Oversize Kerah Bulat",
    price: 249000,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/465185/item/idgoods_02_465185_3x4.jpg?width=494',
  },
];

const NewArrivalPage: React.FC = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const goToCart = () => {
    router.push('/dashboard/cart');
  };

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">UNIQLO</div>
        <ul className="flex space-x-6 text-sm">
          <li><button onClick={() => router.push('/dashboard/bestseller')} className="hover:underline">Best Seller</button></li>
          <li><button onClick={() => router.push('/dashboard/newarrival')} className="hover:underline">New Arrivals</button></li>
          <li><button onClick={() => router.push('/dashboard/clothing')} className="hover:underline">Clothing</button></li>
          <li><button onClick={() => router.push('/dashboard/kids')} className="hover:underline">Kids</button></li>
          <li><button onClick={() => router.push('/dashboard/testimoni')} className="hover:underline">Testimoni</button></li>
          <li><button onClick={() => router.push('/dashboard/tentangkami')} className="hover:underline">Tentang Kami</button></li>
        </ul>
        <li><button onClick={() => router.push('/dashboard/profil-pengguna')} className="hover:underline">👤</button></li>
      </nav>

      {/* Title + Search */}
      <section className="px-8 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">New Arrivals</h2>
          <div className="text-xl">🔍</div>
        </div>

        {/* Produk List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover rounded shadow"
                />
                <div
                  className="absolute bottom-2 left-2 text-2xl bg-white/80 rounded-full p-2 cursor-pointer"
                  onClick={() => addToCart(product)}
                >
                  🛒
                </div>
              </div>
              <p className="mt-2 font-medium">{product.name}</p>
              <p className="text-gray-700">Rp {product.price.toLocaleString("id-ID")}</p>
              <div className="text-2xl mt-1 cursor-pointer">🤍</div>
            </div>
          ))}
        </div>
      </section>

      {/* Keranjang Global */}
      <div
        className="fixed bottom-4 right-4 text-3xl bg-white rounded-full px-4 py-2 shadow cursor-pointer"
        onClick={goToCart}
      >
        🛍️ {cartItems.length > 0 && (
          <span className="text-sm font-bold text-black">({cartItems.length})</span>
        )}
      </div>
    </div>
  );
};

export default NewArrivalPage;
