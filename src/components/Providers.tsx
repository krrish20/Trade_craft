
"use client";

import { ProgressProvider } from '@/context/ProgressContext';
import { TradePlannerProvider } from '@/context/TradePlannerContext';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ProgressProvider>
        <TradePlannerProvider>
          {children}
          <Toaster />
        </TradePlannerProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}
