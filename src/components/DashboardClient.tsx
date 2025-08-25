
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';
import { curriculum } from '@/content/curriculum';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Lock, PlayCircle, ArrowRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Lesson } from '@/lib/types';


function findNextLesson(progress: any, getLessonStatus: any): Lesson | null {
    for (const level of curriculum) {
        for (const lesson of level.lessons) {
            if (getLessonStatus(lesson.id) === 'unlocked') {
                return lesson;
            }
        }
    }
    return null;
}


export function DashboardClient() {
  const { progress, getLessonStatus, getLevelStatus } = useProgress();
  const [selectedLevelId, setSelectedLevelId] = useState<string>(curriculum[0].id);
  const [api, setApi] = useState<CarouselApi>()

  const nextLesson = useMemo(() => {
    if (!progress) return null;
    return findNextLesson(progress, getLessonStatus);
  }, [progress, getLessonStatus]);

  if (!progress) return null;

  const totalLessons = curriculum.flatMap(l => l.lessons).length;
  const completedLessons = progress.completedLessons.length;
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  
  const selectedLevel = curriculum.find(l => l.id === selectedLevelId) || curriculum[0];


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {progress.name}.</h1>
        <p className="text-muted-foreground">Your journey to trading mastery continues.</p>
      </div>

       {nextLesson && (
        <Card className="bg-card/50 border-primary/20 shadow-lg shadow-primary/5 hover:bg-card/70 transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <PlayCircle />
              Next Lesson to Complete
            </CardTitle>
            <CardDescription>This is your next step on the path to mastery. Stay focused and consistent.</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold">{nextLesson.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Module: {curriculum.find(l => l.id === nextLesson.levelId)?.title}
            </p>
            <Button asChild>
              <Link href={`/learn/${nextLesson.levelId}/${nextLesson.id}`}>
                Start Lesson <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Your Curriculum</h2>
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {curriculum.map((level) => {
              const levelStatus = getLevelStatus(level.id);
              const isLocked = levelStatus === 'locked';
              return (
                <CarouselItem key={level.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card 
                      className={cn(
                        "h-full flex flex-col transition-all",
                        isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
                        selectedLevelId === level.id ? 'border-primary shadow-primary/20' : 'border-border'
                      )}
                      onClick={() => !isLocked && setSelectedLevelId(level.id)}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           {isLocked ? <Lock className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                           {level.title}
                        </CardTitle>
                        <CardDescription className="font-body h-12">{level.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-end">
                         <Progress value={
                            (level.lessons.filter(l => getLessonStatus(l.id) === 'completed').length / level.lessons.length) * 100
                         } className="h-2"/>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

       <div className="space-y-2">
            <h3 className="text-xl font-bold">{selectedLevel.title} Lessons</h3>
            <div className="flex flex-col gap-2">
                {selectedLevel.lessons.map(lesson => {
                const lessonStatus = getLessonStatus(lesson.id);
                const isLessonLocked = lessonStatus === 'locked';
                const lessonLink = isLessonLocked ? '#' : `/learn/${selectedLevel.id}/${lesson.id}`;
                
                return (
                    <Link href={lessonLink} key={lesson.id} className={cn(
                        'block p-4 rounded-lg transition-all duration-200 ease-in-out border-2', 
                        isLessonLocked ? 'cursor-not-allowed opacity-60 bg-muted/30' : 'hover:bg-muted/50 hover:border-primary/50',
                        lessonStatus === 'completed' ? 'border-green-500/40 bg-green-500/10' : 'border-transparent bg-muted/40'
                    )}>
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
       </div>

    </div>
  );
}

