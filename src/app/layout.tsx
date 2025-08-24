import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tradecraft Academy',
  description: 'Master trading from beginner to advanced with a structured, offline-first curriculum.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Literata:opsz,wght@24..144,400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-headline antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
