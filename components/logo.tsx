"use client";

import { Code2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 hover:opacity-90", className)}>
      <div className="relative flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
        <Code2 className="w-5 h-5 text-primary-foreground absolute" />
        {/* <Code2 className="w-5 h-5 text-primary-foreground/50 absolute rotate-45" /> */}
      </div>
      {!iconOnly && (
        <span className="font-bold text-xl">
          Hack<span className="text-primary">Rest</span>
        </span>
      )}
    </Link>
  );
}