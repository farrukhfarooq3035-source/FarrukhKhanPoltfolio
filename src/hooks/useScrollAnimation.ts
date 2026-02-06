'use client';

import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export function useScrollAnimation(isVisible: boolean) {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }
  }, [controls, isVisible]);

  return controls;
}
