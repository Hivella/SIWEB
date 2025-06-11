const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

function KidsProductCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex items-center gap-4 rounded-lg bg-gray-100 p-4 shadow-sm w-full`}
    >
      {/* Gambar produk */}
      <div className="h-24 w-20 bg-gray-300 rounded-md" />

      {/* Info produk */}
      <div className="flex-1 space-y-2">
        <div className="h-4 w-48 bg-gray-200 rounded" />
        <div className="h-4 w-24 bg-gray-200 rounded" />
      </div>

      {/* Kontrol jumlah */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-gray-300 rounded-full" />
        <div className="h-8 w-8 bg-gray-300 rounded-full" />
        <div className="h-8 w-10 bg-gray-300 rounded-md" />
      </div>
    </div>
  );
}

function KidsSkeletonList() {
  return (
    <div className="space-y-4 mt-6">
      <KidsProductCardSkeleton />
      <KidsProductCardSkeleton />
      <KidsProductCardSkeleton />
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <div className="px-6 py-4">
      {/* Judul dan tombol */}
      <div className="mb-6 space-y-3">
        <div className="h-8 w-40 bg-gray-200 rounded-md" />
        <div className="h-10 w-36 bg-gray-300 rounded-md" />
      </div>

      {/* List produk */}
      <KidsSkeletonList />
    </div>
  );
}