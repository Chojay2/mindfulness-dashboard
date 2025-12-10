import { notFound } from "next/navigation";
import { frameworkData, getDimension, getCategory } from "@/lib/framework-data";
import { BreadcrumbNav } from "@/components/dashboard/FrameworkExplorer/BreadcrumbNav";
import { IndicatorList } from "@/components/dashboard/FrameworkExplorer/IndicatorList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dimensionColors } from "@/lib/config";
import { User, Users, Building2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  User,
  Users,
  Building2,
  Globe,
};

interface CategoryPageProps {
  params: Promise<{ dimension: string; category: string }>;
}

export async function generateStaticParams() {
  const params: Array<{ dimension: string; category: string }> = [];

  frameworkData.dimensions.forEach((dimension) => {
    dimension.categories.forEach((category) => {
      params.push({
        dimension: dimension.id,
        category: category.id,
      });
    });
  });

  return params;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { dimension: dimensionId, category: categoryId } = await params;
  const dimension = getDimension(dimensionId);
  const category = getCategory(dimensionId, categoryId);

  if (!dimension || !category) {
    notFound();
  }

  const Icon = iconMap[dimension.icon] || User;
  const colors = dimensionColors[dimensionId as keyof typeof dimensionColors];
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: dimension.name, href: `/${dimensionId}` },
    { label: category.name, href: `/${dimensionId}/${categoryId}` },
  ];

  return (
    <div className="space-y-6">
      <BreadcrumbNav items={breadcrumbs} />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={cn("rounded-lg p-3", colors.accent)}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">{category.name}</CardTitle>
                <CardDescription className="mt-1">
                  {dimension.name} • {category.indicators.length} indicators
                </CardDescription>
              </div>
            </div>
            <Badge variant="secondary">{dimension.name}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <IndicatorList
            indicators={category.indicators}
            categoryId={categoryId}
            dimensionId={dimensionId}
          />
        </CardContent>
      </Card>
    </div>
  );
}
