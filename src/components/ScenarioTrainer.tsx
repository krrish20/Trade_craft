
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { scenarios } from '@/content/scenarios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, RefreshCcw } from 'lucide-react';
import type { ScenarioChoice } from '@/lib/types';

// Function to shuffle an array
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

export function ScenarioTrainer() {
  const [shuffledScenarios, setShuffledScenarios] = useState<typeof scenarios>([]);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<ScenarioChoice | null>(null);
  const [showOutcome, setShowOutcome] = useState(false);
  const [sessionCount, setSessionCount] = useState(1);

  useEffect(() => {
    setShuffledScenarios(shuffleArray([...scenarios]));
  }, []);

  if (shuffledScenarios.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p>Loading scenarios...</p>
        </CardContent>
      </Card>
    );
  }

  const scenario = shuffledScenarios[currentScenarioIndex];

  const handleSelectChoice = (choice: ScenarioChoice) => {
    setSelectedChoice(choice);
    setShowOutcome(true);
  };

  const goToNext = () => {
    if (currentScenarioIndex < shuffledScenarios.length - 1) {
      setCurrentScenarioIndex((prev) => prev + 1);
    } else {
      // End of the shuffled list, reshuffle for a new session
      setShuffledScenarios(shuffleArray([...scenarios]));
      setCurrentScenarioIndex(0);
    }
    resetState();
  };
  
  const resetState = () => {
    setSessionCount(prev => prev + 1);
    setSelectedChoice(null);
    setShowOutcome(false);
  }

  const outcome = showOutcome ? scenario.outcomes[selectedChoice!] : null;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="space-y-1">
             <CardTitle>{scenario.title}</CardTitle>
             <CardDescription>Scenario {sessionCount}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={goToNext}><RefreshCcw className="h-4 w-4" /></Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-muted rounded-lg font-body">
            <p className="font-semibold">Setup:</p>
            <p>{scenario.setup}</p>
        </div>

        <div className="my-4">
          <Image
            src={scenario.image.src}
            alt={scenario.image.alt}
            width={800}
            height={400}
            className="rounded-lg border object-cover w-full"
            data-ai-hint={scenario.image['data-ai-hint']}
          />
        </div>
        
        {!showOutcome && (
            <div className="text-center space-y-4">
                <p className="text-lg font-semibold">{scenario.decisionPoint}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={() => handleSelectChoice('long')} variant="default" className="bg-green-600 hover:bg-green-700">Enter Long</Button>
                    <Button onClick={() => handleSelectChoice('short')} variant="destructive">Enter Short</Button>
                    <Button onClick={() => handleSelectChoice('wait')} variant="secondary">Stay Out / Wait</Button>
                </div>
            </div>
        )}

        {showOutcome && outcome && (
            <div className="space-y-4">
                <Alert className={cn(
                    outcome.isCorrect ? 'border-green-500 bg-green-500/10' : 'border-destructive bg-red-500/10'
                )}>
                    {outcome.isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                    <AlertTitle>
                        {`Your Choice: ${selectedChoice?.charAt(0).toUpperCase() + selectedChoice!.slice(1)} - ${outcome.isCorrect ? "Correct Analysis" : "Incorrect Analysis"}`}
                    </AlertTitle>
                    <AlertDescription className="space-y-2 mt-2">
                        <p className="font-semibold">{outcome.title}</p>
                        <p className="font-body">{outcome.explanation}</p>
                    </AlertDescription>
                </Alert>
                <div className="text-center">
                    <Button onClick={goToNext}>Next Scenario</Button>
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
