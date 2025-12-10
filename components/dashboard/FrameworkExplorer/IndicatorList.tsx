"use client";

import { useState } from "react";
import { Indicator } from "@/types/framework";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndicatorDetailPanel } from "./IndicatorDetailPanel";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndicatorListProps {
  indicators: Indicator[];
  categoryId: string;
  dimensionId: string;
}

export function IndicatorList({ indicators, categoryId, dimensionId }: IndicatorListProps) {
  const [selectedIndicator, setSelectedIndicator] = useState<Indicator | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleIndicatorClick = (indicator: Indicator) => {
    setSelectedIndicator(indicator);
    setIsPanelOpen(true);
  };

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
    <>
      <div className="space-y-2">
        {indicators.map((indicator) => (
          <div
            key={indicator.id}
            className={cn(
              "group flex items-center justify-between rounded-lg border p-4 transition-colors",
              "hover:bg-accent cursor-pointer"
            )}
            onClick={() => handleIndicatorClick(indicator)}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h4 className="font-medium">{indicator.name}</h4>
                <Badge variant={getQuantifiableBadgeVariant(indicator.quantifiable)}>
                  {indicator.quantifiable === 'yes' ? 'Quantifiable' : 
                   indicator.quantifiable === 'no' ? 'Not Quantifiable' : 
                   'Partially Quantifiable'}
                </Badge>
              </div>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {indicator.definition}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-4 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                handleIndicatorClick(indicator);
              }}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {selectedIndicator && (
        <IndicatorDetailPanel
          indicator={selectedIndicator}
          categoryId={categoryId}
          dimensionId={dimensionId}
          isOpen={isPanelOpen}
          onClose={() => {
            setIsPanelOpen(false);
            setSelectedIndicator(null);
          }}
        />
      )}
    </>
  );
}

