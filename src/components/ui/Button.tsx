import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';
import { cloneElement, isValidElement } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  asChild?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  asChild,
  type,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/80 disabled:cursor-not-allowed disabled:opacity-60',
    variant === 'primary' &&
      'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 hover:-translate-y-1 hover:shadow-primary-500/50',
    variant === 'secondary' &&
      'border-2 border-primary-500 text-white hover:bg-primary-500/10 hover:-translate-y-1',
    variant === 'ghost' &&
      'border border-white/10 text-white hover:bg-white/10',
    className
  );

  if (asChild && isValidElement(props.children)) {
    return cloneElement(props.children, {
      className: cn(classes, (props.children as { props?: { className?: string } })?.props?.className)
    });
  }

  return <button className={classes} type={type ?? 'button'} {...props} />;
}
