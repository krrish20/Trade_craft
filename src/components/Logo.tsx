import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Tradecraft Academy Logo"
      width={40}
      height={40}
      className={cn("h-8 w-8", className)}
    />
  );
}
