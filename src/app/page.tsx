import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { ProjectsSection } from '@/components/sections/Projects';
import { SkillsSection } from '@/components/sections/Skills';
import { ExperienceSection } from '@/components/sections/Experience';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { ContactSection } from '@/components/sections/Contact';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Farrukh Khan',
  jobTitle: 'Data Scientist | Data Analyst | Full-Stack Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'Pakistan'
  },
  email: 'farrukh.khan@example.com'
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
