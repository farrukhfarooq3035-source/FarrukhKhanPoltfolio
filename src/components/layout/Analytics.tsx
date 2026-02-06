'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id || typeof window === 'undefined' || !window.gtag) return;
    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    window.gtag('config', id, { page_path: pagePath });
  }, [pathname, searchParams]);

  return null;
}
