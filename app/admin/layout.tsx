'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { AdminSidebar } from '@/components/admin/Sidebar';
import { PawPrint } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!isAuthenticated) {
      router.push('/login');
    } else if (user?.role !== 'admin') {
      router.push('/');
    }
  }, [isAuthenticated, user, router]);

  if (!isMounted || !isAuthenticated || user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-surface)]">
        <div className="flex flex-col items-center gap-4">
          <PawPrint size={48} className="text-[var(--color-primary)] animate-pulse" />
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] animate-pulse">Loading Admin Portal...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex flex-col md:flex-row">
      <AdminSidebar />
      <main className="flex-1 md:pl-72 transition-all duration-300 min-h-screen w-full">
        {/* Dynamic padding left handles sidebar collapse via CSS in a real scenario, for simplicity relying on fixed md:pl-72 for now, or you could pass a state context */}
        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
