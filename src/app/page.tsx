
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useProgress } from '@/context/ProgressContext';
import { OnboardingForm } from '@/components/OnboardingForm';
import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { curriculum } from '@/content/curriculum';
import Link from 'next/link';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';

function Dashboard() {
  const { progress, getLessonStatus, getLevelStatus } = useProgress();

  if (!progress) return null;
  
  const totalLessons = curriculum.flatMap(l => l.lessons).length;
  const completedLessons = progress.completedLessons.length;
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {progress.name}.</h1>
        <p className="text-muted-foreground">Let's continue your journey to trading mastery. Your path is set.</p>
      </div>

      <Card className="border-2 border-primary/20 shadow-lg shadow-primary/10">
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
           <CardDescription>
              {completedLessons} of {totalLessons} lessons completed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="w-full h-3" />
          <p className="text-sm text-muted-foreground mt-2">Personalized Path: ~{progress.estimatedDuration} to complete.</p>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Your Curriculum</h2>
        <Accordion type="single" collapsible className="w-full" defaultValue={curriculum.find(level => getLevelStatus(level.id) === 'unlocked')?.id}>
          {curriculum.map((level) => {
            const levelStatus = getLevelStatus(level.id);
            const isLocked = levelStatus === 'locked';
            const lessonsInLevel = level.lessons.length;
            const completedInLevel = level.lessons.filter(l => getLessonStatus(l.id) === 'completed').length;

            return (
              <AccordionItem key={level.id} value={level.id} disabled={isLocked}>
                <AccordionTrigger className={cn("hover:no-underline", isLocked ? "cursor-not-allowed opacity-50" : "")}>
                  <div className="flex items-center gap-4">
                    {isLocked && <Lock className="h-5 w-5 text-muted-foreground" />}
                    {!isLocked && getLevelStatus(level.id) === 'completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
                    <span className="text-lg font-semibold">{level.title}</span>
                  </div>
                   <Badge variant={levelStatus === 'completed' ? 'default' : 'secondary'}>{completedInLevel}/{lessonsInLevel}</Badge>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4 font-body px-4">{level.description}</p>
                   <div className="flex flex-col gap-2 p-2">
                      {level.lessons.map(lesson => {
                        const lessonStatus = getLessonStatus(lesson.id);
                        const isLessonLocked = isLocked || lessonStatus === 'locked';

                        const lessonLink = isLessonLocked ? '#' : `/learn/${level.id}/${lesson.id}`;
                        
                        return (
                          <Link href={lessonLink} key={lesson.id} className={cn('block p-4 rounded-lg transition-all duration-200 ease-in-out', 
                              !isLessonLocked && 'hover:bg-muted/50',
                              isLessonLocked && 'cursor-not-allowed opacity-60')}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                {lessonStatus === 'completed' ? <CheckCircle className="h-5 w-5 text-green-500" /> : <PlayCircle className="h-5 w-5 text-muted-foreground" />}
                                <span className="font-medium">{lesson.title}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">{lesson.time} min</span>
                            </div>
                          </Link>
                        )
                      })}
                   </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
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
