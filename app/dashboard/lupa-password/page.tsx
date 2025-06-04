'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, FormEvent } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email.trim() === '') {
      setError(true);
      setSubmitted(false);
      return;
    }

    // Simulasi berhasil kirim email
    setError(false);
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1374&q=80')"
      }}>
      <div className="w-full max-w-3xl bg-white rounded-md shadow-lg flex overflow-hidden">
        {/* Kiri - Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/640px-UNIQLO_logo.svg.png"
              alt="UNIQLO Logo"
              width={60}
              height={60}
            />
          </div>

          <h2 className="text-xl font-bold mb-4">LUPA PASSWORD</h2>
          <p className="text-sm mb-6">
            Tolong masukkan email Anda yang ingin dikirimkan link untuk reset password.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Kontonasai@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-full border ${
                error ? 'border-red-500' : 'border-gray-300'
              } mb-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            {error && (
              <p className="text-red-600 text-sm mb-2">Harap masukkan email!</p>
            )}
            {submitted && (
              <p className="text-blue-600 text-sm mb-2">
                Link reset password sudah dikirimkan ke email Anda.
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Kirim link reset password
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-600 underline">
            <Link href="/">Kembali ke halaman Login</Link>
          </div>
        </div>

        {/* Kanan - Gambar */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="https://image.uniqlo.com/UQ/ST3/au/imagesgoods/464846/item/augoods_56_464846_3x4.jpg?width=494"
            alt="Fashion Model"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
