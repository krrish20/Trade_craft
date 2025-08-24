
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

import type { QuizItem } from '@/lib/types';
import { useProgress } from '@/context/ProgressContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import Confetti from 'react-confetti';

interface QuizClientProps {
  quiz: {
    items: QuizItem[];
    passScore: number;
  };
  quizId: string;
  title: string;
  levelId: string;
}

export function QuizClient({ quiz, quizId, title }: QuizClientProps) {
  const { updateQuizScore, completeLesson, progress } = useProgress();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | boolean | null)[]>(new Array(quiz.items.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isPassed, setIsPassed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isPassed) {
        completeLesson(quizId);
    }
  }, [isPassed, completeLesson, quizId]);

  const handleAnswerSelect = (answer: number | boolean) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    quiz.items.forEach((item, index) => {
      if (item.answer === selectedAnswers[index]) {
        correctAnswers++;
      }
    });
    const finalScore = Math.round((correctAnswers / quiz.items.length) * 100);
    setScore(finalScore);
    const passed = finalScore >= quiz.passScore;
    setIsPassed(passed);
    updateQuizScore(quizId, finalScore);
    setShowResults(true);
    if (passed) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  if (!quiz.items || quiz.items.length === 0) {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Coming Soon!</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="mb-4">The quiz for this lesson is not available yet. Please check back later.</p>
            <Button asChild>
                <Link href="/">Return to Dashboard</Link>
            </Button>
        </CardContent>
      </Card>
    )
  }

  const currentQuestion = quiz.items[currentQuestionIndex];
  
  if (!currentQuestion) {
     return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Error</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="mb-4">Could not load the quiz questions. Please go back and try again.</p>
            <Button asChild>
                <Link href="/">Return to Dashboard</Link>
            </Button>
        </CardContent>
      </Card>
    )
  }

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto">
        {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Quiz Results</CardTitle>
            <CardDescription>You scored</CardDescription>
            <p className={`text-6xl font-bold ${isPassed ? 'text-green-500' : 'text-destructive'}`}>{score}%</p>
          </CardHeader>
          <CardContent>
            <Alert variant={isPassed ? 'default' : 'destructive'} className={cn(isPassed && 'border-green-500 bg-green-500/10')}>
              <AlertTitle>{isPassed ? 'Congratulations, you passed!' : 'Keep trying!'}</AlertTitle>
              <AlertDescription>
                {isPassed ? `You've mastered this topic. Great job!` : `You need ${quiz.passScore}% to pass. Review the material and try again.`}
              </AlertDescription>
            </Alert>
            <div className="mt-6 space-y-4">
              <h3 className="font-semibold text-lg">Review Your Answers:</h3>
              {quiz.items.map((item, index) => (
                <div key={item.id} className="p-4 border rounded-lg">
                  <p className="font-medium">{item.prompt}</p>
                  <p className={cn("text-sm", selectedAnswers[index] === item.answer ? 'text-green-600' : 'text-red-600')}>
                    Your answer: {item.type === 'mcq' && item.choices ? item.choices[selectedAnswers[index] as number] : String(selectedAnswers[index])}
                    {selectedAnswers[index] === item.answer ? <Check className="inline ml-2 h-4 w-4" /> : <X className="inline ml-2 h-4 w-4" />}
                  </p>
                  {selectedAnswers[index] !== item.answer && <p className="text-sm text-muted-foreground mt-1">Correct answer: {item.type === 'mcq' && item.choices ? item.choices[item.answer as number] : String(item.answer)}</p>}
                  <p className="text-sm text-muted-foreground mt-2 font-body italic">Explanation: {item.explain}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => {
              setShowResults(false);
              setCurrentQuestionIndex(0);
              setSelectedAnswers(new Array(quiz.items.length).fill(null));
              setIsPassed(false);
              setScore(0);
            }}>Retry Quiz</Button>
            <Button asChild>
              <Link href="/">Back to Dashboard</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Question {currentQuestionIndex + 1} of {quiz.items.length}</CardDescription>
        <Progress value={((currentQuestionIndex + 1) / quiz.items.length) * 100} className="mt-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">{currentQuestion.prompt}</p>
        <div>
          {currentQuestion.type === 'mcq' && (
            <RadioGroup onValueChange={(val) => handleAnswerSelect(parseInt(val))} value={String(selectedAnswers[currentQuestionIndex])}>
              {currentQuestion.choices?.map((choice, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={String(index)} id={`q${index}`} />
                  <Label htmlFor={`q${index}`} className="font-normal text-base">{choice}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
          {currentQuestion.type === 'truefalse' && (
            <RadioGroup onValueChange={(val) => handleAnswerSelect(val === 'true')} value={String(selectedAnswers[currentQuestionIndex])}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="q-true" />
                <Label htmlFor="q-true" className="font-normal text-base">True</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="q-false" />
                <Label htmlFor="q-false" className="font-normal text-base">False</Label>
              </div>
            </RadioGroup>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrentQuestionIndex(p => Math.max(0, p - 1))} disabled={currentQuestionIndex === 0}>
          Previous
        </Button>
        {currentQuestionIndex < quiz.items.length - 1 ? (
          <Button onClick={() => setCurrentQuestionIndex(p => p + 1)} disabled={selectedAnswers[currentQuestionIndex] === null}>
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={selectedAnswers[currentQuestionIndex] === null}>
            Submit
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
