"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { generateBranches } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function BranchSelector() {
  const branches = generateBranches();
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {branches.map((branch) => (
        <Button
          key={branch}
          variant={selectedBranch === branch ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedBranch(branch)}
          className={cn(
            "whitespace-nowrap",
            selectedBranch === branch && "bg-primary text-primary-foreground"
          )}
        >
          {branch}
        </Button>
      ))}
    </div>
  );
}

