
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
  winRate: z.coerce.number().min(1, 'Win rate must be at least 1%').max(99, 'Win rate cannot exceed 99%'),
  avgWinLossRatio: z.coerce.number().positive('Ratio must be a positive number.'),
  riskPerTrade: z.coerce.number().min(0.1, "Risk must be at least 0.1%").max(100, "Risk cannot exceed 100%"),
  capitalAtRisk: z.coerce.number().min(1, "Must be at least 1%").max(100, "Cannot exceed 100%"),
});

type FormValues = z.infer<typeof formSchema>;

interface CalculationResult {
  riskOfRuin: number;
}

// Function to calculate Risk of Ruin using a standard formula
// RoR = ((1 - Edge) / (1 + Edge)) ^ CapitalUnits
// Edge = (WinRate * AvgWin) - (LossRate * AvgLoss)
function calculateRiskOfRuin(winRate: number, avgWinLossRatio: number, riskPerTrade: number, capitalAtRisk: number): number {
  const p = winRate / 100; // Probability of winning
  const l = 1 - p;         // Probability of losing
  const w = avgWinLossRatio; // Average win is W times the average loss
  const l_amount = 1; // We can normalize average loss to 1 unit
  const w_amount = w * l_amount;

  const edge = (p * w_amount) - (l * l_amount);

  if (edge <= 0) {
    return 100; // If there is no positive expectancy, ruin is certain.
  }
  
  const capitalUnits = capitalAtRisk / riskPerTrade;
  
  const riskOfRuin = Math.pow(((1 - edge) / (1 + edge)), capitalUnits);

  return Math.min(riskOfRuin * 100, 100);
}


export function RiskOfRuinCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      winRate: 50,
      avgWinLossRatio: 1.5,
      riskPerTrade: 2,
      capitalAtRisk: 20,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const riskOfRuin = calculateRiskOfRuin(data.winRate, data.avgWinLossRatio, data.riskPerTrade, data.capitalAtRisk);
    setResult({ riskOfRuin });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk of Ruin Calculator</CardTitle>
        <CardDescription>Estimate the probability of losing a specific percentage of your capital based on your trading system's parameters. This is a crucial metric for long-term survival.</CardDescription>
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
              name="avgWinLossRatio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Average Win / Average Loss Ratio</FormLabel>
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
                  <FormLabel>Risk per Trade (% of Capital)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="2" step="0.5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="capitalAtRisk"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Drawdown to Define Ruin (%)</FormLabel>
                  <FormControl>
                     <Input type="number" placeholder="20" step="1" {...field} />
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
                     <p className="text-lg">Your estimated risk of reaching a {form.getValues('capitalAtRisk')}% drawdown is <strong className="text-xl">{result.riskOfRuin.toFixed(2)}%</strong>.</p>
                    <p className="text-xs text-muted-foreground pt-2">
                      This calculation is a statistical estimate. A high percentage suggests your risk per trade may be too high for your system's edge. Consider reducing risk to improve your long-term survival odds.
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
