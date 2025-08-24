
"use client";

import { useState } from 'react';
import type { GlossaryTerm } from '@/content/resources';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface GlossaryGuideProps {
  terms: GlossaryTerm[];
}

export function GlossaryGuide({ terms }: GlossaryGuideProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = terms.filter(term => 
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trading Glossary</CardTitle>
        <CardDescription>Search for common trading terms and their definitions.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          placeholder="Search glossary..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4">
          {filteredTerms.map(term => (
            <div key={term.term} className="border-b pb-2">
              <h4 className="font-semibold">{term.term}</h4>
              <p className="text-muted-foreground font-body">{term.definition}</p>
            </div>
          ))}
           {filteredTerms.length === 0 && (
            <p className="text-center text-muted-foreground">No terms found matching your search.</p>
           )}
        </div>
      </CardContent>
    </Card>
  );
}
