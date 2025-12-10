"use client";

import { frameworkData } from "@/lib/framework-data";
import { getAllIndicatorValues } from "@/lib/mock-data";
import { dimensionColors } from "@/lib/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  User,
  Users,
  Building2,
  Globe,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const iconMap: Record<string, any> = {
  User,
  Users,
  Building2,
  Globe,
};

export function Overview() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Calculate scores for each dimension
  const dimensionScores = frameworkData.dimensions.map((dimension) => {
    const indicatorValues = getAllIndicatorValues(dimension.id);
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

    // Get top 3 key indicators
    const keyIndicators = dimension.categories
      .flatMap((cat) =>
        cat.indicators
          .filter((ind) => ind.quantifiable === "yes")
          .map((ind) => ({
            ...ind,
            category: cat.name,
            value: indicatorValues[cat.id]?.[ind.id]?.value || 0,
            trend: indicatorValues[cat.id]?.[ind.id]?.trend,
          }))
      )
      .sort((a, b) => (b.value || 0) - (a.value || 0))
      .slice(0, 3);

    return {
      ...dimension,
      score: averageScore,
      keyIndicators,
    };
  });

  // Overall score
  const overallScore = Math.round(
    dimensionScores.reduce((sum, dim) => sum + dim.score, 0) /
      dimensionScores.length
  );

  // Generate trend data for overall performance
  const trendData = Array.from({ length: 6 }, (_, i) => ({
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i],
    score: overallScore + (Math.random() - 0.5) * 10,
  }));

  // PDF Generation Functions
  const generateSummaryPDF = async () => {
    if (!overviewRef.current) return;

    setIsGeneratingPDF(true);
    try {
      const canvas = await html2canvas(overviewRef.current, {
        scale: 2,
        backgroundColor: "#fafbfb",
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(
        `mindfulness-dashboard-summary-${
          new Date().toISOString().split("T")[0]
        }.pdf`
      );
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const downloadFrameworkPDF = () => {
    try {
      const link = document.createElement("a");
      link.href = "/frame-work.pdf";
      link.download = "framework.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div ref={overviewRef} className="space-y-6">
      {/* Enhanced Header with Gradient */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#142019] via-[#286D28] to-[#4e9978] p-8 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('/mandala.png')] opacity-5 bg-cover bg-center"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Dashboard Overview
                </h1>
              </div>
              <p className="text-lg text-white/90 max-w-2xl">
                Comprehensive insights and key metrics across all framework
                dimensions
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={generateSummaryPDF}
                disabled={isGeneratingPDF}
                size="lg"
                className="bg-white text-[#142019] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="h-5 w-5 mr-2" />
                {isGeneratingPDF ? "Generating..." : "Download Summary"}
              </Button>
              <Button
                onClick={downloadFrameworkPDF}
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <FileText className="h-5 w-5 mr-2" />
                Download Framework
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Overall Score Card */}
      <Card className="border-2 border-[#286D28]/10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
        <div className=" p-1">
          <CardHeader className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-[#142019]">
                  Overall Performance
                </CardTitle>
                <CardDescription className="text-base mt-1">
                  Combined score across all dimensions
                </CardDescription>
              </div>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#286D28]/30 to-[#4e9978]/30 rounded-lg text-[#286D28] backdrop-blur-sm">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">Performance</span>
              </div>
            </div>
          </CardHeader>
        </div>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Score Display */}
            <div className="text-center md:text-left space-y-3">
              <div className="inline-block p-6 bg-gradient-to-br from-[#286D28]/40 to-[#4e9978]/40 rounded-2xl shadow-lg border border-[#286D28]/20">
                <div className="text-6xl font-bold text-[#286D28] mb-2">
                  {overallScore}%
                </div>
                <div className="text-sm text-[#286D28]/80 font-medium">
                  Overall Score
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                {overallScore >= 70 ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <TrendingUp className="h-5 w-5" />
                    <span className="font-semibold">Excellent</span>
                  </div>
                ) : overallScore >= 50 ? (
                  <div className="flex items-center gap-2 text-yellow-600">
                    <TrendingUp className="h-5 w-5" />
                    <span className="font-semibold">Good</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-orange-600">
                    <TrendingDown className="h-5 w-5" />
                    <span className="font-semibold">Needs Improvement</span>
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-4 flex flex-col justify-center">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-[#142019]">
                  Performance Level
                </span>
                <span className="font-bold text-[#286D28]">
                  {overallScore}%
                </span>
              </div>
              <div className="relative">
                <Progress value={overallScore} className="h-4 bg-[#286D28]/5" />
                <div
                  className="absolute top-0 left-0 h-4 bg-gradient-to-r from-[#286D28]/40 to-[#4e9978]/40 rounded-full transition-all duration-500"
                  style={{ width: `${overallScore}%` }}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-semibold text-gray-600">0%</div>
                  <div className="text-gray-400">Low</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-600">50%</div>
                  <div className="text-gray-400">Medium</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-600">100%</div>
                  <div className="text-gray-400">High</div>
                </div>
              </div>
            </div>

            {/* Trend Chart */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#142019] mb-3">
                6-Month Trend
              </h4>
              <ResponsiveContainer width="100%" height={120}>
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#286D28"
                        stopOpacity={0.15}
                      />
                      <stop offset="95%" stopColor="#286D28" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#286D28"
                    strokeWidth={2}
                    strokeOpacity={0.6}
                    fill="url(#colorScore)"
                    dot={{ fill: "#286D28", r: 3, fillOpacity: 0.6 }}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#666", fontSize: 12 }}
                    axisLine={{ stroke: "#e5e7eb" }}
                  />
                  <YAxis
                    tick={{ fill: "#666", fontSize: 12 }}
                    axisLine={{ stroke: "#e5e7eb" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#142019",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Dimension Cards with Key Metrics */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {dimensionScores.map((dimension) => {
          const Icon = iconMap[dimension.icon] || User;
          const colors =
            dimensionColors[dimension.id as keyof typeof dimensionColors];

          const scoreColor =
            dimension.score >= 70
              ? "from-green-400/40 to-green-500/40"
              : dimension.score >= 50
              ? "from-yellow-400/40 to-orange-400/40"
              : "from-orange-400/40 to-red-400/40";

          return (
            <Card
              key={dimension.id}
              className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#286D28]/20 overflow-hidden transform hover:-translate-y-1 bg-white"
            >
              <div
                className={cn(
                  "h-2 bg-gradient-to-r",
                  dimension.id === "micro"
                    ? "from-blue-400/50 to-blue-500/50"
                    : dimension.id === "meso"
                    ? "from-green-400/50 to-green-500/50"
                    : dimension.id === "exosystem"
                    ? "from-orange-400/50 to-orange-500/50"
                    : "from-purple-400/50 to-purple-500/50"
                )}
              />

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={cn(
                        "rounded-xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300",
                        colors.bg
                      )}
                    >
                      <Icon className={cn("h-8 w-8", colors.text)} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-[#142019] mb-1">
                        {dimension.name}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {dimension.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Link
                    href={`/${dimension.id}`}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-[#286D28] text-gray-600 hover:text-white transition-all duration-300 group-hover:scale-110"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Enhanced Score Display */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#142019]">
                      Overall Score
                    </span>
                    <div
                      className={cn(
                        "px-4 py-1.5 rounded-full font-bold text-lg shadow-sm border",
                        dimension.score >= 70
                          ? "bg-green-50/80 text-green-700 border-green-200/50"
                          : dimension.score >= 50
                          ? "bg-yellow-50/80 text-yellow-700 border-yellow-200/50"
                          : "bg-orange-50/80 text-orange-700 border-orange-200/50"
                      )}
                    >
                      {dimension.score}%
                    </div>
                  </div>
                  <div className="relative">
                    <Progress
                      value={dimension.score}
                      className="h-3 bg-gray-100"
                    />
                    <div
                      className={cn(
                        "absolute top-0 left-0 h-3 rounded-full transition-all duration-500",
                        `bg-gradient-to-r ${scoreColor}`
                      )}
                      style={{ width: `${dimension.score}%` }}
                    />
                  </div>
                </div>

                {/* Key Indicators with Enhanced Design */}
                <div className="bg-gradient-to-br from-gray-50/50 to-white rounded-xl p-4 border border-gray-100">
                  <h4 className="text-sm font-bold text-[#142019] mb-4 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#286D28]" />
                    Top Key Indicators
                  </h4>
                  <div className="space-y-3">
                    {dimension.keyIndicators.map((indicator, idx) => (
                      <div
                        key={indicator.id}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-[#286D28]/30 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 border",
                              idx === 0
                                ? "bg-[#286D28]/20 text-[#286D28] border-[#286D28]/30"
                                : idx === 1
                                ? "bg-blue-100 text-blue-700 border-blue-200"
                                : "bg-orange-100 text-orange-700 border-orange-200"
                            )}
                          >
                            {idx + 1}
                          </div>
                          <span className="text-sm font-medium text-gray-700 truncate">
                            {indicator.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                          {indicator.trend === "up" && (
                            <div className="p-1 bg-green-100 rounded-full">
                              <TrendingUp className="h-4 w-4 text-green-600" />
                            </div>
                          )}
                          {indicator.trend === "down" && (
                            <div className="p-1 bg-red-100 rounded-full">
                              <TrendingDown className="h-4 w-4 text-red-600" />
                            </div>
                          )}
                          <span className="font-bold text-[#142019] min-w-[3rem] text-right">
                            {indicator.value}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center p-4 bg-gradient-to-br from-gray-50/50 to-white rounded-xl border border-gray-100 hover:border-[#286D28]/20 transition-all duration-200">
                    <div className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                      Categories
                    </div>
                    <div className="text-3xl font-bold text-[#142019]">
                      {dimension.categories.length}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-gray-50/50 to-white rounded-xl border border-gray-100 hover:border-[#286D28]/20 transition-all duration-200">
                    <div className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                      Indicators
                    </div>
                    <div className="text-3xl font-bold text-[#142019]">
                      {dimension.categories.reduce(
                        (acc, cat) => acc + cat.indicators.length,
                        0
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
