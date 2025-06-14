'use client';

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PaginationButtonProps {
  href: string;
  disabled: boolean;
  children: React.ReactNode;
}

export const PaginationButton = ({ 
  href, 
  disabled, 
  children 
}: PaginationButtonProps) => {
  const [isNavigating, setIsNavigating] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || isNavigating) {
      e.preventDefault();
      return;
    }
    setIsNavigating(true);
  };

  return (
    <Button
      variant="outline"
      disabled={disabled || isNavigating}
      asChild
      className="transition-colors hover:border-primary/50"
      onClick={handleClick}
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  );
}; 