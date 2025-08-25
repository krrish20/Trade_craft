
"use client";

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getLesson } from '@/content/curriculum';
import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Lightbulb, BookOpen, Youtube } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();

  const levelId = Array.isArray(params.levelId) ? params.levelId[0] : params.levelId;
  const lessonId = Array.isArray(params.lessonId) ? params.lessonId[0] : params.lessonId;
  
  const lesson = getLesson(levelId, lessonId);

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
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        
        <header className="space-y-4">
            <p className="text-primary font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Lesson
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{lesson.title}</h1>
            <p className="text-lg text-muted-foreground">
              Estimated time: {lesson.time} minutes
            </p>
        </header>

        <Card className="bg-card/50">
            <CardHeader>
                <CardTitle>Learning Objectives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {lesson.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{obj}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <article className="prose prose-lg prose-invert">
          {lesson.sections.map((section, index) => {
            switch (section.type) {
              case 'text':
                return (
                  <div key={index}>
                    {section.tldr && (
                       <Alert className="mb-6 bg-blue-500/10 border-blue-500/30">
                        <Lightbulb className="h-5 w-5 text-blue-400" />
                        <AlertTitle className="font-semibold text-blue-400">TL;DR</AlertTitle>
                        <AlertDescription className="text-blue-400/80">{section.tldr}</AlertDescription>
                      </Alert>
                    )}
                    <p>{section.body}</p>
                  </div>
                );
              case 'image':
                return section.src ? (
                  <div key={index} className="my-8">
                    <Image
                      src={section.src}
                      alt={section.alt || 'Lesson image'}
                      width={800}
                      height={400}
                      className="rounded-lg border-2 border-border object-cover shadow-lg"
                      data-ai-hint={section['data-ai-hint'] as string | undefined}
                    />
                    {section.alt && <p className="text-center text-sm text-muted-foreground mt-2 italic">{section.alt}</p>}
                  </div>
                ) : null;
              default:
                return null;
            }
          })}
        </article>
        
        {lesson.youtubeLink && (
            <Card>
                <CardHeader>
                    <CardTitle>Further Learning</CardTitle>
                    <CardDescription>Watch this video for more context on the topic.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Button asChild>
                        <a href={lesson.youtubeLink} target="_blank" rel="noopener noreferrer">
                            <Youtube className="mr-2 h-5 w-5" />
                            Watch on YouTube
                        </a>
                    </Button>
                </CardContent>
            </Card>
        )}

        <div className="mt-12 flex justify-end">
          <Button asChild size="lg">
            <Link href={`/quiz/${levelId}/${lessonId}`}>
              Test Your Knowledge <CheckCircle className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
