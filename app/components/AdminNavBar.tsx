'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Kids', path: '/dashboard/kidskaryawan' },
  { label: 'Clothing', path: '/dashboard/clothingkaryawan' },
  { label: 'Best seller', path: '/dashboard/bestsellerkaryawan' },
  { label: 'New Arrival', path: '/dashboard/newarrivalkaryawan' },
  { label: 'Daftar transaksi', path: '/dashboard/daftartransaksi' },
];

export default function AdminNavBar() {
  const pathname = usePathname();
  return (
    <header className="bg-black text-white px-10 py-4 rounded-b-2xl flex items-center justify-between">
      <div className="text-xl font-semibold">UNIQLO ADMIN</div>
      <nav className="flex items-center space-x-10 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={
              'hover:text-gray-300 ' +
              (pathname === item.path ? 'font-bold underline' : '')
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-lg">👤</div>
    </header>
  );
}