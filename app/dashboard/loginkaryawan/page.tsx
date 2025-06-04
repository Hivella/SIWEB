'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulasi login sukses
    router.push('/dashboard/kidskaryawan');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl rounded-lg bg-white shadow-lg overflow-hidden">
        {/* Login Form */}
        <div className="w-full md:w-1/2 p-10">
          <div className="mb-6">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/640px-UNIQLO_logo.svg.png"
              alt="UNIQLO Logo"
              width={60}
              height={60}
            />
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
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Lupa Password */}
            <Link href="/dashboard/lupa-password" className="mb-4 block text-sm text-red-500 hover:underline">
              Lupa password?
            </Link>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              LOGIN
            </button>

            <div className="my-4 text-center text-gray-500">Or</div>

            {/* Register */}
            <Link
              href="/dashboard/register"
              className="w-full inline-block text-center border border-black py-2 rounded-md hover:bg-gray-100 transition"
            >
              REGISTER
            </Link>
          </form>
        </div>

        {/* Right Image */}
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
