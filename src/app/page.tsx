
"use client";

import { useProgress } from '@/context/ProgressContext';
import { OnboardingForm } from '@/components/OnboardingForm';
import { MainLayout } from '@/components/MainLayout';
import { Logo } from '@/components/Logo';
import { DashboardClient } from '@/components/DashboardClient';

export default function HomePage() {
  const { progress, isLoaded } = useProgress();

  if (!isLoaded) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="text-center">
          <Logo className="h-24 w-24 text-primary" />
          <p className="mt-4 text-muted-foreground animate-pulse">Loading Academy...</p>
        </div>
      </div>
    );
  }

  if (!progress || !progress.name) {
    return <OnboardingForm />;
  }

  return (
    <MainLayout>
      <DashboardClient />
    </MainLayout>
  );
}
