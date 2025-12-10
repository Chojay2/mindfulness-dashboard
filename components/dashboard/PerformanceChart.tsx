"use client";

import { ChartData } from "@/types/dashboard";
import { generateChartData } from "@/lib/mock-data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function PerformanceChart({ data = generateChartData() }: { data?: ChartData }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data.data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis 
          dataKey="period" 
          className="text-xs"
          tick={{ fill: 'currentColor' }}
        />
        <YAxis 
          className="text-xs"
          tick={{ fill: 'currentColor' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '0.5rem'
          }}
        />
        <Legend />
        <Bar dataKey="environment" fill="#10b981" name="Environment" />
        <Bar dataKey="community" fill="#f59e0b" name="Community" />
      </BarChart>
    </ResponsiveContainer>
  );
}

