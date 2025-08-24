'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/personalized-study-path.ts';
import '@/ai/flows/journal-analysis-flow.ts';
