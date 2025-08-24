"use client";

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getLesson } from '@/content/curriculum';
import { useProgress } from '@/context/ProgressContext';
import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();
  const { completeLesson } = useProgress();

  const levelId = Array.isArray(params.levelId) ? params.levelId[0] : params.levelId;
  const lessonId = Array.isArray(params.lessonId) ? params.lessonId[0] : params.lessonId;
  
  const lesson = getLesson(levelId, lessonId);

  useEffect(() => {
    if (lesson) {
      completeLesson(lesson.id);
    }
  }, [lesson, completeLesson]);

  if (!lesson) {
    return (
      <MainLayout>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Lesson not found</h2>
          <p className="text-muted-foreground">This lesson does not exist or you may not have access yet.</p>
          <Button asChild className="mt-4">
            <Link href="/">Back to Dashboard</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-bold">{lesson.title}</CardTitle>
            <CardDescription className="font-body text-lg">
              Estimated time: {lesson.time} minutes
            </CardDescription>
            <div className="flex flex-wrap gap-2 pt-2">
              {lesson.objectives.map((obj, i) => (
                <Badge variant="secondary" key={i} className="font-normal">{obj}</Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-6 font-body text-base leading-relaxed">
            {lesson.sections.map((section, index) => {
              switch (section.type) {
                case 'text':
                  return (
                    <div key={index}>
                      {section.tldr && (
                         <Alert className="mb-4">
                          <AlertTitle className="font-semibold">TL;DR</AlertTitle>
                          <AlertDescription>{section.tldr}</AlertDescription>
                        </Alert>
                      )}
                      <p>{section.body}</p>
                    </div>
                  );
                case 'image':
                  return section.src ? (
                    <div key={index} className="my-6">
                      <Image
                        src={section.src}
                        alt={section.alt || 'Lesson image'}
                        width={800}
                        height={400}
                        className="rounded-lg border object-cover"
                        data-ai-hint={section['data-ai-hint'] as string | undefined}
                      />
                      {section.alt && <p className="text-center text-sm text-muted-foreground mt-2">{section.alt}</p>}
                    </div>
                  ) : null;
                // Add cases for 'interactive' and 'cheatsheet' here later
                default:
                  return null;
              }
            })}
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-end">
          <Button asChild size="lg">
            <Link href={`/quiz/${levelId}/${lessonId}`}>
              Take the Quiz <CheckCircle className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
