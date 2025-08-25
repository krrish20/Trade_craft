
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

const quotes = [
  {
    text: "The trend is your friend until the end when it bends.",
    author: "Ed Seykota"
  },
  {
    text: "The four most dangerous words in investing are: 'This time it's different.'",
    author: "Sir John Templeton"
  },
  {
    text: "Amateurs think about how much money they can make. Professionals think about how much money they can lose.",
    author: "Jack Schwager"
  },
  {
    text: "In investing, what is comfortable is rarely profitable.",
    author: "Robert Arnott"
  },
  {
    text: "The stock market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett"
  },
  {
    text: "Don't focus on making money, focus on protecting what you have.",
    author: "Paul Tudor Jones"
  },
  {
    text: "The goal of a successful trader is to make the best trades. Money is secondary.",
    author: "Alexander Elder"
  },
  {
    text: "I'm always thinking about losing money as opposed to making money.",
    author: "Paul Tudor Jones"
  },
  {
    text: "There is a time to go long, a time to go short, and a time to go fishing.",
    author: "Jesse Livermore"
  },
  {
    text: "The hard part is not making the decision, it's sticking to it.",
    author: "Unknown"
  },
  {
    text: "Let your winners run and cut your losers short.",
    author: "David Ricardo"
  },
  {
    text: "The market can stay irrational longer than you can stay solvent.",
    author: "John Maynard Keynes"
  },
  {
    text: "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong.",
    author: "George Soros"
  },
  {
    text: "If you don't find a way to make money while you sleep, you will work until you die.",
    author: "Warren Buffett"
  },
  {
    text: "Do not anticipate and move without market confirmation—being a little late in your trade is your insurance that you are right or wrong.",
    author: "Jesse Livermore"
  },
  {
    text: "The elements of good trading are: (1) cutting losses, (2) cutting losses, and (3) cutting losses. If you can follow these three rules, you may have a chance.",
    author: "Ed Seykota"
  },
  {
    text: "All you need is one pattern to make a living.",
    author: "Linda Raschke"
  },
  {
    text: "I learned that the market has no bias, so I shouldn't have one either.",
    author: "Mark Douglas"
  },
  {
    text: "The desire for constant action is a major handicap for the trader.",
    author: "Unknown"
  },
  {
    text: "Wait for the setup. The quality of your patience determines the quality of your trade.",
    author: "Unknown"
  }
];

export function QuoteOfTheDay() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    // This ensures a random quote is chosen on the client-side to avoid hydration mismatch.
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  if (!quote.text) return null;

  return (
    <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20 shadow-lg shadow-primary/5">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <blockquote className="text-lg italic text-foreground/90">
              "{quote.text}"
            </blockquote>
            <p className="text-right text-sm font-semibold text-primary mt-2">- {quote.author}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
