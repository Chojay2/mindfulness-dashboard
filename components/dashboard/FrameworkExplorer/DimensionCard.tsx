"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dimensionColors } from "@/lib/config";
import { Dimension } from "@/types/framework";
import { getDimensionStats } from "@/lib/mock-data";
import { User, Users, Building2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  User,
  Users,
  Building2,
  Globe,
};

interface DimensionCardProps {
  dimension: Dimension;
}

export function DimensionCard({ dimension }: DimensionCardProps) {
  const Icon = iconMap[dimension.icon] || User;
  const colors = dimensionColors[dimension.id as keyof typeof dimensionColors];
  const stats = getDimensionStats(dimension.id);

  return (
    <Link href={`/${dimension.id}`}>
      <Card className={cn(
        "group cursor-pointer transition-all hover:shadow-lg hover:border-2",
        `hover:${colors.border}`
      )}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className={cn(
              "rounded-lg p-2",
              colors.bg
            )}>
              <Icon className={cn("h-6 w-6", colors.text)} />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl">{dimension.name}</CardTitle>
              <CardDescription className="mt-1">{dimension.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">{stats.categories}</span> Categories
            </div>
            <div>
              <span className="font-semibold text-foreground">{stats.indicators}</span> Indicators
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

