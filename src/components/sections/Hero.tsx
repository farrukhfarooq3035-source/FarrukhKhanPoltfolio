'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-dark-900 via-black to-dark-800">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent-500/20 blur-[120px]" />
      </div>

      <div className="container-base relative z-10 flex min-h-screen items-center pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-400">
              - I am
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Farrukh <span className="text-gradient">Khan</span>
            </h1>

            <div className="text-2xl font-semibold text-white/80 sm:text-3xl">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  2000,
                  'Data Analyst',
                  2000,
                  'Full-Stack Developer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
              />
            </div>

            <p className="max-w-xl text-lg text-white/70">
              MCS graduate specializing in data-driven systems, advanced analytics, and
              full-stack development that transform complex challenges into measurable impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="/resume/Farrukh_Khan_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <div className="glass rounded-xl px-4 py-3">
                <p className="text-lg font-semibold text-white">5+ Years</p>
                <p>Experience</p>
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <p className="text-lg font-semibold text-white">50+ Projects</p>
                <p>Delivered</p>
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <p className="text-lg font-semibold text-white">10+ Tech</p>
                <p>Stack</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/15 p-3 text-white/70 transition hover:border-primary-500 hover:text-white"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/15 p-3 text-white/70 transition hover:border-primary-500 hover:text-white"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:farrukh.khan@example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="rounded-full border border-white/15 p-3 text-white/70 transition hover:border-primary-500 hover:text-white"
              >
                <FiMail />
              </a>
              <a
                href="/resume/Farrukh_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume"
                className="rounded-full border border-white/15 p-3 text-white/70 transition hover:border-primary-500 hover:text-white"
              >
                <FiDownload />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-r from-primary-500/30 to-accent-500/30 blur-2xl" />
            <div className="relative animate-float overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
              <Image
                src="/images/profile.jpg"
                alt="Farrukh Khan portrait"
                width={462}
                height={572}
                className="h-[462px] w-[352px] rounded-2xl object-cover sm:h-[572px] sm:w-[462px]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-2">
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
