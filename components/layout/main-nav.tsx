"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <div className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="w-full max-w-[1440px] mx-auto">
        <div className="container flex items-center h-20">
          {/* Logo Section */}
          <div className="w-[180px]">
            <Logo />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80 font-medium",
                    pathname === link.href || pathname?.startsWith(link.href)
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions Section */}
          <div className="w-[180px] flex items-center justify-end gap-2">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <ModeToggle />
              <Button asChild>
                <Link href="mailto:contact@hackrest.com">Contact</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <ModeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container flex flex-col py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors px-2 py-1 rounded-md hover:bg-accent",
                    pathname === link.href || pathname?.startsWith(link.href)
                      ? "text-foreground font-medium bg-accent"
                      : "text-foreground/60"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <Link 
                  href="mailto:contact@hackrest.com"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}