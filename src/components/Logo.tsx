import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <svg 
        className="w-full h-full"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 2L2 7V17L12 22L22 17V7L12 2Z" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M7 10L12 12.5L17 10" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M12 12.5V17.5" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <polyline 
            points="9,14 12,11 15,14" 
            stroke="hsl(var(--accent))" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
