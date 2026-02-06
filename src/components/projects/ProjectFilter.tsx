'use client';

import { cn } from '@/lib/utils';

interface ProjectFilterProps {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
}

export function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all',
            active === category
              ? 'border-primary-500 bg-primary-500/15 text-primary-300'
              : 'border-white/10 text-white/60 hover:border-primary-500/50 hover:text-white'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
