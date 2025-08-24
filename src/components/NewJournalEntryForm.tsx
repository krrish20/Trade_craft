
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';
import type { Trade } from '@/app/journal/page';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const formSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  ticker: z.string().min(1, 'Ticker is required').toUpperCase(),
  direction: z.enum(['Long', 'Short']),
  outcome: z.string().min(1, 'Outcome is required (e.g., +2R, -1R)'),
  notes: z.string().min(10, 'Please provide a brief rationale for your trade.'),
});

type FormValues = z.infer<typeof formSchema>;

interface NewJournalEntryFormProps {
  onSubmit: (data: Omit<Trade, 'id'>) => void;
  onFinished: () => void;
}

export function NewJournalEntryForm({ onSubmit, onFinished }: NewJournalEntryFormProps) {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      ticker: '',
      direction: 'Long',
      notes: '',
    },
  });

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
    toast({
      title: 'Success',
      description: 'New trade entry has been added.',
    });
    onFinished();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ticker"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ticker</FormLabel>
              <FormControl>
                <Input placeholder="e.g., AAPL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="direction"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Direction</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Long" />
                    </FormControl>
                    <FormLabel className="font-normal">Long</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Short" />
                    </FormControl>
                    <FormLabel className="font-normal">Short</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="outcome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Outcome (R-Multiple)</FormLabel>
              <FormControl>
                <Input placeholder="+2.5R or -1R" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trade Rationale / Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Why am I taking this trade? What is my edge? e.g., 'Broke out of bull flag on high volume, confluence with 20 EMA.'" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Add Entry
        </Button>
      </form>
    </Form>
  );
}
