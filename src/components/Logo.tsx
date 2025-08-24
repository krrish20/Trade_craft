import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return <div className={cn("h-12 w-12 rounded-lg bg-primary mx-auto", className)}></div>;
}
