import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Image src="/images/logo.svg" alt="Tradecraft Academy Logo" fill />
    </div>
  );
}
