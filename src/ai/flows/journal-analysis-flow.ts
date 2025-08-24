'use server';

/**
 * @fileOverview This file defines the AI-powered journal analysis flow.
 *
 * - analyzeJournal - A function that analyzes a list of trades and provides insights.
 * - JournalAnalysisInput - The input type for the analyzeJournal function.
 * - JournalAnalysisOutput - The return type for the analyzeJournal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TradeSchema = z.object({
  id: z.number(),
  date: z.string(),
  ticker: z.string(),
  direction: z.enum(['Long', 'Short']),
  outcome: z.string().describe('The outcome of the trade in R-multiples, e.g., "+2.5R" or "-1.0R"'),
  notes: z.string().describe('The trader\'s personal notes and rationale for the trade.'),
});

const JournalAnalysisInputSchema = z.object({
  trades: z.array(TradeSchema).describe("An array of the user's trades."),
});
export type JournalAnalysisInput = z.infer<typeof JournalAnalysisInputSchema>;

const JournalAnalysisOutputSchema = z.object({
  positivePatterns: z.array(z.string()).describe("A list of observed positive patterns, habits, or strengths based on the rationale and outcome."),
  negativePatterns: z.array(z.string()).describe("A list of observed negative patterns, habits, or weaknesses. Focus on themes from the notes like FOMO, revenge trading, or not following the plan."),
  actionableSuggestions: z.array(z.string()).describe("A list of concrete, actionable suggestions for improvement based on the identified patterns."),
  performanceSummary: z.string().describe("A brief, overall summary of the trading performance based on the provided trades."),
});
export type JournalAnalysisOutput = z.infer<typeof JournalAnalysisOutputSchema>;

export async function analyzeJournal(input: JournalAnalysisInput): Promise<JournalAnalysisOutput> {
  return journalAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'journalAnalysisPrompt',
  input: {schema: JournalAnalysisInputSchema},
  output: {schema: JournalAnalysisOutputSchema},
  prompt: `You are an expert trading psychologist and performance coach. Your task is to analyze a trader's journal entries and provide clear, insightful, and actionable feedback. Do not be generic; base your analysis directly on the provided trade data and rationale in the notes.

Analyze the following trades:
{{{json trades}}}

Based on the data, identify:
1.  **Positive Patterns:** What are they doing right? Look for well-reasoned trades in the notes that correspond with positive outcomes.
2.  **Negative Patterns:** What are their recurring mistakes? Pay close attention to the notes for psychological errors ("FOMO," "revenge trade," "bad discipline") or trades where the rationale was weak.
3.  **Actionable Suggestions:** Provide specific advice. If they struggle with FOMO, suggest they follow a strict pre-trade checklist outlined in their rationale.
4.  **Performance Summary:** Write a short, encouraging summary of their performance and potential based on the quality of their decisions and outcomes.`, 
});

const journalAnalysisFlow = ai.defineFlow(
  {
    name: 'journalAnalysisFlow',
    inputSchema: JournalAnalysisInputSchema,
    outputSchema: JournalAnalysisOutputSchema,
  },
  async input => {
    if (input.trades.length < 3) {
      throw new Error("You need at least 3 trades in your journal for a meaningful analysis.");
    }
    const {output} = await prompt(input);
    return output!;
  }
);
