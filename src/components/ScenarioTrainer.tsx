
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { scenarios } from '@/content/scenarios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ScenarioChoice } from '@/lib/types';

export function ScenarioTrainer() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<ScenarioChoice | null>(null);
  const [showOutcome, setShowOutcome] = useState(false);

  const scenario = scenarios[currentScenarioIndex];

  const handleSelectChoice = (choice: ScenarioChoice) => {
    setSelectedChoice(choice);
    setShowOutcome(true);
  };

  const goToNext = () => {
    setCurrentScenarioIndex((prev) => (prev + 1) % scenarios.length);
    resetState();
  };

  const goToPrev = () => {
    setCurrentScenarioIndex((prev) => (prev - 1 + scenarios.length) % scenarios.length);
    resetState();
  };
  
  const resetState = () => {
    setSelectedChoice(null);
    setShowOutcome(false);
  }

  const outcome = showOutcome ? scenario.outcomes[selectedChoice!] : null;

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
             <CardTitle>{scenario.title}</CardTitle>
             <CardDescription>Scenario {currentScenarioIndex + 1} of {scenarios.length}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={goToPrev}><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" onClick={goToNext}><ChevronRight className="h-4 w-4" /></Button>
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
                <div className="flex justify-center gap-4">
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
