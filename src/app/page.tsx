'use client';

import Navbar from '@/components/ui/Navbar/Navbar';
import PromotionBar from '@/components/ui/PromotionBar/PromotionBar';

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <PromotionBar />
      <div className="max-w-[var(--container-xl)] mx-auto">
        <Navbar />
      </div>
    </main>
  );
}
