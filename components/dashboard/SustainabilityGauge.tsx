"use client";

import { KPIData } from "@/types/dashboard";
import { generateKPIData } from "@/lib/mock-data";
import { Progress } from "@/components/ui/progress";

export function SustainabilityGauge({ data = generateKPIData() }: { data?: KPIData }) {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const offset = circumference - (data.score / 100) * circumference;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center">
        <div className="relative h-48 w-48">
          <svg className="h-48 w-48 -rotate-90 transform">
            <circle
              cx="96"
              cy="96"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-muted"
            />
            <circle
              cx="96"
              cy="96"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="text-green-500 transition-all duration-1000"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{data.score}%</span>
            <span className="text-sm text-muted-foreground">{data.label}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {data.components.map((component) => (
          <div key={component.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{component.name}</span>
              <span className="text-muted-foreground">{component.value}%</span>
            </div>
            <Progress value={component.value} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

