"use client";

import { Indicator } from "@/types/framework";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "./BreadcrumbNav";
import { getDimension, getCategory } from "@/lib/framework-data";
import { X } from "lucide-react";

interface IndicatorDetailPanelProps {
  indicator: Indicator;
  categoryId: string;
  dimensionId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function IndicatorDetailPanel({
  indicator,
  categoryId,
  dimensionId,
  isOpen,
  onClose
}: IndicatorDetailPanelProps) {
  const dimension = getDimension(dimensionId);
  const category = getCategory(dimensionId, categoryId);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: dimension?.name || '', href: `/${dimensionId}` },
    { label: category?.name || '', href: `/${dimensionId}/${categoryId}` },
    { label: indicator.name }
  ];

  const getQuantifiableBadgeVariant = (status: string) => {
    switch (status) {
      case 'yes':
        return 'default';
      case 'no':
        return 'secondary';
      case 'partially':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <SheetTitle className="text-2xl mb-2">{indicator.name}</SheetTitle>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant={getQuantifiableBadgeVariant(indicator.quantifiable)}>
                  {indicator.quantifiable === 'yes' ? 'Quantifiable' : 
                   indicator.quantifiable === 'no' ? 'Not Quantifiable' : 
                   'Partially Quantifiable'}
                </Badge>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <BreadcrumbNav items={breadcrumbs} />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              Definition
            </h3>
            <p className="text-lg leading-relaxed">{indicator.definition}</p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              Context
            </h3>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium">Dimension: </span>
                <span className="text-sm text-muted-foreground">{dimension?.name}</span>
              </div>
              <div>
                <span className="text-sm font-medium">Category: </span>
                <span className="text-sm text-muted-foreground">{category?.name}</span>
              </div>
            </div>
          </div>

          {/* Placeholder for future data visualization */}
          <div className="border-t pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              Data & Metrics
            </h3>
            <p className="text-sm text-muted-foreground italic">
              Data visualization will be available here in the future.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

