'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];
  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-dark-900">
      <div className="container-base">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-400">
          Testimonials
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Trusted by teams and leaders.</h2>

        <div className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-white/10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg text-white/80">"{current.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-white">{current.name}</p>
                  <p className="text-xs text-white/60">
                    {current.role} • {current.company}
                  </p>
                  <div className="mt-2 text-sm text-accent-400">
                    {'★'.repeat(current.rating)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? 'bg-primary-400 w-6' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="rounded-full border border-white/10 p-2 text-white/70 hover:border-primary-500 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="rounded-full border border-white/10 p-2 text-white/70 hover:border-primary-500 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
