"use client";

import { Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly }: LogoProps) {
  return (
    <div className="flex items-center gap-2 ">
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
     <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center px-4 py-1  space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5 z-10"
            href="/me"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span  className="text-primary">me</span>
          </motion.a></div>
  
  );
}