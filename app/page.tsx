'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = (role: 'karyawan' | 'pembeli') => {
    if (role === 'karyawan') {
      router.push('/dashboard/loginkaryawan');
    } else {
      router.push('/dashboard/loginpembeli');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl rounded-lg bg-white shadow-lg overflow-hidden">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/640px-UNIQLO_logo.svg.png"
            alt="UNIQLO Logo"
            width={60}
            height={60}
            className="mb-6"
          />
          <h2 className="text-2xl font-semibold mb-2">SELAMAT DATANG</h2>
          <p className="mb-6 text-gray-600">Masuk sebagai</p>

          <button
            onClick={() => handleLogin('karyawan')}
            className="mb-4 w-full px-6 py-2 rounded-md bg-white border shadow hover:shadow-md transition"
          >
            KARYAWAN
          </button>

          <button
            onClick={() => handleLogin('pembeli')}
            className="w-full px-6 py-2 rounded-md bg-white border shadow hover:shadow-md transition"
          >
            PEMBELI
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="https://image.uniqlo.com/UQ/ST3/au/imagesgoods/464846/item/augoods_56_464846_3x4.jpg?width=494"
            alt="Fashion"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
