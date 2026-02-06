'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-dark-900/95 backdrop-blur-xl"
        >
          <div className="container-base flex h-20 items-center justify-between">
            <span className="text-lg font-semibold">Menu</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 p-2"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <motion.nav
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            className="container-base mt-10 flex flex-col gap-6"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="text-2xl font-semibold text-white/90"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
