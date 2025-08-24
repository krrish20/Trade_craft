'use server';

/**
 * @fileOverview This file defines the personalized study path flow.
 *
 * - personalizedStudyPath - A function that generates a personalized study path based on user input.
 * - PersonalizedStudyPathInput - The input type for the personalizedStudyPath function.
 * - PersonalizedStudyPathOutput - The return type for the personalizedStudyPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedStudyPathInputSchema = z.object({
  skillLevel: z
    .string()
    .describe("The user's self-assessed skill level (beginner, intermediate, advanced)."),
  timeCommitment: z
    .string()
    .describe("The user's time commitment per day (e.g., '30 minutes', '1 hour', '2 hours')."),
  curriculum: z
    .string()
    .describe('A JSON string representing the curriculum structure.'),
});
export type PersonalizedStudyPathInput = z.infer<typeof PersonalizedStudyPathInputSchema>;

const PersonalizedStudyPathOutputSchema = z.object({
  studyPath: z.array(z.string()).describe('An array of lesson IDs representing the personalized study path.'),
  estimatedDuration: z.string().describe('Estimated time to complete the study path.'),
});
export type PersonalizedStudyPathOutput = z.infer<typeof PersonalizedStudyPathOutputSchema>;

export async function personalizedStudyPath(input: PersonalizedStudyPathInput): Promise<PersonalizedStudyPathOutput> {
  return personalizedStudyPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedStudyPathPrompt',
  input: {schema: PersonalizedStudyPathInputSchema},
  output: {schema: PersonalizedStudyPathOutputSchema},
  prompt: `You are an AI study path generator. Generate an efficient study path based on the user's skill level, time commitment, and available lessons.

Skill Level: {{{skillLevel}}}
Time Commitment: {{{timeCommitment}}}
Curriculum: {{{curriculum}}}

Consider the user's skill level and time commitment to provide a relevant and achievable study path.
Return only an array of lesson IDs and the total estimated duration to complete the study path.
`, 
});

const personalizedStudyPathFlow = ai.defineFlow(
  {
    name: 'personalizedStudyPathFlow',
    inputSchema: PersonalizedStudyPathInputSchema,
    outputSchema: PersonalizedStudyPathOutputSchema,
  },
  async input => {
    try {
      const curriculum = JSON.parse(input.curriculum);
      if (!Array.isArray(curriculum)) {
        throw new Error('Curriculum must be an array of lesson IDs.');
      }
    } catch (e: any) {
      throw new Error(`Invalid curriculum JSON: ${e.message}`);
    }

    const {output} = await prompt(input);
    return output!;
  }
);
