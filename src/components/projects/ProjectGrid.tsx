'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/lib/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';

const categories = ['All', 'Data Science', 'Web Apps', 'Analytics'];

export function ProjectGrid() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <div className="space-y-8">
      <ProjectFilter categories={categories} active={active} onChange={setActive} />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
