"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = (role: "karyawan" | "pembeli") => {
    if (role === "karyawan") {
      router.push("/dashboard");
    } else {
      router.push("/newarrival");
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col justify-center items-center w-1/2 bg-white px-12">
        <img src="/acme-logo.svg" alt="Uniqlo Logo" className="h-16 mb-8" />
        <h2 className="text-xl font-semibold mb-4">SELAMAT DATANG</h2>
        <p className="mb-6">Masuk sebagai</p>
        <button
          onClick={() => handleLogin("karyawan")}
          className="mb-4 px-6 py-3 rounded-full bg-white border shadow-md hover:shadow-lg"
        >
          KARYAWAN
        </button>
        <button
          onClick={() => handleLogin("pembeli")}
          className="px-6 py-3 rounded-full bg-white border shadow-md hover:shadow-lg"
        >
          PEMBELI
        </button>
      </div>

      <div className="w-1/2 h-full">
        <img
          src="/fashion-image.jpg"
          alt="Fashion"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
