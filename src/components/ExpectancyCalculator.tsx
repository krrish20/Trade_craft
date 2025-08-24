
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
import { Calculator, Target } from 'lucide-react';

const formSchema = z.object({
  winRate: z.coerce.number().min(0).max(100, { message: "Must be between 0 and 100." }),
  avgWin: z.coerce.number().positive({ message: "Must be positive." }),
  lossRate: z.coerce.number().min(0).max(100, { message: "Must be between 0 and 100." }),
  avgLoss: z.coerce.number().positive({ message: "Must be positive." }),
}).refine(data => data.winRate + data.lossRate === 100, {
    message: "Win Rate and Loss Rate must add up to 100.",
    path: ["lossRate"],
});

type FormValues = z.infer<typeof formSchema>;

interface CalculationResult {
  expectancy: number;
}

export function ExpectancyCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      winRate: 60,
      avgWin: 300,
      lossRate: 40,
      avgLoss: 150
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const expectancy = (data.winRate / 100 * data.avgWin) - (data.lossRate / 100 * data.avgLoss);
    setResult({ expectancy });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expectancy Calculator</CardTitle>
        <CardDescription>Determine the long-term profitability of your trading system by calculating its expectancy.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="winRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Win Rate (%)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="60" {...field} onChange={(e) => {
                        const winRate = parseFloat(e.target.value);
                        if (!isNaN(winRate) && winRate >= 0 && winRate <= 100) {
                            form.setValue('lossRate', 100 - winRate);
                        }
                        field.onChange(e);
                    }}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="avgWin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Average Win ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="300" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="lossRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loss Rate (%)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="40" {...field} onChange={(e) => {
                        const lossRate = parseFloat(e.target.value);
                        if (!isNaN(lossRate) && lossRate >= 0 && lossRate <= 100) {
                            form.setValue('winRate', 100 - lossRate);
                        }
                        field.onChange(e);
                    }}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="avgLoss"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Average Loss ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="150" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            <Button type="submit">
                <Calculator className="mr-2" />
                Calculate Expectancy
            </Button>
            {result && (
              <Alert className={result.expectancy > 0 ? 'border-green-500' : 'border-destructive'}>
                <Target className="h-4 w-4" />
                <AlertTitle className="font-bold">System Expectancy</AlertTitle>
                <AlertDescription>
                  <div className="space-y-1 mt-2">
                    <p className="text-lg">Your system has an expectancy of <strong className={result.expectancy > 0 ? 'text-green-600' : 'text-destructive'}>${result.expectancy.toFixed(2)}</strong> per trade.</p>
                    <p className="text-xs text-muted-foreground pt-2">
                      {result.expectancy > 0 ? 'This suggests a profitable system over the long term. Keep executing your edge!' : 'This suggests a losing system. You should refine your strategy before trading real money.'}
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
