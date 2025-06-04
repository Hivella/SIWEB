import Link from 'next/link';
import Image from 'next/image';

export default function UserProfilePage() {
  return (
    <main className="min-h-screen bg-white p-0">
      {/* Header */}
      <div className="flex items-center justify-between bg-black text-white px-4 py-3">
        <h1 className="text-xl font-bold">UNIQLO</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="rounded px-2 py-1 text-black"
          />
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <Image src="/user-avatar.png" alt="User Avatar" width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Kategori Navigasi */}
      <nav className="flex justify-center gap-6 border-b border-gray-200 bg-white py-4 text-sm font-semibold text-gray-700 shadow-sm">
        <Link href="/dashboard/bestseller" className="hover:text-red-600">Best Seller</Link>
        <Link href="/dashboard/newarrival" className="hover:text-red-600">New Arrival</Link>
        <Link href="/dashboard/clothing" className="hover:text-red-600">Clothing</Link>
        <Link href="/dashboard/kids" className="hover:text-red-600">Kids</Link>
        <Link href="/dashboard/testimoni" className="hover:text-red-600">Testimoni</Link>
        <Link href="/dashboard/info-toko" className="hover:text-red-600">Tentang Kami</Link>
      </nav>

      {/* Profile Content */}
      <div className="p-6 mt-6 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/3 max-w-xs mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="User Image"
            width={300}
            height={300}
            className="rounded-lg object-cover w-full"
          />
        </div>

        <div className="text-gray-800 text-lg">
          <h2 className="text-xl font-bold mb-4">User Profile</h2>
          <p><strong>UserName:</strong> ChaoticFriedRIce_20Xx</p>
          <p><strong>Age:</strong> 25</p>
          <p><strong>Joined:</strong> 19-2-202X</p>

          <div className="mt-6 flex flex-col gap-4 max-w-sm">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Edit
            </button>
            <button className="border border-black text-black px-4 py-2 rounded hover:bg-gray-100">
              Change Accounts
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
