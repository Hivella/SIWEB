// pages/index.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Customer Image</h1>

      <Image
        src="/customers/evil-rabbit.png"
        alt="Evil Rabbit"
        width={150}
        height={150}
      />
    </div>
  );
}
