"use client";

import { Indicator, Category } from "@/types/framework";
import {
  IndicatorValue,
  TimeSeriesPoint,
  generateTimeSeries,
  generateBreakdownByZone,
  generateBreakdownByAge,
  generateLikertData,
  generateCoverageData,
  generateSectorBreakdown,
  getIndicatorType,
} from "@/lib/mock-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { cn } from "@/lib/utils";
import { SimpleMap } from "./SimpleMap";

interface IndicatorAnalyticsCardProps {
  indicator: Indicator;
  category: Category;
  value: IndicatorValue;
  dimensionId: string;
}

export function IndicatorAnalyticsCard({
  indicator,
  category,
  value,
  dimensionId,
}: IndicatorAnalyticsCardProps) {
  const indicatorType = getIndicatorType(indicator.name, category.name);
  const isQuantifiable = indicator.quantifiable === "yes";

  // Generate data based on indicator type
  const timeSeries =
    isQuantifiable && value.value !== null
      ? generateTimeSeries(indicator.id, value.value, value.trend)
      : [];
  const zoneBreakdown =
    isQuantifiable && value.value !== null
      ? generateBreakdownByZone(indicator.id, value.value)
      : [];
  const ageBreakdown =
    isQuantifiable && value.value !== null
      ? generateBreakdownByAge(indicator.id, value.value)
      : [];
  const coverageData =
    indicatorType === "access" && value.value !== null
      ? generateCoverageData(value.value)
      : [];
  const sectorData =
    indicatorType === "ecological" && value.value !== null
      ? generateSectorBreakdown(indicator.id, value.value * 1000)
      : [];
  const likertData =
    indicatorType === "wellbeing"
      ? generateLikertData(indicator.id, [
          "Youth (18-34)",
          "Adults (35-54)",
          "Elders (55+)",
        ])
      : [];

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "good":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case "critical":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "good":
        return (
          <Badge variant="default" className="bg-green-600">
            ↑ Improving
          </Badge>
        );
      case "warning":
        return <Badge variant="secondary">→ Stable</Badge>;
      case "critical":
        return <Badge variant="destructive">↓ Declining</Badge>;
      default:
        return <Badge variant="outline">→ Stable</Badge>;
    }
  };

  // Sparkline component (mini trend line)
  const Sparkline = ({ data }: { data: TimeSeriesPoint[] }) => {
    if (data.length === 0) return null;

    return (
      <ResponsiveContainer width="100%" height={40}>
        <LineChart
          data={data.slice(-12)}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke="currentColor"
            strokeWidth={2}
            dot={false}
            className="text-primary"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{indicator.name}</CardTitle>
              {value.status && getStatusIcon(value.status)}
            </div>
            <CardDescription className="text-sm">
              {indicator.definition}
            </CardDescription>
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  indicator.quantifiable === "yes"
                    ? "default"
                    : indicator.quantifiable === "partially"
                    ? "secondary"
                    : "outline"
                }
                className="text-xs"
              >
                {indicator.quantifiable === "yes"
                  ? "Quantifiable"
                  : indicator.quantifiable === "partially"
                  ? "Partially"
                  : "Qualitative"}
              </Badge>
              {value.trend && getStatusBadge(value.status)}
            </div>
          </div>

          {isQuantifiable && value.value !== null && (
            <div className="text-right min-w-[120px]">
              <div className="flex items-center justify-end gap-2">
                {value.trend && getTrendIcon(value.trend)}
                <div>
                  <div className="text-3xl font-bold">
                    {value.value}
                    {value.unit && (
                      <span className="text-lg text-muted-foreground ml-1">
                        {value.unit}
                      </span>
                    )}
                  </div>
                  {value.target && (
                    <div className="text-xs text-muted-foreground mt-1">
                      Target: {value.target}
                      {value.unit}
                    </div>
                  )}
                </div>
              </div>
              {timeSeries.length > 0 && (
                <div className="mt-2 h-10 w-full">
                  <Sparkline data={timeSeries} />
                </div>
              )}
            </div>
          )}
        </div>
      </CardHeader>

      {isQuantifiable && value.value !== null && value.target && (
        <CardContent className="pt-0 pb-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress to target</span>
              <span>{Math.round((value.value / value.target) * 100)}%</span>
            </div>
            <Progress
              value={(value.value / value.target) * 100}
              className="h-2"
            />
          </div>
        </CardContent>
      )}

      {/* Analytics Section - Always Visible */}
      <CardContent className="pt-4 space-y-4 border-t">
        {/* For macrosystem: Show map instead of charts */}
        {dimensionId === "macrosystem" && zoneBreakdown.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
              Spatial Distribution
            </h4>
            <SimpleMap
              zones={zoneBreakdown.map((zone) => ({
                name: zone.segment,
                value: zone.value,
              }))}
              indicatorName={indicator.name}
            />
          </div>
        )}

        {/* Main Chart based on indicator type - Skip for macrosystem */}
        {dimensionId !== "macrosystem" &&
          indicatorType === "behavior" &&
          timeSeries.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
                Trend Over Time
              </h4>
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={timeSeries.slice(-12)}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="label"
                    className="text-xs"
                    tick={{ fill: "currentColor" }}
                  />
                  <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4e9978"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

        {dimensionId !== "macrosystem" &&
          indicatorType === "ecological" &&
          timeSeries.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
                Long-term Trend
              </h4>
              <ResponsiveContainer width="100%" height={150}>
                <AreaChart data={timeSeries}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="label"
                    className="text-xs"
                    tick={{ fill: "currentColor" }}
                  />
                  <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#4e9978"
                    fill="#4e9978"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}

        {dimensionId !== "macrosystem" &&
          indicatorType === "access" &&
          coverageData.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
                Coverage by Distance
              </h4>
              <ResponsiveContainer width="100%" height={150}>
                <AreaChart data={coverageData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="distance"
                    className="text-xs"
                    tick={{ fill: "currentColor" }}
                    label={{
                      value: "Distance (km)",
                      position: "insideBottom",
                      offset: -5,
                    }}
                  />
                  <YAxis
                    className="text-xs"
                    tick={{ fill: "currentColor" }}
                    label={{
                      value: "Coverage (%)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="coverage"
                    stroke="#4e9978"
                    fill="#4e9978"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}

        {dimensionId !== "macrosystem" &&
          indicatorType === "wellbeing" &&
          likertData.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
                Perception by Age Group
              </h4>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={likertData} layout="vertical">
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis type="number" className="text-xs" />
                  <YAxis
                    dataKey="category"
                    type="category"
                    className="text-xs"
                    width={120}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="stronglyDisagree"
                    stackId="a"
                    fill="#ef4444"
                    name="Strongly Disagree"
                  />
                  <Bar
                    dataKey="disagree"
                    stackId="a"
                    fill="#f97316"
                    name="Disagree"
                  />
                  <Bar
                    dataKey="neutral"
                    stackId="a"
                    fill="#eab308"
                    name="Neutral"
                  />
                  <Bar
                    dataKey="agree"
                    stackId="a"
                    fill="#22c55e"
                    name="Agree"
                  />
                  <Bar
                    dataKey="stronglyAgree"
                    stackId="a"
                    fill="#15803d"
                    name="Strongly Agree"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

        {dimensionId !== "macrosystem" &&
          indicatorType === "ecological" &&
          sectorData.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
                Breakdown by Sector
              </h4>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={sectorData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="sector"
                    className="text-xs"
                    tick={{ fill: "currentColor" }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Bar dataKey="value" fill="#4e9978">
                    {sectorData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={`hsl(${150 + index * 15}, 33%, ${
                          45 + index * 5
                        }%)`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

        {/* Breakdown Charts - Skip for macrosystem */}
        {dimensionId !== "macrosystem" && zoneBreakdown.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
              Breakdown by Zone
            </h4>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={zoneBreakdown}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="segment"
                  className="text-xs"
                  tick={{ fill: "currentColor" }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Bar dataKey="value" fill="#4e9978" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {dimensionId !== "macrosystem" &&
          ageBreakdown.length > 0 &&
          indicatorType !== "wellbeing" && (
            <div>
              <h4 className="text-xs font-semibold mb-2 text-muted-foreground">
                Breakdown by Age Group
              </h4>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={ageBreakdown}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="segment"
                    className="text-xs"
                    tick={{ fill: "currentColor" }}
                  />
                  <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Bar dataKey="value" fill="#4e9978" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

        {/* Insight Text */}
        {dimensionId === "macrosystem" && (
          <div className="rounded-lg bg-muted/30 p-3">
            <h4 className="text-xs font-semibold mb-1.5 text-muted-foreground">
              Insight
            </h4>
            <p className="text-xs" style={{ color: "hsl(var(--body-text))" }}>
              {indicator.name} shows spatial variation across zones.{" "}
              {zoneBreakdown.length > 0
                ? `${zoneBreakdown[0]?.segment} zone shows the ${
                    zoneBreakdown[0]?.value > 70
                      ? "highest"
                      : zoneBreakdown[0]?.value > 40
                      ? "moderate"
                      : "lowest"
                  } performance.`
                : ""}
            </p>
          </div>
        )}
        {dimensionId !== "macrosystem" &&
          indicatorType !== "governance" &&
          indicatorType !== "qualitative" && (
            <div className="rounded-lg bg-muted/30 p-3">
              <h4 className="text-xs font-semibold mb-1.5 text-muted-foreground">
                Insight
              </h4>
              <p className="text-xs" style={{ color: "hsl(var(--body-text))" }}>
                {indicatorType === "behavior" &&
                  `${indicator.name} shows ${
                    value.trend === "up"
                      ? "improving"
                      : value.trend === "down"
                      ? "declining"
                      : "stable"
                  } trends. ${
                    zoneBreakdown.length > 0
                      ? `Highest participation in ${zoneBreakdown[0]?.segment} zone.`
                      : ""
                  }`}
                {indicatorType === "access" &&
                  `${indicator.name} coverage is ${value.value}% overall. ${
                    coverageData.length > 0
                      ? `Within 1km, ${Math.round(
                          coverageData.find((d) => d.distance === 1.0)
                            ?.coverage || 0
                        )}% of population has access.`
                      : ""
                  }`}
                {indicatorType === "wellbeing" &&
                  `${indicator.name} perception varies by age group. ${
                    likertData.length > 0
                      ? `Elders show highest positive perception at ${Math.round(
                          likertData[2]?.agree + likertData[2]?.stronglyAgree ||
                            0
                        )}%.`
                      : ""
                  }`}
                {indicatorType === "ecological" &&
                  `${indicator.name} is ${value.value}${value.unit || ""}. ${
                    sectorData.length > 0
                      ? `Transport sector contributes ${Math.round(
                          sectorData.find((s) => s.sector === "Transport")
                            ?.percentage || 0
                        )}% of total.`
                      : ""
                  }`}
                {indicatorType === "resource" &&
                  `${indicator.name} shows ${
                    zoneBreakdown.length > 0
                      ? `${zoneBreakdown[0]?.segment} zone has the highest concentration.`
                      : "even distribution across zones."
                  }`}
              </p>
            </div>
          )}

        {indicatorType === "governance" && (
          <div className="space-y-3">
            <div>
              <h5 className="text-xs font-semibold mb-2 text-muted-foreground">
                Status Assessment
              </h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Current Performance</span>
                  <span className="font-medium">{value.value || 0}%</span>
                </div>
                <div className="relative h-6 bg-muted rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 bg-red-500/20"></div>
                    <div className="flex-1 bg-yellow-500/20"></div>
                    <div className="flex-1 bg-green-500/20"></div>
                    <div className="flex-1 bg-green-500/30"></div>
                  </div>
                  <div
                    className="absolute h-full transition-all"
                    style={{
                      width: `${value.value || 0}%`,
                      backgroundColor: "#4e9978",
                    }}
                  ></div>
                  {value.target && (
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-foreground"
                      style={{ left: `${value.target}%` }}
                    ></div>
                  )}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Poor</span>
                  <span>Fair</span>
                  <span>Good</span>
                  <span>Excellent</span>
                  {value.target && (
                    <span className="font-medium">Target: {value.target}%</span>
                  )}
                </div>
              </div>
            </div>
            <p className="text-xs" style={{ color: "hsl(var(--body-text))" }}>
              {indicator.name} status is{" "}
              {value.status === "good"
                ? "on track"
                : value.status === "warning"
                ? "needs attention"
                : "critical"}
              .
            </p>
          </div>
        )}

        {indicatorType === "qualitative" && (
          <div className="space-y-3">
            <div>
              <h5 className="text-xs font-semibold mb-2 text-muted-foreground">
                Policy Status
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Drafted",
                  "Consulted",
                  "Adopted",
                  "Implemented",
                  "Evaluated",
                ].map((stage, index) => {
                  const isComplete = index < 3; // Mock: first 3 stages complete
                  return (
                    <div
                      key={stage}
                      className={cn(
                        "rounded-lg p-3 border-2 text-center",
                        isComplete
                          ? "border-green-500 bg-green-500/10"
                          : "border-muted bg-muted/50"
                      )}
                    >
                      <div
                        className={cn(
                          "text-xs font-semibold mb-1",
                          isComplete
                            ? "text-green-700"
                            : "text-muted-foreground"
                        )}
                      >
                        {stage}
                      </div>
                      {isComplete && (
                        <CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-xs" style={{ color: "hsl(var(--body-text))" }}>
              {indicator.name} is a qualitative measure requiring ongoing
              assessment and monitoring.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
