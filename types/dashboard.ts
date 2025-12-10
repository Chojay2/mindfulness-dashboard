export interface KPIData {
  score: number;
  label: string;
  components: {
    name: string;
    value: number;
    color: string;
  }[];
}

export interface ChartDataPoint {
  period: string;
  environment: number;
  community: number;
  [key: string]: string | number;
}

export interface ChartData {
  data: ChartDataPoint[];
  labels: string[];
}

export interface ActivityImpact {
  id: string;
  name: string;
  category: 'environment' | 'community';
  percentage: number;
  icon?: string;
}

export interface FilterState {
  branch: string;
  timeRange: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  searchQuery?: string;
}

export interface DomainConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  metrics: {
    kpiLabels: string[];
    activityCategories: string[];
  };
}

