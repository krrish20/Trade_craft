import { getQuiz, getLesson, getLevel } from '@/content/curriculum';
import { QuizClient } from '@/components/QuizClient';
import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function QuizPage({ params }: { params: { levelId: string; lessonId: string } }) {
  const quiz = getQuiz(params.levelId, params.lessonId);

  if (!quiz) {
    return (
       <MainLayout>
        <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
                <CardTitle>Quiz Not Found</CardTitle>
                <CardDescription>We couldn't find the quiz you were looking for.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild>
                    <Link href="/">Return to Dashboard</Link>
                </Button>
            </CardContent>
        </Card>
       </MainLayout>
    );
  }

  const isBossQuiz = params.lessonId === 'boss';
  const quizId = isBossQuiz ? getLevel(params.levelId)!.bossQuiz.id : params.lessonId;
  
  let quizTitle = '';
  if (isBossQuiz) {
    quizTitle = `Level ${params.levelId.split('-')[1]} Boss Quiz`;
  } else {
    const lesson = getLesson(params.levelId, params.lessonId);
    quizTitle = `Quiz: ${lesson?.title || ''}`;
  }


  return (
    <MainLayout>
      <QuizClient quiz={quiz} quizId={quizId} title={quizTitle} levelId={params.levelId}/>
    </MainLayout>
  );
}
