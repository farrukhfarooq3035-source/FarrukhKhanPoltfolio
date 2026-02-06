import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    role: 'Senior Data Scientist',
    company: 'Urban Insights Lab',
    period: '2023 - Present',
    location: 'Lahore, Pakistan',
    description:
      'Leading ML initiatives for city-scale mobility optimization and predictive analytics platforms.',
    achievements: [
      'Reduced congestion alerts by 28% using adaptive ML models',
      'Built a real-time alerting pipeline serving 1.5M+ records/day',
      'Delivered executive dashboards adopted by 6 departments',
      'Mentored 4 analysts in advanced model deployment'
    ],
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'React', 'Redis']
  },
  {
    role: 'Full-Stack Developer',
    company: 'ScaleOps Studio',
    period: '2021 - 2023',
    location: 'Remote',
    description:
      'Architected data-rich web applications for hospitality and retail clients.',
    achievements: [
      'Launched a restaurant suite processing 20K+ orders/month',
      'Improved reporting speed by 40% via optimized APIs',
      'Designed role-based workflows for multi-location teams',
      'Maintained 99.9% uptime across all deployed apps'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
  },
  {
    role: 'Data Analyst',
    company: 'InsightBridge',
    period: '2019 - 2021',
    location: 'Lahore, Pakistan',
    description:
      'Delivered business intelligence solutions and predictive analytics for enterprise clients.',
    achievements: [
      'Automated KPI reporting, saving 12 hours/week',
      'Increased retention by 15% through churn modeling',
      'Built custom dashboards for 5 enterprise accounts',
      'Standardized analytics pipelines across 3 business units'
    ],
    technologies: ['SQL', 'Tableau', 'Python', 'Power BI']
  }
];
