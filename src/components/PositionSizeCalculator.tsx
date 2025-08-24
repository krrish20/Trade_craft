
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
import { Calculator, ShieldCheck } from 'lucide-react';

const formSchema = z.object({
  accountCapital: z.coerce.number().positive({ message: "Must be a positive number." }),
  riskPercentage: z.coerce.number().min(0.1, { message: "Must be at least 0.1"}).max(100, { message: "Must be between 0.1 and 100." }),
  entryPrice: z.coerce.number().positive({ message: "Must be a positive number." }),
  stopLossPrice: z.coerce.number().positive({ message: "Must be a positive number." }),
}).refine(data => data.entryPrice > data.stopLossPrice, {
    message: "Entry price must be higher than stop loss for a long trade.",
    path: ["stopLossPrice"],
});

type FormValues = z.infer<typeof formSchema>;

interface CalculationResult {
  riskAmount: number;
  positionSize: number;
}

export function PositionSizeCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountCapital: 10000,
      riskPercentage: 1,
      entryPrice: undefined,
      stopLossPrice: undefined,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const riskAmount = data.accountCapital * (data.riskPercentage / 100);
    const riskPerShare = data.entryPrice - data.stopLossPrice;
    
    if (riskPerShare <= 0) {
        // This case is handled by the schema refine, but as a safeguard:
        form.setError("stopLossPrice", { type: "custom", message: "Stop loss must be below entry price." });
        setResult(null);
        return;
    }

    const positionSize = riskAmount / riskPerShare;
    
    setResult({ riskAmount, positionSize });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Position Size Calculator</CardTitle>
        <CardDescription>Calculate your position size based on your account capital and risk tolerance. This calculator assumes a long position.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="accountCapital"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Capital ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="10000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="riskPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Risk per Trade (%)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1" step="0.5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="entryPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entry Price ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="150.00" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stopLossPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stop Loss Price ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="148.50" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            <Button type="submit">
                <Calculator className="mr-2" />
                Calculate
            </Button>
            {result && (
              <Alert>
                <ShieldCheck className="h-4 w-4" />
                <AlertTitle className="font-bold">Calculation Result</AlertTitle>
                <AlertDescription>
                  <div className="space-y-1 mt-2">
                    <p><strong>Max Risk per Trade:</strong> ${result.riskAmount.toFixed(2)}</p>
                    <p><strong>Position Size (Shares/Units):</strong> {result.positionSize.toFixed(4)}</p>
                    <p className="text-xs text-muted-foreground pt-2">This is not financial advice. The calculation does not account for slippage or commissions.</p>
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
