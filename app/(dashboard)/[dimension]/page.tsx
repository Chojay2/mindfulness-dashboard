import { notFound } from "next/navigation";
import { frameworkData, getDimension } from "@/lib/framework-data";
import { DimensionAnalytics } from "@/components/dashboard/DimensionAnalytics";

interface DimensionPageProps {
  params: Promise<{ dimension: string }>;
}

export async function generateStaticParams() {
  return frameworkData.dimensions.map((dimension) => ({
    dimension: dimension.id,
  }));
}

export default async function DimensionPage({ params }: DimensionPageProps) {
  const { dimension: dimensionId } = await params;
  const dimension = getDimension(dimensionId);

  if (!dimension) {
    notFound();
  }

  return <DimensionAnalytics dimension={dimension} />;
}
