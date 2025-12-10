"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { frameworkData } from "@/lib/framework-data";
import { dimensionColors } from "@/lib/config";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { 
  User, 
  Users, 
  Building2, 
  Globe,
  BarChart3
} from "lucide-react";

const iconMap: Record<string, any> = {
  User,
  Users,
  Building2,
  Globe,
};

export function Sidebar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/overview' && pathname === '/overview') return true;
    if (path !== '/overview' && pathname === path) return true;
    return false;
  };

  return (
    <div className="flex h-screen w-[300px] flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-lg font-semibold">Mindfulness Dashboard</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="mb-4">
          <Link
            href="/overview"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              (pathname === '/' || pathname === '/overview')
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <BarChart3 className="h-5 w-5" />
            <span>Overview</span>
          </Link>
        </div>

        <Separator className="my-4" />

        <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Framework Dimensions
        </div>

        <div className="space-y-1">
          {frameworkData.dimensions.map((dimension) => {
            const Icon = iconMap[dimension.icon] || User;
            const colors = dimensionColors[dimension.id as keyof typeof dimensionColors];
            const dimensionPath = `/${dimension.id}`;
            const isDimensionActive = isActive(dimensionPath);
            
            return (
              <Link
                key={dimension.id}
                href={dimensionPath}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isDimensionActive
                    ? `${colors.bg} ${colors.text}`
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{dimension.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

