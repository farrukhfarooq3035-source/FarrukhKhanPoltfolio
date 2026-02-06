import { cn } from '@/lib/utils';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary-500/60 focus:outline-none focus:ring-2 focus:ring-primary-500/30',
        className
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'w-full min-h-[140px] rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary-500/60 focus:outline-none focus:ring-2 focus:ring-primary-500/30',
        className
      )}
      {...props}
    />
  );
}
