
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import type { UserProgress } from '@/lib/types';
import { curriculum } from '@/content/curriculum';

interface ProgressContextType {
  progress: UserProgress | null;
  isLoaded: boolean;
  initializeProgress: (name: string, personalizedPath: string[], estimatedDuration: string) => void;
  completeLesson: (lessonId: string) => void;
  updateQuizScore: (quizId: string, score: number) => void;
  resetProgress: () => void;
  importProgress: (newProgress: UserProgress) => void;
  getLessonStatus: (lessonId: string) => 'locked' | 'unlocked' | 'completed';
  getLevelStatus: (levelId: string) => 'locked' | 'unlocked' | 'completed';
  updateDailyChecklist: (item: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'tradecraft-academy-progress';

const defaultProgress: UserProgress = {
  name: '',
  xp: 0,
  completedLessons: [],
  quizScores: {},
  badges: [],
  personalizedPath: [],
  estimatedDuration: '',
  createdAt: Date.now(),
  dailyChecklists: {},
  disciplineScore: 0,
};

// --- Badge Definitions ---
const BADGES = {
  RISK_MASTER_5: { id: 'risk-master-5', name: 'Risk Master (5 Days)', description: 'Completed checklists 5 days in a row.' },
  RULE_FOLLOWER_10: { id: 'rule-follower-10', name: 'Rule Follower (10 Days)', description: 'Completed checklists 10 days in a row.' },
  DISCIPLINE_GURU_30: { id: 'discipline-guru-30', name: 'Discipline Guru (30 Days)', description: 'Completed checklists 30 days in a row.' },
  MODULE_1_COMPLETE: { id: 'module-1-complete', name: 'Module 1 Complete', description: 'Mastered the Foundations.' },
  MODULE_2_COMPLETE: { id: 'module-2-complete', name: 'Module 2 Complete', description: 'Mastered Core Technicals.' },
  MODULE_3_COMPLETE: { id: 'module-3-complete', name: 'Module 3 Complete', description: 'Mastered Strategy Development.' },
  MODULE_4_COMPLETE: { id: 'module-4-complete', name: 'Module 4 Complete', description: 'Mastered Risk & Mindset.' },
  MODULE_5_COMPLETE: { id: 'module-5-complete', name: 'Module 5 Complete', description: 'Mastered Advanced Dynamics.' },
  MODULE_6_COMPLETE: { id: 'module-6-complete', name: 'Module 6 Complete', description: 'Became a Professional Trader.' },
};


export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const calculateDisciplineScore = (checklists: Record<string, string[]>): { score: number, streak: number } => {
    const dates = Object.keys(checklists).sort().reverse();
    if (dates.length === 0) return { score: 0, streak: 0 };
    
    let score = 0;
    let streak = 0;
    
    // Calculate total score
    for (const date of dates) {
        const items = checklists[date];
        score += items.length * 2; // Example scoring
    }
    
    // Calculate current streak
    let currentDate = new Date(dates[0]);
    for (let i = 0; i < dates.length; i++) {
        const checklistDate = new Date(dates[i]);
        const diff = (currentDate.getTime() - checklistDate.getTime()) / (1000 * 3600 * 24);
        if (diff === i) {
            streak++;
        } else {
            break;
        }
    }

    return { score, streak };
  };

  const checkAndAwardBadges = useCallback((currentProgress: UserProgress): UserProgress => {
      const { score, streak } = calculateDisciplineScore(currentProgress.dailyChecklists || {});
      const newBadges = [...currentProgress.badges];
      
      if (streak >= 5 && !newBadges.includes(BADGES.RISK_MASTER_5.id)) newBadges.push(BADGES.RISK_MASTER_5.id);
      if (streak >= 10 && !newBadges.includes(BADGES.RULE_FOLLOWER_10.id)) newBadges.push(BADGES.RULE_FOLLOWER_10.id);
      if (streak >= 30 && !newBadges.includes(BADGES.DISCIPLINE_GURU_30.id)) newBadges.push(BADGES.DISCIPLINE_GURU_30.id);

      curriculum.forEach(level => {
          const badgeId = `module-${level.id.split('-')[1]}-complete`;
          const bossQuizScore = currentProgress.quizScores[level.bossQuiz.id] || 0;
          if (bossQuizScore >= level.bossQuiz.passScore && !newBadges.includes(badgeId)) {
              newBadges.push(badgeId);
          }
      });
      
      return {
          ...currentProgress,
          disciplineScore: score,
          badges: newBadges
      };
  }, []);

  const saveProgress = useCallback((newProgress: UserProgress | null) => {
    try {
      if (newProgress) {
        const progressWithBadges = checkAndAwardBadges(newProgress);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progressWithBadges));
        setProgress(progressWithBadges);
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        setProgress(null);
      }
    } catch (error) {
      console.error("Failed to save progress to localStorage", error);
    }
  }, [checkAndAwardBadges]);

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      } else {
        setProgress(defaultProgress);
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
      setProgress(defaultProgress);
    } finally {
      setIsLoaded(true);
    }
  }, []);


  const initializeProgress = useCallback((name: string, personalizedPath: string[], estimatedDuration: string) => {
    const newProgress: UserProgress = {
      ...defaultProgress,
      name,
      personalizedPath,
      estimatedDuration,
      createdAt: Date.now(),
    };
    saveProgress(newProgress);
  }, [saveProgress]);

  const completeLesson = useCallback((lessonId: string) => {
    if (!progress) return;
    
    const quizScore = progress.quizScores[lessonId] || 0;
    const lesson = curriculum.flatMap(l => l.lessons).find(l => l.id === lessonId);
    if (!lesson || quizScore < lesson.quiz.passScore) return;

    if (progress.completedLessons.includes(lessonId)) return;

    const lessonXp = 100;
    const newProgress = {
      ...progress,
      xp: progress.xp + lessonXp,
      completedLessons: [...progress.completedLessons, lessonId],
    };
    saveProgress(newProgress);
  }, [progress, saveProgress]);

  const updateQuizScore = useCallback((quizId: string, score: number) => {
    if (!progress) return;
    
    const existingScore = progress.quizScores[quizId] || 0;
    if (score <= existingScore) return;

    const scoreXp = Math.round(score * 1.5);
    const newProgress = {
      ...progress,
      xp: progress.xp + scoreXp,
      quizScores: {
        ...progress.quizScores,
        [quizId]: score,
      },
    };
    
    const lesson = curriculum.flatMap(l => l.lessons).find(l => l.id === quizId);
    if (lesson && score >= lesson.quiz.passScore) {
       if (!newProgress.completedLessons.includes(quizId)) {
          newProgress.xp += 100;
          newProgress.completedLessons.push(quizId);
       }
    }

    saveProgress(newProgress);
  }, [progress, saveProgress]);

  const resetProgress = useCallback(() => {
    const newProgress: UserProgress = {...defaultProgress};
    saveProgress(newProgress);
  }, [saveProgress]);

  const importProgress = useCallback((newProgress: UserProgress) => {
    saveProgress(newProgress);
  }, [saveProgress]);
  
  const updateDailyChecklist = useCallback((item: string) => {
      if (!progress) return;
      const today = new Date().toISOString().split('T')[0];
      const todaysItems = progress.dailyChecklists?.[today] || [];
      
      let newItems;
      if (todaysItems.includes(item)) {
          newItems = todaysItems.filter(i => i !== item);
      } else {
          newItems = [...todaysItems, item];
      }
      
      const newProgress: UserProgress = {
          ...progress,
          dailyChecklists: {
              ...progress.dailyChecklists,
              [today]: newItems,
          }
      };
      saveProgress(newProgress);
  }, [progress, saveProgress]);

  const getLevelStatus = useCallback((levelId: string) => {
    if (!progress) return 'locked';
    const levelIndex = curriculum.findIndex(l => l.id === levelId);
    if (levelIndex === -1) return 'locked';

    const currentLevel = curriculum[levelIndex];
    const bossQuizScore = progress.quizScores[currentLevel.bossQuiz.id] || 0;
    if (bossQuizScore >= currentLevel.bossQuiz.passScore) {
      return 'completed';
    }

    if (levelIndex === 0) return 'unlocked';

    const prevLevel = curriculum[levelIndex - 1];
    const prevBossQuizScore = progress.quizScores[prevLevel.bossQuiz.id] || 0;
    if (prevBossQuizScore >= prevLevel.bossQuiz.passScore) {
      return 'unlocked';
    }

    return 'locked';
  }, [progress]);

  const getLessonStatus = useCallback((lessonId: string) => {
    if (!progress) return 'locked';
    
    const lesson = curriculum.flatMap(l => l.lessons).find(l => l.id === lessonId);
    if (!lesson) return 'locked';
    
    if (progress.completedLessons.includes(lessonId)) {
       const quizScore = progress.quizScores[lesson.quiz.id] || 0;
       if(quizScore >= lesson.quiz.passScore) {
           return 'completed';
       }
    }
    
    if (getLevelStatus(lesson.levelId) !== 'locked') {
        return 'unlocked';
    }

    return 'locked';
  }, [progress, getLevelStatus]);


  const value = {
    progress,
    isLoaded,
    initializeProgress,
    completeLesson,
    updateQuizScore,
    resetProgress,
    importProgress,
    getLessonStatus,
    getLevelStatus,
    updateDailyChecklist,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
