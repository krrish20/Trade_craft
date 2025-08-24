"use client";

import { useState, useEffect } from 'react';
import { analyzeJournal, type JournalAnalysisOutput } from '@/ai/flows/journal-analysis-flow';
import type { Trade } from '@/app/journal/page';
import { Button } from './ui/button';
import { Loader2, Lightbulb, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface JournalAnalyticsProps {
  trades: Trade[];
}

export function JournalAnalytics({ trades }: JournalAnalyticsProps) {
  const [analysis, setAnalysis] = useState<JournalAnalysisOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAnalysis = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await analyzeJournal({ trades });
        setAnalysis(result);
      } catch (e: any) {
        setError(e.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };
    getAnalysis();
  }, [trades]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Your AI coach is analyzing your trades...</p>
      </div>
    );
  }

  if (error) {
    return (
       <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Analysis Failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-2">Performance Summary</h3>
        <p className="text-muted-foreground font-body">{analysis.performanceSummary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <h4 className="font-semibold flex items-center gap-2 text-green-700"><TrendingUp className="h-5 w-5" />What's Working Well</h4>
          <ul className="list-disc pl-5 space-y-1 font-body text-sm">
            {analysis.positivePatterns.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div className="space-y-2 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
          <h4 className="font-semibold flex items-center gap-2 text-red-700"><TrendingDown className="h-5 w-5" />Areas for Improvement</h4>
          <ul className="list-disc pl-5 space-y-1 font-body text-sm">
            {analysis.negativePatterns.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
       <div>
         <h4 className="font-semibold flex items-center gap-2 mb-2"><Lightbulb className="h-5 w-5 text-yellow-500" />Actionable Suggestions</h4>
         <ul className="list-disc pl-5 space-y-1 font-body text-sm">
            {analysis.actionableSuggestions.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
      </div>
    </div>
  );
}
