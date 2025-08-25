
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useProgress } from '@/context/ProgressContext';
import { OnboardingForm } from '@/components/OnboardingForm';
import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { curriculum } from '@/content/curriculum';
import Link from 'next/link';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';

function Dashboard() {
  const { progress, getLessonStatus, getLevelStatus } = useProgress();

  if (!progress) return null;
  
  const totalLessons = curriculum.flatMap(l => l.lessons).length;
  const completedLessons = progress.completedLessons.length;
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
         <p className="text-muted-foreground font-body">Welcome back, {progress.name}. Continue your journey.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={progressPercentage} className="w-full" />
            <p className="text-sm text-muted-foreground">{completedLessons} of {totalLessons} lessons completed.</p>
            <p className="text-sm text-muted-foreground">Estimated study duration: {progress.estimatedDuration}</p>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-8">
        {curriculum.map((level) => {
          const levelStatus = getLevelStatus(level.id);
          const isLocked = levelStatus === 'locked';
          return (
            <Card key={level.id} className={cn('transition-all duration-300 group', isLocked ? 'bg-card/50' : 'hover:border-primary/20 hover:bg-card/90')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {isLocked && <Lock className="h-5 w-5 text-muted-foreground" />}
                  {level.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-body">{level.description}</p>
                <div className="space-y-2">
                  {level.lessons.map(lesson => {
                    const lessonStatus = getLessonStatus(lesson.id);
                    const isLessonLocked = isLocked || lessonStatus === 'locked';

                    const lessonLink = isLessonLocked ? '#' : `/learn/${level.id}/${lesson.id}`;
                    
                    return (
                      <Link href={lessonLink} key={lesson.id} className={cn('block p-3 rounded-lg transition-all duration-200 ease-in-out', 
                          !isLessonLocked && 'hover:bg-muted/50 hover:scale-[1.01]',
                          isLessonLocked && 'cursor-not-allowed opacity-60')}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             {lessonStatus === 'completed' ? <CheckCircle className="h-5 w-5 text-green-500" /> : <PlayCircle className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:text-foreground" />}
                            <span className="font-medium">{lesson.title}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{lesson.time} min</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}


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
      <Dashboard />
    </MainLayout>
  );
}
