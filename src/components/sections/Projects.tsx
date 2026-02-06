'use client';

import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { StatsChart } from '@/components/charts/StatsChart';

const statsData = [
  { name: 'Jan', value: 420 },
  { name: 'Feb', value: 680 },
  { name: 'Mar', value: 560 },
  { name: 'Apr', value: 820 },
  { name: 'May', value: 720 },
  { name: 'Jun', value: 980 }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-400">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Featured work across analytics, AI, and full-stack platforms.
          </h2>
          <p className="mt-4 text-white/70">
            Explore deep-dive case studies with real metrics, interactive dashboards, and
            production-ready architectures.
          </p>
        </motion.div>

        <div className="mt-10">
          <ProjectGrid />
        </div>

        <div className="mt-14 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-xl font-semibold text-white">Performance Snapshot</h3>
            <p className="mt-2 text-sm text-white/70">
              Live-style analytics preview inspired by enterprise dashboards.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Visitors', value: '18.4K' },
                { label: 'Engagement', value: '4.2m' },
                { label: 'Conversions', value: '6.8%' }
              ].map((metric) => (
                <div key={metric.label} className="rounded-xl border border-white/10 bg-dark-800 p-4">
                  <p className="text-lg font-semibold text-white">{metric.value}</p>
                  <p className="text-xs text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-dark-800 p-4">
            <StatsChart data={statsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
