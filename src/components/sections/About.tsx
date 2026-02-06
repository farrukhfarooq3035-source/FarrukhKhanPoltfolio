'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const highlights = [
  { title: 'Education', value: 'MCS', subtitle: 'Master of Computer Science' },
  { title: 'Experience', value: '5+ Years', subtitle: 'Industry expertise' },
  { title: 'Projects', value: '50+', subtitle: 'Delivered end-to-end' },
  { title: 'Technologies', value: '10+', subtitle: 'Modern stack' }
];

const pillars = [
  {
    title: 'Data-Driven',
    description: 'Every decision is backed by evidence, experimentation, and measurable KPIs.'
  },
  {
    title: 'User-Focused',
    description: 'Interfaces are built for clarity and speed, with real-world workflows in mind.'
  },
  {
    title: 'Continuous Learning',
    description: 'Iterative improvements through research, feedback, and emerging technologies.'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-base">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-400">
              About
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Building premium, data-driven products that scale.
            </h2>
            <p className="text-white/70">
              I am Farrukh Khan, an MCS graduate with 5+ years of experience delivering
              analytics platforms, ML solutions, and full-stack products for teams that demand
              precision and performance.
            </p>
            <p className="text-white/70">
              My work spans real-time traffic intelligence, restaurant operations, and fintech
              dashboards. I focus on turning complex datasets into elegant, actionable experiences.
            </p>
            <p className="text-white/70">
              I partner with stakeholders to define success metrics, then design systems that
              consistently exceed them through robust architecture and polished UI.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-primary-500/20 bg-gradient-to-br from-white/5 to-primary-500/10">
                  <p className="text-sm text-white/60">{item.title}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-white/60">{item.subtitle}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold">My Approach</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h4 className="text-lg font-semibold text-white">{pillar.title}</h4>
                  <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
