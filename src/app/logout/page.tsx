
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useProgress } from '@/context/ProgressContext';
import { Logo } from '@/components/Logo';

export default function LogoutPage() {
  const { resetProgress } = useProgress();
  const router = useRouter();

  useEffect(() => {
    // In a real app, you would also clear any session tokens here.
    resetProgress();
    setTimeout(() => {
      router.push('/');
    }, 2000); // Redirect after 2 seconds
  }, [resetProgress, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <Logo className="h-16 w-16 mx-auto" />
        <h1 className="mt-4 text-2xl font-bold">Logging you out...</h1>
        <p className="text-muted-foreground">You will be redirected shortly.</p>
      </div>
    </div>
  );
}
