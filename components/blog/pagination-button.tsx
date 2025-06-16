"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface PaginationButtonProps {
  href: string;
  disabled?: boolean;
  children: ReactNode;
}

export function PaginationButton({ href, disabled, children }: PaginationButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      disabled={disabled}
      className="min-w-[100px]"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
} 