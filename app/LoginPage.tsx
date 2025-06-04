'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setError('No account found. Please register first.');
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.email === email && user.password === password) {
      setError('');
      // Login sukses → arahkan ke dashboard atau halaman utama
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl rounded-lg bg-white shadow-lg overflow-hidden">
        {/* Login Form */}
        <div className="w-full md:w-1/2 p-10">
          <div className="mb-6">
            <Image src="/uniqlo-logo.png" alt="UNIQLO Logo" width={60} height={60} />
          </div>
          <h2 className="text-2xl font-bold mb-6">LOGIN</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {error && (
              <div className="text-sm text-red-500 mb-4">{error}</div>
            )}

            <div className="mb-4 text-sm text-red-500 cursor-pointer hover:underline">
              Lupa password?
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              LOGIN
            </button>

            <div className="my-4 text-center text-gray-500">Or</div>

            <Link
              href="/register"
              className="w-full inline-block text-center border border-black py-2 rounded-md hover:bg-gray-100 transition"
            >
              REGISTER
            </Link>
          </form>
        </div>

        {/* Right Image */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/model.png"
            alt="Fashion Model"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}
