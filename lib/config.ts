import { DomainConfig } from '@/types/dashboard';

export const defaultConfig: DomainConfig = {
  name: 'Mindfulness City',
  colors: {
    primary: '#10b981', // green
    secondary: '#f59e0b', // orange
    accent: '#3b82f6' // blue
  },
  metrics: {
    kpiLabels: ['Environment', 'Community'],
    activityCategories: ['Environment', 'Community']
  }
};

export const dimensionColors = {
  micro: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    accent: 'bg-blue-500'
  },
  meso: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    accent: 'bg-green-500'
  },
  exosystem: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    accent: 'bg-orange-500'
  },
  macrosystem: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    accent: 'bg-purple-500'
  }
};

