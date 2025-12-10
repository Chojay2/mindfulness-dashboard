"use client";

import { useState } from "react";
import { ActivityImpact } from "@/types/dashboard";
import { generateActivityImpacts } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Cloud, Trees, Zap, Heart, Users, Music } from "lucide-react";

const iconMap: Record<string, any> = {
  Cloud,
  Trees,
  Zap,
  Heart,
  Users,
  Music,
};

export function ImpactActivityList({ data = generateActivityImpacts() }: { data?: ActivityImpact[] }) {
  const environmentActivities = data.filter(a => a.category === 'environment');
  const communityActivities = data.filter(a => a.category === 'community');

  const ActivityItem = ({ activity }: { activity: ActivityImpact }) => {
    const Icon = activity.icon ? iconMap[activity.icon] : null;
    
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
            <span className="text-sm font-medium">{activity.name}</span>
          </div>
          <span className="text-sm text-muted-foreground">{activity.percentage}%</span>
        </div>
        <Progress value={activity.percentage} className="h-2" />
      </div>
    );
  };

  return (
    <Tabs defaultValue="environment" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="environment">Environment</TabsTrigger>
        <TabsTrigger value="community">Community</TabsTrigger>
      </TabsList>
      <TabsContent value="environment" className="space-y-4 mt-4">
        {environmentActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </TabsContent>
      <TabsContent value="community" className="space-y-4 mt-4">
        {communityActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </TabsContent>
    </Tabs>
  );
}

