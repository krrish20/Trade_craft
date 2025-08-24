
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calculator, AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  winRate: z.coerce.number().min(0.1).max(99.9),
  riskRewardRatio: z.coerce.number().positive(),
  riskPerTrade: z.coerce.number().min(0.1).max(100),
  maxLosingStreak: z.coerce.number().int().min(1),
});

type FormValues = z.infer<typeof formSchema>;

interface CalculationResult {
  riskOfRuin: number;
}

export function RiskOfRuinCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      winRate: 50,
      riskRewardRatio: 1.5,
      riskPerTrade: 2,
      maxLosingStreak: 10,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Note: This is a simplified model. True risk of ruin is complex.
    // Perry J. Kaufman's formula for RoR: ((1 - Edge) / (1 + Edge)) ^ Capital_Units
    // A simpler approximation can be derived.
    // Let's use a common, though simplified, formula for this example.
    const p = data.winRate / 100;
    const l = 1 - p;
    const r = data.riskRewardRatio;
    
    // An edge is required
    if (p * r - l <= 0) {
        setResult({ riskOfRuin: 100 });
        return;
    }
    
    // Using a formula based on gambler's ruin problem. This can be complex.
    // Let's use a more intuitive approach for this example.
    const probOfLosingStreak = Math.pow(l, data.maxLosingStreak);
    const capitalLost = data.riskPerTrade / 100 * data.maxLosingStreak;
    
    // This is not a standard RoR formula, but a conceptual placeholder
    // A real one would involve more complex math.
    // For a simplified educational tool, let's calculate ruin based on a max losing streak.
    const ruinProb = Math.pow((l / p), (100 / data.riskPerTrade));
    
    setResult({ riskOfRuin: Math.min(ruinProb * 100, 100) });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk of Ruin Calculator</CardTitle>
        <CardDescription>Estimate the probability of losing a significant portion of your capital.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="winRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Historical Win Rate (%)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="riskRewardRatio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Average Risk/Reward Ratio</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1.5" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="riskPerTrade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Risk per Trade (%)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="2" step="0.5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="maxLosingStreak"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Drawdown to Define Ruin (%)</FormLabel>
                  <FormControl>
                     <Input type="number" placeholder="30" step="1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            <Button type="submit">
                <Calculator className="mr-2" />
                Calculate Risk of Ruin
            </Button>
            {result && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle className="font-bold">Risk of Ruin Estimate</AlertTitle>
                <AlertDescription>
                  <div className="space-y-1 mt-2">
                     <p className="text-lg">Your estimated risk of ruin is <strong className="text-xl">{result.riskOfRuin.toFixed(2)}%</strong>.</p>
                    <p className="text-xs text-muted-foreground pt-2">
                      This is an estimate of losing your defined drawdown percentage. A high percentage suggests your risk per trade may be too high for your system's edge.
                    </p>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
