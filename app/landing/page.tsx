import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  ArrowRight,
  BarChart3,
  Map,
  TrendingUp,
} from "lucide-react";
import { frameworkData } from "@/lib/framework-data";
import { dimensionColors } from "@/lib/config";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  User,
  Users,
  Building2,
  Globe,
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Mindfulness City
            <br />
            <span className="text-primary">Indicator Framework</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive dashboard for tracking and analyzing mindfulness
            indicators across individual, social, governance, and ecological
            dimensions.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/overview">
              <Button size="lg" className="text-lg px-8">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Framework Dimensions
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {frameworkData.dimensions.map((dimension) => {
              const Icon = iconMap[dimension.icon] || User;
              const colors =
                dimensionColors[dimension.id as keyof typeof dimensionColors];

              return (
                <Card
                  key={dimension.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className={cn("rounded-lg p-3 w-fit mb-3", colors.bg)}>
                      <Icon className={cn("h-8 w-8", colors.text)} />
                    </div>
                    <CardTitle>{dimension.name}</CardTitle>
                    <CardDescription>{dimension.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Categories
                        </span>
                        <span className="font-medium">
                          {dimension.categories.length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Indicators
                        </span>
                        <span className="font-medium">
                          {dimension.categories.reduce(
                            (acc, cat) => acc + cat.indicators.length,
                            0
                          )}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dashboard Features
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Comprehensive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detailed analytics and visualizations for each indicator with
                  trends, breakdowns, and insights.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Map className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Spatial Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Geographic maps and zone-based analysis for ecological and
                  spatial indicators.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Trend Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track performance over time with historical data and trend
                  indicators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Explore?</h2>
          <p className="text-lg text-muted-foreground">
            Access the full dashboard to view detailed analytics and insights
            across all framework dimensions.
          </p>
          <Link href="/overview">
            <Button size="lg" className="text-lg px-8">
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
