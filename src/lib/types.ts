

export interface QuizItem {
  id: string;
  type: 'mcq' | 'truefalse';
  prompt: string;
  choices?: string[];
  answer: number | boolean;
  explain: string;
}

export interface LessonSection {
  type: 'text' | 'image' | 'interactive' | 'cheatsheet';
  tldr?: string;
  body?: string;
  src?: string;
  alt?: string;
  'data-ai-hint'?: string;
  component?: string;
  props?: Record<string, any>;
  items?: string[];
}

export interface Lesson {
  id: string;
  levelId: string;
  title: string;
  time: number; // estimated minutes
  objectives: string[];
  sections: LessonSection[];
  quiz: {
    id: string;
    attempts: number;
    passScore: number;
    items: QuizItem[];
  };
}

export interface Level {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  bossQuiz: {
    id: string;
    passScore: number;
    items: QuizItem[];
  };
}

export type Curriculum = Level[];

export interface UserProgress {
  name: string;
  xp: number;
  completedLessons: string[]; // lesson ids
  quizScores: Record<string, number>; // quiz id (lesson or boss) -> best score
  badges: string[];
  personalizedPath: string[]; // lesson ids
  estimatedDuration: string;
  createdAt: number;
  dailyChecklists?: Record<string, string[]>; // e.g. { "2024-07-31": ["item1", "item2"] }
  disciplineScore?: number;
}


// --- Scenario Trainer Types ---
export type ScenarioChoice = 'long' | 'short' | 'wait';

export interface ScenarioOutcome {
    isCorrect: boolean;
    title: string;
    explanation: string;
}

export interface Scenario {
    id: string;
    title: string;
    setup: string;
    image: {
        src: string;
        alt: string;
        'data-ai-hint': string;
    };
    decisionPoint: string;
    outcomes: {
        [key in ScenarioChoice]: ScenarioOutcome;
    };
}


// --- Trade Planner Types ---
export interface TradeSetup {
    id: string;
    name: string;
    description?: string;
    conditions: { value: string }[];
}

export interface ChecklistItem {
    id: string;
    label: string;
    isDefault: boolean;
}
