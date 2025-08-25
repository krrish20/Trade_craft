
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
import { Separator } from './ui/separator';

const conditionSchema = z.object({
  value: z.string().min(1, 'Condition cannot be empty'),
});

const setupFormSchema = z.object({
  name: z.string().min(3, 'Setup name must be at least 3 characters'),
  description: z.string().optional(),
  conditions: z.array(conditionSchema).min(1, 'You must have at least one condition'),
});

const checklistFormSchema = z.object({
    newItem: z.string().min(3, "Checklist item must be at least 3 characters."),
});

type SetupFormValues = z.infer<typeof setupFormSchema>;
type ChecklistFormValues = z.infer<typeof checklistFormSchema>;


export function TradePlannerClient() {
  const { setups, addSetup, deleteSetup, preTradeChecklist, postTradeChecklist, addChecklistItem, deleteChecklistItem } = useTradePlanner();
  const [isAddingSetup, setIsAddingSetup] = useState(false);
  const { toast } = useToast();

  const setupForm = useForm<SetupFormValues>({
    resolver: zodResolver(setupFormSchema),
    defaultValues: {
      name: '',
      description: '',
      conditions: [{ value: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: setupForm.control,
    name: 'conditions',
  });
  
  const preTradeForm = useForm<ChecklistFormValues>({ resolver: zodResolver(checklistFormSchema), defaultValues: { newItem: '' }});
  const postTradeForm = useForm<ChecklistFormValues>({ resolver: zodResolver(checklistFormSchema), defaultValues: { newItem: '' }});

  const onSetupSubmit = (data: SetupFormValues) => {
    addSetup({ id: Date.now().toString(), ...data });
    toast({ title: "Success", description: "New trade setup has been saved." });
    setupForm.reset();
    setIsAddingSetup(false);
  };

  const onAddChecklistItem = (data: ChecklistFormValues, listKey: 'preTrade' | 'postTrade') => {
    addChecklistItem({ id: `custom-${Date.now()}`, label: data.newItem, isDefault: false }, listKey);
    if(listKey === 'preTrade') {
        preTradeForm.reset();
    } else {
        postTradeForm.reset();
    }
     toast({ title: "Success", description: "Checklist item added." });
  }

  return (
    <div className="space-y-6">
      {!isAddingSetup ? (
        <div className="flex justify-end">
            <Button onClick={() => setIsAddingSetup(true)}>
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
          <Form {...setupForm}>
            <form onSubmit={setupForm.handleSubmit(onSetupSubmit)}>
              <CardContent className="space-y-4">
                <FormField
                  control={setupForm.control}
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
                  control={setupForm.control}
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
                          control={setupForm.control}
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
                <Button type="button" variant="ghost" onClick={() => { setupForm.reset(); setIsAddingSetup(false); }}>Cancel</Button>
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
                                    <h4 className="font-medium">Entry Conditions:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {setup.conditions.map((condition, index) => (
                                            <li key={index}>{condition.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex justify-end">
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                          <Button variant="destructive" size="sm"><Trash2 className="mr-2 h-4 w-4" /> Delete Setup</Button>
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
                                            <AlertDialogAction onClick={() => deleteSetup(setup.id)}>Continue</AlertDialogAction>
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
      
      <div className="grid md:grid-cols-2 gap-6">
        <ChecklistGuide
            title="Pre-Trade Checklist"
            description="Your final check before entering a trade."
            items={preTradeChecklist}
            listKey="preTrade"
            onDeleteItem={deleteChecklistItem}
        >
             <Form {...preTradeForm}>
                <form onSubmit={preTradeForm.handleSubmit((data) => onAddChecklistItem(data, 'preTrade'))} className="flex gap-2 pt-4">
                    <FormField
                    control={preTradeForm.control}
                    name="newItem"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormControl>
                                <Input placeholder="Add custom item..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Add</Button>
                </form>
             </Form>
        </ChecklistGuide>
        <ChecklistGuide
            title="Post-Trade Checklist"
            description="Review your execution after every trade."
            items={postTradeChecklist}
            listKey="postTrade"
            onDeleteItem={deleteChecklistItem}
        >
             <Form {...postTradeForm}>
                <form onSubmit={postTradeForm.handleSubmit((data) => onAddChecklistItem(data, 'postTrade'))} className="flex gap-2 pt-4">
                    <FormField
                    control={postTradeForm.control}
                    name="newItem"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormControl>
                                <Input placeholder="Add custom item..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Add</Button>
                </form>
             </Form>
        </ChecklistGuide>
      </div>
    </div>
  );
}
