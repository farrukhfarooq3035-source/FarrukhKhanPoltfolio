export type ProjectCategory = 'All' | 'Data Science' | 'Web Apps' | 'Analytics';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  metrics: ProjectMetric[];
  slug: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: SkillItem[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}
