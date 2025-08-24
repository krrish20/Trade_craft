
"use client";

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTradePlanner } from '@/context/TradePlannerContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2, X } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from './ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ChecklistGuide } from './ChecklistGuide';
import { preTradeChecklist, postTradeChecklist } from '@/content/resources';
import { Separator } from './ui/separator';

const conditionSchema = z.object({
  value: z.string().min(1, 'Condition cannot be empty'),
});

const formSchema = z.object({
  name: z.string().min(3, 'Setup name must be at least 3 characters'),
  description: z.string().optional(),
  conditions: z.array(conditionSchema).min(1, 'You must have at least one condition'),
});

type FormValues = z.infer<typeof formSchema>;

export function TradePlannerClient() {
  const { setups, addSetup, deleteSetup } = useTradePlanner();
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      conditions: [{ value: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'conditions',
  });

  const onSubmit = (data: FormValues) => {
    addSetup({ id: Date.now().toString(), ...data });
    toast({ title: "Success", description: "New trade setup has been saved." });
    form.reset();
    setIsAdding(false);
  };

  return (
    <div className="space-y-6">
      {!isAdding ? (
        <div className="flex justify-end">
            <Button onClick={() => setIsAdding(true)}>
                <PlusCircle className="mr-2" />
                Add New Setup
            </Button>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Create New Trade Setup</CardTitle>
            <CardDescription>Define the specific conditions that must be met to enter a trade.</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Setup Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Bull Flag Breakout" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., A continuation pattern in a strong uptrend." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <FormLabel>Entry Conditions</FormLabel>
                  <div className="space-y-2 mt-2">
                    {fields.map((field, index) => (
                      <div key={field.id} className="flex items-center gap-2">
                        <FormField
                          control={form.control}
                          name={`conditions.${index}.value`}
                          render={({ field }) => (
                             <FormItem className="flex-1">
                                <FormControl>
                                    <Input placeholder={`Condition ${index + 1}`} {...field} />
                                </FormControl>
                               <FormMessage />
                             </FormItem>
                          )}
                        />
                        <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)} disabled={fields.length <= 1}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ value: '' })}>
                    <PlusCircle className="mr-2" />
                    Add Condition
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button type="button" variant="ghost" onClick={() => { form.reset(); setIsAdding(false); }}>Cancel</Button>
                <Button type="submit">Save Setup</Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      )}

      <Card>
        <CardHeader>
            <CardTitle>My Trading Playbook</CardTitle>
            <CardDescription>Your personal library of high-probability trade setups.</CardDescription>
        </CardHeader>
        <CardContent>
            {setups.length === 0 ? (
                <p className="text-muted-foreground text-center">You haven't created any trade setups yet. Click "Add New Setup" to build your playbook.</p>
            ) : (
                <Accordion type="single" collapsible className="w-full">
                    {setups.map(setup => (
                        <AccordionItem key={setup.id} value={setup.id}>
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                {setup.name}
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                {setup.description && <p className="text-muted-foreground font-body italic">{setup.description}</p>}
                                <div className="space-y-2 p-4 border rounded-lg">
                                    <h4 className="font-medium">Pre-Trade Checklist:</h4>
                                    {setup.conditions.map((condition, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Checkbox id={`${setup.id}-${index}`} />
                                            <label htmlFor={`${setup.id}-${index}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                {condition.value}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end">
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                          <Button variant="destructive" size="sm"><Trash2 className="mr-2" /> Delete Setup</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                          <AlertDialogHeader>
                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                              This will permanently delete the "{setup.name}" trade setup. This action cannot be undone.
                                            </AlertDialogDescription>
                                          </AlertDialogHeader>
                                          <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => deleteSetup(setup.id)}>Delete</AlertDialogAction>
                                          </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </CardContent>
      </Card>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Daily Checklists</CardTitle>
          <CardDescription>Your daily ritual for disciplined trading. Complete before and after your session.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChecklistGuide preTrade={preTradeChecklist} postTrade={postTradeChecklist} />
        </CardContent>
      </Card>
    </div>
  );
}
