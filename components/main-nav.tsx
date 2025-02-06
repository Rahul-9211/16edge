"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-16">
        <Link href="/" className="mr-6 text-xl font-bold">
          HackRest
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/projects")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/blog")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center justify-end flex-1 gap-2">
          <ModeToggle />
          <Button asChild>
            <Link href="mailto:rahul.rawat.fec@gmail.com">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}