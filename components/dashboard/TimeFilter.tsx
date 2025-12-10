"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

const timeRanges = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "1y", label: "Last year" },
  { value: "custom", label: "Custom range" },
];

export function TimeFilter() {
  const [selectedRange, setSelectedRange] = useState("30d");
  const [dateRange, setDateRange] = useState({
    start: new Date(2023, 0, 24),
    end: new Date(2023, 1, 24),
  });

  return (
    <div className="flex items-center gap-4">
      <Select value={selectedRange} onValueChange={setSelectedRange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select time range" />
        </SelectTrigger>
        <SelectContent>
          {timeRanges.map((range) => (
            <SelectItem key={range.value} value={range.value}>
              {range.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {selectedRange === "custom" && (
        <div className="text-sm text-muted-foreground">
          {format(dateRange.start, "MMM d")} – {format(dateRange.end, "MMM d, yyyy")}
        </div>
      )}
    </div>
  );
}

