import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/40',
        className
      )}
      {...props}
    />
  );
}
