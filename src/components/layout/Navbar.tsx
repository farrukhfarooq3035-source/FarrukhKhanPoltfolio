'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';

const SOCIAL_ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-xl shadow-glass-med'
          : 'bg-transparent'
      )}
    >
      <div className="container-base flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold">
          <span className="rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 px-2 py-1 text-sm">
            FK
          </span>
          <span className="hidden sm:block">Farrukh Khan</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {['github', 'linkedin', 'mail'].map((key) => {
            const Icon = SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS];
            const href =
              key === 'github'
                ? 'https://github.com'
                : key === 'linkedin'
                  ? 'https://linkedin.com'
                  : 'mailto:farrukh.khan@example.com';
            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="rounded-full border border-white/10 p-2 text-white/80 transition-all hover:border-primary-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center rounded-full border border-white/10 p-2 text-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
