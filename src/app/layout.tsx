import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/layout/Analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira'
});

export const metadata: Metadata = {
  title: 'Farrukh Khan | Data Scientist & Full-Stack Developer',
  description:
    'Expert in Data Science, Analytics, and Full-Stack Development. MCS graduate with 5+ years building scalable applications and ML models.',
  keywords: [
    'data scientist',
    'full stack developer',
    'data analyst',
    'machine learning',
    'web development',
    'portfolio'
  ],
  openGraph: {
    title: 'Farrukh Khan | Data Scientist & Full-Stack Developer',
    description:
      'Premium portfolio showcasing data science, analytics, and full-stack engineering.',
    type: 'website'
  }
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fira.variable}`}>
      <body className="font-sans">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { page_path: window.location.pathname });`}
            </Script>
            <Analytics />
          </>
        )}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
