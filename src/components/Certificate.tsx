"use client";

import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';

interface CertificateProps {
  name: string;
  date: Date;
}

export function Certificate({ name, date }: CertificateProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      <div id="certificate" className="p-8 bg-card border-2 border-primary rounded-lg shadow-lg relative overflow-hidden print:shadow-none print:border-none print:m-0 print:p-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <Logo className="h-16 w-16" />
          <h1 className="text-2xl font-semibold text-muted-foreground">Certificate of Completion</h1>
          <p className="text-lg text-muted-foreground">This certifies that</p>
          <p className="text-5xl font-bold text-primary font-headline">{name}</p>
          <p className="text-lg text-muted-foreground font-body">
            has successfully completed all requirements of the
            <br />
            <span className="font-semibold text-foreground">Tradecraft Academy</span>
          </p>
          <Award className="h-20 w-20 text-yellow-500 my-4" />
          <div className="flex justify-between w-full max-w-md pt-4 text-sm text-muted-foreground">
            <div>
              <p className="border-t border-dashed w-full pt-2">Date Issued</p>
              <p className="font-semibold text-foreground">{date.toLocaleDateString()}</p>
            </div>
            <div>
              <p className="border-t border-dashed w-full pt-2">Issuing Authority</p>
              <p className="font-semibold text-foreground">Tradecraft Academy</p>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={handlePrint} className="w-full print:hidden">
        Download / Print Certificate
      </Button>
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #certificate, #certificate * {
            visibility: visible;
          }
          #certificate {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
        }
        .bg-grid-pattern {
            background-image: linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, hsl(var(--card)) 1px);
            background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
