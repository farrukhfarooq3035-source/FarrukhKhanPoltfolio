'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data/skills';
import { Card } from '@/components/ui/Card';
import { SkillChart } from '@/components/charts/SkillChart';

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-400">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Capabilities across the stack.</h2>
          <p className="mt-4 text-white/70">
            Core strengths in data science, web development, analytics, and cloud operations.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>

                <div className="mt-6 space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between text-sm text-white/70">
                        <span>{item.name}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <SkillChart data={category.items.map((item) => ({ name: item.name, level: item.level }))} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
