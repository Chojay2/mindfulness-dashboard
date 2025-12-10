"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { MobileSidebar } from "./MobileSidebar";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-[#fafbfb] px-4 md:px-6">
      <div className="flex items-center gap-4">
        <MobileSidebar />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        <div className="hidden md:flex items-center gap-3">
          <Avatar>
            <AvatarFallback>WC</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">W Chojay</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            View insight
          </Button>
          <Button size="sm">Set Goals</Button>
        </div>
      </div>
    </header>
  );
}
