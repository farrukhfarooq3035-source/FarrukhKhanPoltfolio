import type { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    category: 'Data Science & ML',
    icon: '🧠',
    items: [
      { name: 'Python', level: 95 },
      { name: 'TensorFlow', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'PyTorch', level: 80 }
    ]
  },
  {
    category: 'Web Development',
    icon: '⚡',
    items: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 }
    ]
  },
  {
    category: 'Data Analytics',
    icon: '📊',
    items: [
      { name: 'SQL', level: 92 },
      { name: 'Tableau', level: 85 },
      { name: 'Power BI', level: 83 },
      { name: 'Excel', level: 88 }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 82 },
      { name: 'Git', level: 90 },
      { name: 'CI/CD', level: 78 }
    ]
  }
];
