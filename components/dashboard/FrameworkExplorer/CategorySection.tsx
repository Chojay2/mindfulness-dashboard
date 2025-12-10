"use client";

import { Category } from "@/types/framework";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { dimensionColors } from "@/lib/config";
import { IndicatorList } from "./IndicatorList";
import { cn } from "@/lib/utils";

interface CategorySectionProps {
  category: Category;
  dimensionId: string;
  dimensionColor: string;
}

export function CategorySection({ category, dimensionId, dimensionColor }: CategorySectionProps) {
  const colors = dimensionColors[dimensionId as keyof typeof dimensionColors];
  
  return (
    <Card>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={category.id} className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center justify-between w-full pr-4">
              <div>
                <CardTitle className="text-lg">{category.name}</CardTitle>
                {category.description && (
                  <CardDescription className="mt-1">{category.description}</CardDescription>
                )}
              </div>
              <Badge variant="secondary" className="ml-auto">
                {category.indicators.length} indicators
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="pt-0">
              <IndicatorList
                indicators={category.indicators}
                categoryId={category.id}
                dimensionId={dimensionId}
              />
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

