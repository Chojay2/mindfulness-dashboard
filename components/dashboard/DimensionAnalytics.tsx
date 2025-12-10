"use client";

import { Dimension } from "@/types/framework";
import { getAllIndicatorValues, getIndicatorType } from "@/lib/mock-data";
import { dimensionColors } from "@/lib/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Users, Building2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { IndicatorAnalyticsCard } from "./IndicatorAnalyticsCard";

const iconMap: Record<string, any> = {
  User,
  Users,
  Building2,
  Globe,
};

interface DimensionAnalyticsProps {
  dimension: Dimension;
}

export function DimensionAnalytics({ dimension }: DimensionAnalyticsProps) {
  const Icon = iconMap[dimension.icon] || User;
  const colors = dimensionColors[dimension.id as keyof typeof dimensionColors];
  const indicatorValues = getAllIndicatorValues(dimension.id);

  // Calculate overall stats
  const totalIndicators = dimension.categories.reduce(
    (acc, cat) => acc + cat.indicators.length,
    0
  );
  const quantifiableIndicators = dimension.categories.reduce(
    (acc, cat) =>
      acc + cat.indicators.filter((ind) => ind.quantifiable === "yes").length,
    0
  );

  const averageScore =
    quantifiableIndicators > 0
      ? Math.round(
          dimension.categories.reduce((acc, cat) => {
            const catScore = cat.indicators
              .filter((ind) => ind.quantifiable === "yes")
              .reduce((sum, ind) => {
                const value = indicatorValues[cat.id]?.[ind.id]?.value;
                return sum + (value ?? 0);
              }, 0);
            return acc + catScore;
          }, 0) / quantifiableIndicators
        )
      : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-lg p-6 text-white bg-[#286D28]">
        <div className="flex items-center gap-4">
          <div className="rounded-lg p-3 bg-[#142019]">
            <Icon className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{dimension.name}</h1>
            <p className="mt-1 text-white/90">{dimension.description}</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{averageScore}%</div>
            <div className="text-sm text-white/80">Overall Score</div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Categories</CardDescription>
            <CardTitle className="text-3xl">
              {dimension.categories.length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Indicators</CardDescription>
            <CardTitle className="text-3xl">{totalIndicators}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Quantifiable</CardDescription>
            <CardTitle className="text-3xl">{quantifiableIndicators}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Categories and Indicators */}
      <div className="space-y-6">
        {dimension.categories.map((category) => {
          const categoryIndicators = category.indicators;
          const categoryScore = categoryIndicators
            .filter((ind) => ind.quantifiable === "yes")
            .reduce((sum, ind) => {
              const value = indicatorValues[category.id]?.[ind.id]?.value;
              return sum + (value ?? 0);
            }, 0);
          const categoryCount = categoryIndicators.filter(
            (ind) => ind.quantifiable === "yes"
          ).length;
          const avgCategoryScore =
            categoryCount > 0 ? Math.round(categoryScore / categoryCount) : 0;

          return (
            <Card key={category.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    {category.description && (
                      <CardDescription className="mt-1">
                        {category.description}
                      </CardDescription>
                    )}
                  </div>
                  {categoryCount > 0 && (
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {avgCategoryScore}%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Avg Score
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {dimension.id === "macrosystem" ? (
                  // Macrosystem: Always 2 columns, no spanning
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryIndicators.map((indicator) => {
                      const value =
                        indicatorValues[category.id]?.[indicator.id];

                      return (
                        <IndicatorAnalyticsCard
                          key={indicator.id}
                          indicator={indicator}
                          category={category}
                          value={
                            value || { indicatorId: indicator.id, value: null }
                          }
                          dimensionId={dimension.id}
                        />
                      );
                    })}
                  </div>
                ) : (
                  // Other dimensions: Dynamic layout based on analytics count
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    style={{ gridAutoRows: "min-content" }}
                  >
                    {categoryIndicators.map((indicator) => {
                      const value =
                        indicatorValues[category.id]?.[indicator.id];
                      const indicatorType = getIndicatorType(
                        indicator.name,
                        category.name
                      );
                      const isQuantifiable = indicator.quantifiable === "yes";

                      // Count analytics sections that will be rendered
                      let analyticsCount = 0;
                      if (isQuantifiable && value?.value !== null) {
                        // Main chart (always 1)
                        if (
                          indicatorType === "behavior" ||
                          indicatorType === "ecological" ||
                          indicatorType === "access" ||
                          indicatorType === "wellbeing"
                        ) {
                          analyticsCount++;
                        }
                        // Additional breakdowns
                        if (indicatorType === "ecological") analyticsCount++; // sector breakdown
                        analyticsCount++; // zone breakdown (common for quantifiable)
                        if (indicatorType !== "wellbeing") analyticsCount++; // age breakdown
                        analyticsCount++; // insight
                      } else if (
                        indicatorType === "governance" ||
                        indicatorType === "qualitative"
                      ) {
                        analyticsCount = 2; // status assessment/policy status + text
                      }

                      // Determine column span: indicators with 4+ analytics span 2 columns
                      const colSpan =
                        analyticsCount >= 4 ? "md:col-span-2" : "";

                      return (
                        <div key={indicator.id} className={colSpan}>
                          <IndicatorAnalyticsCard
                            indicator={indicator}
                            category={category}
                            value={
                              value || {
                                indicatorId: indicator.id,
                                value: null,
                              }
                            }
                            dimensionId={dimension.id}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
