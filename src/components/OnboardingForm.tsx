
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useProgress } from "@/context/ProgressContext";
import { personalizedStudyPath } from "@/ai/flows/personalized-study-path";
import { curriculumJSON } from "@/content/curriculum";
import { Loader2 } from "lucide-react";
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  skillLevel: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "You need to select a skill level.",
  }),
  timeCommitment: z.string().min(2, { message: "Please enter your time commitment." }),
});

export function OnboardingForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { initializeProgress } = useProgress();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      skillLevel: "beginner",
      timeCommitment: "30 minutes per day",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const result = await personalizedStudyPath({
        ...values,
        curriculum: curriculumJSON,
      });

      if (!result) {
        throw new Error("Failed to generate study path. Please try again.");
      }
      
      initializeProgress(values.name, result.studyPath, result.estimatedDuration);
      
      toast({
        title: "Welcome to the Academy!",
        description: "Your personalized study path has been created.",
      });

      router.push("/");
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: error instanceof Error ? error.message : "There was a problem with your request.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 animate-float">
             <Image src="/images/illustrations/hero.svg" alt="Trading illustration" width={200} height={150} className="w-48 h-auto" />
          </div>
          <CardTitle className="text-3xl font-bold">Welcome to Tradecraft Academy</CardTitle>
          <CardDescription className="font-body text-lg">
            Learning to trade isn’t luck—it’s <strong>practice, rules, and patience.</strong> Let’s begin.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What should we call you?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Alex" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="skillLevel"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>What's your current skill level?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="beginner" />
                          </FormControl>
                          <FormLabel className="font-normal">Beginner (Just starting out)</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="intermediate" />
                          </FormControl>
                          <FormLabel className="font-normal">Intermediate (Know the basics)</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="advanced" />
                          </FormControl>
                          <FormLabel className="font-normal">Advanced (Experienced trader)</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="timeCommitment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How much time can you commit daily?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 1 hour per day" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Your Path...
                  </>
                ) : (
                  "Start Learning"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
