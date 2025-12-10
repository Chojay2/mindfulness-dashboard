import { KPIData, ChartData, ActivityImpact } from '@/types/dashboard';
import { frameworkData } from './framework-data';

export interface IndicatorValue {
  indicatorId: string;
  value: number | null;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  target?: number;
  status?: 'good' | 'warning' | 'critical';
}

export function generateKPIData(): KPIData {
  return {
    score: 80,
    label: 'EXCELLENT',
    components: [
      { name: 'Environment', value: 40, color: '#10b981' },
      { name: 'Community', value: 25, color: '#f59e0b' },
      { name: 'Governance', value: 15, color: '#3b82f6' }
    ]
  };
}

export function generateChartData(): ChartData {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return {
    data: months.map(month => ({
      period: month,
      environment: Math.floor(Math.random() * 15000) + 5000,
      community: Math.floor(Math.random() * 10000) + 3000
    })),
    labels: months
  };
}

export function generateActivityImpacts(): ActivityImpact[] {
  return [
    { id: '1', name: 'GHG Emissions', category: 'environment', percentage: 35, icon: 'Cloud' },
    { id: '2', name: 'Forest Coverage', category: 'environment', percentage: 28, icon: 'Trees' },
    { id: '3', name: 'Green Energy Share', category: 'environment', percentage: 22, icon: 'Zap' },
    { id: '4', name: 'Social Responsibilities', category: 'community', percentage: 45, icon: 'Heart' },
    { id: '5', name: 'Community Cohesion', category: 'community', percentage: 38, icon: 'Users' },
    { id: '6', name: 'Cultural Participation', category: 'community', percentage: 32, icon: 'Music' }
  ];
}

export function generateBranches(): string[] {
  return ['All Branches', 'Thimphu', 'Paro', 'Punakha', 'Bumthang'];
}

export function getDimensionStats(dimensionId: string) {
  const dimension = frameworkData.dimensions.find(d => d.id === dimensionId);
  if (!dimension) return { categories: 0, indicators: 0 };
  
  const indicators = dimension.categories.reduce((acc, cat) => acc + cat.indicators.length, 0);
  return {
    categories: dimension.categories.length,
    indicators
  };
}

// Generate indicator values for all indicators
export function getIndicatorValue(dimensionId: string, categoryId: string, indicatorId: string): IndicatorValue | null {
  // Generate realistic mock data based on indicator type
  const indicator = frameworkData.dimensions
    .find(d => d.id === dimensionId)
    ?.categories.find(c => c.id === categoryId)
    ?.indicators.find(i => i.id === indicatorId);

  if (!indicator) return null;

  // Generate values based on quantifiable status
  if (indicator.quantifiable === 'yes') {
    // Generate a random value between 0-100 for percentage-based indicators
    // Or specific ranges for other types
    const value = Math.floor(Math.random() * 100);
    const trend = ['up', 'down', 'stable'][Math.floor(Math.random() * 3)] as 'up' | 'down' | 'stable';
    const status = value > 70 ? 'good' : value > 40 ? 'warning' : 'critical';
    
    return {
      indicatorId,
      value,
      unit: indicator.name.toLowerCase().includes('percentage') || indicator.name.toLowerCase().includes('%') ? '%' : undefined,
      trend,
      target: 80,
      status
    };
  } else if (indicator.quantifiable === 'partially') {
    return {
      indicatorId,
      value: Math.floor(Math.random() * 50) + 50,
      trend: 'stable',
      status: 'warning'
    };
  }
  
  return {
    indicatorId,
    value: null,
    status: 'good'
  };
}

export function getAllIndicatorValues(dimensionId: string): Record<string, Record<string, IndicatorValue>> {
  const dimension = frameworkData.dimensions.find(d => d.id === dimensionId);
  if (!dimension) return {};

  const values: Record<string, Record<string, IndicatorValue>> = {};
  
  dimension.categories.forEach(category => {
    values[category.id] = {};
    category.indicators.forEach(indicator => {
      values[category.id][indicator.id] = getIndicatorValue(dimensionId, category.id, indicator.id)!;
    });
  });

  return values;
}

// Time series data for indicators (last 24 months)
export interface TimeSeriesPoint {
  date: string;
  value: number;
  label?: string;
}

export function generateTimeSeries(indicatorId: string, baseValue: number, trend?: 'up' | 'down' | 'stable'): TimeSeriesPoint[] {
  const months = 24;
  const data: TimeSeriesPoint[] = [];
  const now = new Date();
  
  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setMonth(date.getMonth() - i);
    
    let value = baseValue;
    const randomVariation = (Math.random() - 0.5) * 10; // ±5 variation
    
    if (trend === 'up') {
      value = baseValue - (months - i) * 0.5 + randomVariation;
    } else if (trend === 'down') {
      value = baseValue + (months - i) * 0.5 + randomVariation;
    } else {
      value = baseValue + randomVariation;
    }
    
    value = Math.max(0, Math.min(100, value)); // Clamp to 0-100
    
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.round(value * 10) / 10,
      label: date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
    });
  }
  
  return data;
}

// Breakdown data by segment (zone, age, etc.)
export interface BreakdownData {
  segment: string;
  value: number;
  count?: number;
}

export function generateBreakdownByZone(indicatorId: string, baseValue: number): BreakdownData[] {
  const zones = ['Central', 'North', 'South', 'East', 'West', 'New Development'];
  return zones.map(zone => ({
    segment: zone,
    value: baseValue + (Math.random() - 0.5) * 30,
    count: Math.floor(Math.random() * 5000) + 1000
  })).sort((a, b) => b.value - a.value);
}

export function generateBreakdownByAge(indicatorId: string, baseValue: number): BreakdownData[] {
  const ageGroups = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
  return ageGroups.map(age => ({
    segment: age,
    value: baseValue + (Math.random() - 0.5) * 25,
    count: Math.floor(Math.random() * 3000) + 500
  }));
}

// Likert scale data for perception indicators
export interface LikertData {
  category: string;
  stronglyDisagree: number;
  disagree: number;
  neutral: number;
  agree: number;
  stronglyAgree: number;
}

export function generateLikertData(indicatorId: string, groups: string[]): LikertData[] {
  return groups.map(group => {
    const total = 100;
    const agree = Math.floor(Math.random() * 30) + 20;
    const stronglyAgree = Math.floor(Math.random() * 20) + 10;
    const neutral = Math.floor(Math.random() * 20) + 10;
    const disagree = Math.floor(Math.random() * 15) + 5;
    const stronglyDisagree = total - agree - stronglyAgree - neutral - disagree;
    
    return {
      category: group,
      stronglyDisagree: Math.max(0, stronglyDisagree),
      disagree,
      neutral,
      agree,
      stronglyAgree
    };
  });
}

// Coverage data for access indicators
export interface CoverageData {
  distance: number; // km
  coverage: number; // percentage
}

export function generateCoverageData(baseCoverage: number): CoverageData[] {
  const distances = [0.2, 0.4, 0.6, 0.8, 1.0, 1.5, 2.0, 3.0, 5.0];
  return distances.map(distance => ({
    distance,
    coverage: Math.min(100, baseCoverage + (distance * 15) + (Math.random() - 0.5) * 10)
  }));
}

// Sector breakdown for ecological indicators
export interface SectorData {
  sector: string;
  value: number;
  percentage: number;
}

export function generateSectorBreakdown(indicatorId: string, totalValue: number): SectorData[] {
  const sectors = ['Transport', 'Buildings', 'Agriculture', 'Energy', 'Waste', 'Other'];
  const percentages = [0.25, 0.20, 0.15, 0.18, 0.12, 0.10];
  
  return sectors.map((sector, index) => ({
    sector,
    value: totalValue * percentages[index] + (Math.random() - 0.5) * (totalValue * 0.1),
    percentage: percentages[index] * 100
  }));
}

// Determine indicator type for visualization selection
export function getIndicatorType(indicatorName: string, categoryName: string): 'behavior' | 'access' | 'wellbeing' | 'resource' | 'governance' | 'ecological' | 'tourism' | 'qualitative' {
  const name = indicatorName.toLowerCase();
  const category = categoryName.toLowerCase();
  
  // Behavior indicators
  if (name.includes('engagement') || name.includes('participation') || name.includes('volunteer') || 
      name.includes('activity') || name.includes('usage') || name.includes('behaviour')) {
    return 'behavior';
  }
  
  // Access indicators
  if (name.includes('access') || name.includes('coverage') || name.includes('within') || 
      name.includes('distance') || name.includes('availability')) {
    return 'access';
  }
  
  // Wellbeing/perception indicators
  if (name.includes('awareness') || name.includes('mindfulness') || name.includes('health') || 
      name.includes('belonging') || name.includes('safety') || name.includes('perception') ||
      name.includes('cohesion') || name.includes('compassion')) {
    return 'wellbeing';
  }
  
  // Resource indicators
  if (name.includes('facilitator') || name.includes('institute') || name.includes('facility') || 
      name.includes('station') || name.includes('number of')) {
    return 'resource';
  }
  
  // Governance indicators
  if (name.includes('governance') || name.includes('transparency') || name.includes('policy') || 
      name.includes('data sharing') || name.includes('corruption') || name.includes('planning')) {
    return 'governance';
  }
  
  // Ecological indicators
  if (name.includes('emission') || name.includes('forest') || name.includes('biodiversity') || 
      name.includes('waste') || name.includes('air quality') || name.includes('carbon') ||
      name.includes('green') || name.includes('blue') || category.includes('ecological')) {
    return 'ecological';
  }
  
  // Tourism indicators
  if (name.includes('tourism') || name.includes('visitor') || name.includes('accommodation')) {
    return 'tourism';
  }
  
  // Default to qualitative
  return 'qualitative';
}

