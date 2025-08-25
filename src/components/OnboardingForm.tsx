
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useProgress } from "@/context/ProgressContext";
import { personalizedStudyPath } from "@/ai/flows/personalized-study-path";
import { curriculumJSON } from "@/content/curriculum";
import { Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { Logo } from "./Logo";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const nameSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
});

const skillSchema = z.object({
  skillLevel: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "You need to select a skill level.",
  }),
});

const timeSchema = z.object({
  timeCommitment: z.string().min(2, { message: "Please enter your time commitment." }),
});

const formSchemas = [nameSchema, skillSchema, timeSchema];

export function OnboardingForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { initializeProgress } = useProgress();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchemas[currentStep]),
    defaultValues: {
      name: "",
      skillLevel: "beginner",
      timeCommitment: "30 minutes per day",
    },
  });

  const { trigger, getValues } = form;

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      if (currentStep < formSchemas.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  async function onSubmit(values: FieldValues) {
    setIsLoading(true);
    const allValues = getValues();
    try {
      const result = await personalizedStudyPath({
        ...allValues,
        curriculum: curriculumJSON,
      });

      if (!result) {
        throw new Error("Failed to generate study path. Please try again.");
      }
      
      initializeProgress(allValues.name, result.studyPath, result.estimatedDuration);
      
      toast({
        title: `Welcome, ${allValues.name}!`,
        description: "Your personalized study path is ready.",
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
  
  const progressValue = ((currentStep + 1) / formSchemas.length) * 100;
  
  const variants = {
    hidden: { opacity: 0, x: 50 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4 relative overflow-hidden">
       <div className="absolute inset-0 bg-grid-pattern opacity-5" />
       <Card className="w-full max-w-xl p-2 sm:p-6 bg-card/80 backdrop-blur-sm border-0 shadow-2xl shadow-primary/10">
          <CardHeader>
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <Logo className="w-12 h-12 text-primary" />
                   <CardTitle className="text-xl font-bold tracking-tighter">Tradecraft Academy Setup</CardTitle>
                </div>
                <div className="text-sm text-muted-foreground">
                    Step {currentStep + 1} of {formSchemas.length}
                </div>
             </div>
            <Progress value={progressValue} className="h-2 mt-4" />
        </CardHeader>
        <CardContent className="min-h-[250px] flex items-center">
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
               <AnimatePresence mode="wait">
                  <motion.div
                      key={currentStep}
                      variants={variants}
                      initial="hidden"
                      animate="enter"
                      exit="exit"
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                  >
                    {currentStep === 0 && (
                       <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-2xl font-semibold">What should we call you?</FormLabel>
                            <FormControl className="mt-4">
                              <Input placeholder="e.g., Alex" {...field} className="h-12 text-lg" />
                            </FormControl>
                            <FormMessage className="mt-2" />
                          </FormItem>
                        )}
                      />
                    )}
                    {currentStep === 1 && (
                      <FormField
                        control={form.control}
                        name="skillLevel"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-2xl font-semibold">What's your current skill level?</FormLabel>
                            <FormControl className="mt-4">
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col gap-4 pt-2"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0 p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                                  <FormControl>
                                    <RadioGroupItem value="beginner" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-base">Beginner (Just starting out)</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                                  <FormControl>
                                    <RadioGroupItem value="intermediate" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-base">Intermediate (Know the basics)</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                                  <FormControl>
                                    <RadioGroupItem value="advanced" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-base">Advanced (Experienced trader)</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                     {currentStep === 2 && (
                        <FormField
                            control={form.control}
                            name="timeCommitment"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-2xl font-semibold">How much time can you commit daily?</FormLabel>
                                <FormControl className="mt-4">
                                <Input placeholder="e.g., 1 hour per day" {...field} className="h-12 text-lg" />
                                </FormControl>
                                <FormMessage className="mt-2" />
                            </FormItem>
                            )}
                        />
                    )}
                 </motion.div>
               </AnimatePresence>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                <ArrowLeft className="mr-2" />
                Back
            </Button>
            {currentStep < formSchemas.length - 1 ? (
                <Button onClick={nextStep}>
                    Next
                    <ArrowRight className="ml-2" />
                </Button>
            ) : (
                <Button type="submit" onClick={form.handleSubmit(onSubmit)} disabled={isLoading}>
                    {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Your Path...
                    </>
                    ) : (
                    "Start Learning"
                    )}
                </Button>
            )}
        </CardFooter>
       </Card>
      <style jsx global>{`
        .bg-grid-pattern {
            background-image: linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, hsl(var(--background)) 1px);
            background-size: 2rem 2rem;
        }
      `}</style>
    </div>
  );
}
