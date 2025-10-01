"use client";

import { Target, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly }: LogoProps) {
  return (
    <div className="flex items-center gap-2 ">
      <Link href="/" className={cn("flex items-center gap-2 hover:opacity-90", className)}>
      {/* <div className="relative flex items-center justify-center w-8 h-8 bg-gradient-to-br from-maroon-600 to-maroon-800 rounded-lg">
        <Target className="w-5 h-5 text-white absolute" />
      </div> */}
      {!iconOnly && (
        <span className="font-bold text-xl bg-gradient-to-r from-maroon-600 via-maroon-800 to-burgundy-700 bg-clip-text text-transparent">
          <Image src="/edge.svg" alt="Logo" width={180} height={100} />
        </span>
      )}
      
    </Link>
     {/* <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center px-4 py-1  space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5 z-10"
            href="/contact"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span  className="text-primary">Get Started</span>
          </motion.a> */}
          </div>
  
  );
}