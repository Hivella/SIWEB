'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simpan data atau kirim ke backend di sini
    console.log({ email, password, gender });

    // Setelah register, arahkan ke halaman bestseller
    router.push('/dashboard/bestseller');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-cover bg-center bg-gray-100"
      style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="flex w-full max-w-4xl rounded-lg bg-white shadow-lg overflow-hidden">
        {/* Form Register */}
        <div className="w-full md:w-1/2 p-10">
          {/* Logo + Title */}
          <div className="mb-4 flex items-center gap-4">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/640px-UNIQLO_logo.svg.png" alt="UNIQLO Logo" width={60} height={60} />
            <h2 className="text-xl font-bold">CREATE AN ACCOUNT</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-full border px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-full border px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <div className="flex gap-4 text-sm">
                <label><input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} /> Female</label>
                <label><input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} /> Male</label>
                <label><input type="radio" name="gender" value="unselect" onChange={(e) => setGender(e.target.value)} /> Unselect</label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              REGISTER
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="https://image.uniqlo.com/UQ/ST3/au/imagesgoods/464846/item/augoods_56_464846_3x4.jpg?width=494"
            alt="Fashion Girl"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}
