export type QuantifiableStatus = 'yes' | 'no' | 'partially';

export interface Indicator {
  id: string;
  name: string;
  definition: string;
  quantifiable: QuantifiableStatus;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  indicators: Indicator[];
}

export interface Dimension {
  id: string;
  name: string;
  description: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
  icon: string;
  categories: Category[];
}

export interface FrameworkData {
  dimensions: Dimension[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface NavigationState {
  currentDimension?: string;
  currentCategory?: string;
  currentIndicator?: string;
}

