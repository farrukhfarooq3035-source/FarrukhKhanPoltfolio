import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'traffic-analytics',
    slug: 'smart-traffic-analytics-platform',
    title: 'Smart Traffic Analytics Platform',
    description:
      'Real-time congestion forecasting with interactive maps, predictive alerts, and policy insights for smart cities.',
    image: '/images/projects/project-1.jpg',
    category: 'Data Science',
    tags: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    demoUrl: 'https://example.com/demo/traffic',
    githubUrl: 'https://github.com/example/traffic-analytics',
    metrics: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Alerts', value: '1.2K' },
      { label: 'Latency', value: '180ms' }
    ]
  },
  {
    id: 'restaurant-suite',
    slug: 'restaurant-management-suite',
    title: 'Restaurant Management Suite',
    description:
      'Unified POS, order routing, and analytics dashboards built for multi-channel operations.',
    image: '/images/projects/project-2.jpg',
    category: 'Web Apps',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    demoUrl: 'https://example.com/demo/restaurant',
    githubUrl: 'https://github.com/example/restaurant-suite',
    metrics: [
      { label: 'Revenue', value: '+24%' },
      { label: 'Orders', value: '18K' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: 'expense-tracker',
    slug: 'expense-tracking-app',
    title: 'Expense Tracking App',
    description:
      'Mobile-first expense tracking with OCR receipts, split-bills, and live analytics.',
    image: '/images/projects/project-3.jpg',
    category: 'Web Apps',
    tags: ['React Native', 'Firebase', 'Python OCR'],
    demoUrl: 'https://example.com/demo/expense',
    githubUrl: 'https://github.com/example/expense-tracker',
    metrics: [
      { label: 'Users', value: '8.5K' },
      { label: 'OCR Rate', value: '95%' },
      { label: 'Latency', value: '210ms' }
    ]
  },
  {
    id: 'sales-dashboard',
    slug: 'sales-analytics-dashboard',
    title: 'Sales Analytics Dashboard',
    description:
      'Executive BI reporting with predictive sales insights and automated KPI monitoring.',
    image: '/images/projects/project-4.jpg',
    category: 'Analytics',
    tags: ['Python', 'Scikit-learn', 'Tableau'],
    demoUrl: 'https://example.com/demo/sales',
    githubUrl: 'https://github.com/example/sales-dashboard',
    metrics: [
      { label: 'Forecast', value: '91%' },
      { label: 'KPI', value: '35+' },
      { label: 'Reports', value: '120' }
    ]
  },
  {
    id: 'warden-platform',
    slug: 'warden-communication-platform',
    title: 'Warden Communication Platform',
    description:
      'Secure, real-time coordination platform for field teams with alerts and role-based access.',
    image: '/images/projects/project-5.jpg',
    category: 'Web Apps',
    tags: ['Next.js', 'TypeScript', 'WebSockets'],
    demoUrl: 'https://example.com/demo/warden',
    githubUrl: 'https://github.com/example/warden-platform',
    metrics: [
      { label: 'Response', value: '-32%' },
      { label: 'Teams', value: '140+' },
      { label: 'Messages', value: '48K' }
    ]
  },
  {
    id: 'churn-prediction',
    slug: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    description:
      'Machine learning pipeline that predicts churn risk with explainable insights.',
    image: '/images/projects/project-6.jpg',
    category: 'Data Science',
    tags: ['XGBoost', 'Pandas', 'Jupyter'],
    demoUrl: 'https://example.com/demo/churn',
    githubUrl: 'https://github.com/example/churn-prediction',
    metrics: [
      { label: 'Recall', value: '89%' },
      { label: 'Lift', value: '2.4x' },
      { label: 'ROI', value: '+18%' }
    ]
  }
];
