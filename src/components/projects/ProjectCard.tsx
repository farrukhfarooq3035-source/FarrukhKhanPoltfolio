'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-primary-500/50"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="rounded-lg bg-primary-500 p-2 text-white"
            >
              <FiExternalLink />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="rounded-lg bg-dark-800 p-2 text-white"
            >
              <FiGithub />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white group-hover:text-primary-400">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-white/70">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-lg font-semibold text-white">{metric.value}</p>
              <p className="text-[11px] text-white/50">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
