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
};

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const saveProgress = useCallback((newProgress: UserProgress | null) => {
    try {
      if (newProgress) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProgress));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
      setProgress(newProgress);
    } catch (error) {
      console.error("Failed to save progress to localStorage", error);
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
    saveProgress(newProgress);
  }, [progress, saveProgress]);

  const resetProgress = useCallback(() => {
    const newProgress: UserProgress = {...defaultProgress};
    saveProgress(newProgress);
  }, [saveProgress]);

  const importProgress = useCallback((newProgress: UserProgress) => {
    saveProgress(newProgress);
  }, [saveProgress]);

  const getLevelStatus = useCallback((levelId: string) => {
    if (!progress) return 'locked';
    const levelIndex = curriculum.findIndex(l => l.id === levelId);
    if (levelIndex === -1) return 'locked';

    const currentLevel = curriculum[levelIndex];
    if (currentLevel.lessons.every(l => progress.completedLessons.includes(l.id))) {
      const bossQuizScore = progress.quizScores[currentLevel.bossQuiz.id] || 0;
      if (bossQuizScore >= currentLevel.bossQuiz.passScore) {
          return 'completed';
      }
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
    if (progress.completedLessons.includes(lessonId)) {
      return 'completed';
    }
    
    const lessonLevelId = curriculum.flatMap(l => l.lessons).find(l => l.id === lessonId)?.levelId;
    if (!lessonLevelId) return 'locked';

    if (getLevelStatus(lessonLevelId) !== 'locked') {
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
    getLevelStatus
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
