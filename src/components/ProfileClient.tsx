
"use client";

import { useProgress } from '@/context/ProgressContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
} from "@/components/ui/alert-dialog"
import { useToast } from '@/hooks/use-toast';
import { Download, Upload, Trash2, Award, Star, TrendingUp, ShieldCheck } from 'lucide-react';
import { Certificate } from './Certificate';
import { curriculum } from '@/content/curriculum';
import { ConsistencyChart } from './ConsistencyChart';

export function ProfileClient() {
  const { progress, resetProgress, importProgress } = useProgress();
  const { toast } = useToast();

  if (!progress) {
    return null;
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(progress, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `tradecraft-progress-${progress.name}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (!event.target.files) return;
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = e => {
      try {
        const importedProgress = JSON.parse(e.target?.result as string);
        // Basic validation
        if (importedProgress.name && importedProgress.xp !== undefined) {
          importProgress(importedProgress);
          toast({ title: "Success", description: "Progress imported successfully." });
        } else {
          throw new Error("Invalid progress file format.");
        }
      } catch (error) {
        toast({ variant: "destructive", title: "Error", description: "Failed to import progress file. It might be corrupted or in the wrong format." });
      }
    };
  };
  
  const totalLessons = curriculum.flatMap(l => l.lessons).length;
  const isCompleted = curriculum.every(level => {
      const bossQuizScore = progress.quizScores[level.bossQuiz.id] || 0;
      return bossQuizScore >= level.bossQuiz.passScore;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{progress.name}'s Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-muted rounded-lg text-center flex flex-col items-center justify-center">
                <Star className="h-8 w-8 text-primary mb-2" />
                <p className="text-2xl font-bold">{progress.xp}</p>
                <p className="text-sm text-muted-foreground">XP</p>
            </div>
            <div className="p-4 bg-muted rounded-lg text-center flex flex-col items-center justify-center">
                <TrendingUp className="mx-auto h-8 w-8 text-primary mb-2" />
                <p className="text-2xl font-bold">{progress.completedLessons.length}/{totalLessons}</p>
                <p className="text-sm text-muted-foreground">Lessons</p>
            </div>
            <div className="p-4 bg-muted rounded-lg text-center flex flex-col items-center justify-center">
                <ShieldCheck className="mx-auto h-8 w-8 text-primary mb-2" />
                <p className="text-2xl font-bold">{progress.disciplineScore || 0}</p>
                <p className="text-sm text-muted-foreground">Discipline</p>
            </div>
             <div className="p-4 bg-muted rounded-lg text-center flex flex-col items-center justify-center">
                <Award className="mx-auto h-8 w-8 text-primary mb-2" />
                <p className="text-2xl font-bold">{progress.badges.length}</p>
                <p className="text-sm text-muted-foreground">Badges</p>
            </div>
        </CardContent>
      </Card>
      
      <ConsistencyChart />
      
      {isCompleted ? (
        <Certificate name={progress.name} date={new Date(progress.createdAt)} />
      ) : (
         <Card>
            <CardHeader>
                <CardTitle>Certificate of Completion</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Complete all lessons and pass all boss quizzes to unlock your certificate.</p>
            </CardContent>
         </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Account Management</CardTitle>
          <CardDescription>Manage your progress data.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
            <Button onClick={handleExport} variant="outline"><Download className="mr-2 h-4 w-4" /> Export Progress</Button>
            <Button asChild variant="outline">
                <label htmlFor="import-file" className="cursor-pointer flex items-center justify-center">
                    <Upload className="mr-2 h-4 w-4" /> Import Progress
                    <input type="file" id="import-file" accept=".json" className="sr-only" onChange={handleImport} />
                </label>
            </Button>
        </CardContent>
        <CardFooter>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" /> Reset Progress</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete all your progress. We recommend exporting your data first.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => {
                        resetProgress();
                        toast({ title: "Progress Reset", description: "Your journey starts anew!" });
                    }}>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
}
