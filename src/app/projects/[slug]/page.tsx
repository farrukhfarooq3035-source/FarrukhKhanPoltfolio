import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section-padding bg-dark-900">
      <div className="container-base">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-400">
              {project.category}
            </p>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{project.title}</h1>
            <p className="mt-4 text-white/70">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.demoUrl && (
                <Button asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="secondary" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
