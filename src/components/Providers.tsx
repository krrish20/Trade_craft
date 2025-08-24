"use client";

import { ProgressProvider } from '@/context/ProgressContext';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ProgressProvider>
        {children}
        <Toaster />
      </ProgressProvider>
    </ThemeProvider>
  );
}
