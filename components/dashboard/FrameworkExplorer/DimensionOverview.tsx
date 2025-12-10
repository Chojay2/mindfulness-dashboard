"use client";

import { Dimension } from "@/types/framework";
import { CategorySection } from "./CategorySection";
import { BreadcrumbNav } from "./BreadcrumbNav";
import { dimensionColors } from "@/lib/config";
import { User, Users, Building2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  User,
  Users,
  Building2,
  Globe,
};

interface DimensionOverviewProps {
  dimension: Dimension;
}

export function DimensionOverview({ dimension }: DimensionOverviewProps) {
  const Icon = iconMap[dimension.icon] || User;
  const colors = dimensionColors[dimension.id as keyof typeof dimensionColors];
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: dimension.name, href: `/${dimension.id}` }
  ];

  return (
    <div className="space-y-6">
      <BreadcrumbNav items={breadcrumbs} />
      
      <div className={cn(
        "rounded-lg border p-6",
        colors.bg,
        colors.border
      )}>
        <div className="flex items-center gap-4">
          <div className={cn(
            "rounded-lg p-3",
            colors.accent
          )}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{dimension.name}</h1>
            <p className="mt-2 text-muted-foreground">{dimension.description}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        {dimension.categories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            dimensionId={dimension.id}
            dimensionColor={dimension.color}
          />
        ))}
      </div>
    </div>
  );
}

