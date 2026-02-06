'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data/experience';
import { Badge } from '@/components/ui/Badge';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-400">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Proven impact across analytics and engineering roles.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-10">
          {experiences.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 pl-10"
            >
              <span className="absolute left-4 top-8 h-3 w-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-[0_0_20px_rgba(0,217,255,0.6)]" />
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-white/60">
                    {item.company} • {item.location}
                  </p>
                </div>
                <span className="text-sm text-white/60">{item.period}</span>
              </div>
              <p className="mt-4 text-sm text-white/70">{item.description}</p>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>• {achievement}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
