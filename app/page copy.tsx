'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { supabase } from '../app/lib/supabaseClient';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (loginError) {
      setError('Login failed. Please check your credentials.');
      return;
    }

    // Fetch user role from Supabase (from 'profiles' table)
    const user = data.user;
    if (!user) {
      setError('No user data returned.');
      return;
    }
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profileError || !profile) {
      setError('Unable to fetch user role.');
      return;
    }

    if (profile.role === 'admin') {
      router.push('/dashboard/karyawan');
    } else if (profile.role === 'customer') {
      router.push('/dashboard/pembeli');
    } else {
      setError('Unknown role.');
    }
  }

  function handleRegister() {
    router.push('/dashboard/register'); // Make sure you create this page
  }

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
          <form className="w-full" onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full rounded border px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full rounded border px-4 py-2"
              />
            </div>
            {error && <div className="mb-2 text-red-500">{error}</div>}
            <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mb-2">
              Login
            </button>
            <button
              type="button"
              className="w-full border border-black text-black py-2 rounded hover:bg-gray-200 transition"
              onClick={handleRegister}
            >
              Register
            </button>
          </form>
        </div>
        {/* Right Side (Image) */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="https://image.uniqlo.com/UQ/ST3/au/imagesgoods/464846/item/augoods_56_464846_3x4.jpg?width=494"
            alt="Fashion Girl"
            fill
            className="object-cover"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute bottom-4 left-4 text-xs text-gray-700">
            Height: 5'7&quot;/170cm<br />Size: S
          </div>
        </div>
      </div>
    </main>
  );
}