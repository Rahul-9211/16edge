'use client';

import { Providers } from '@/components/providers';
import { Toaster } from 'sonner';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {children}
      <Toaster />
    </div>
  );
} 