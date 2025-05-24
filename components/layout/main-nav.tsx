"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";
import { Menu } from "lucide-react";
import { ServicesDropdown } from "@/components/services-dropdown";
import { ToolsDropdown } from "@/components/tools-dropdown";
import { motion, AnimatePresence } from "framer-motion";

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    // { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    // { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <div className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="w-full max-w-[1440px] mx-auto">
        <div className="container flex items-center h-20 m-auto pl-2 sm:pl-0">
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
              <ServicesDropdown />
              <ToolsDropdown />
            </nav>
          </div>

          {/* Actions Section */}
          <div className="w-[180px] flex items-center justify-end gap-2">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <ModeToggle />
              <Button asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <ModeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 relative w-10 h-10"
                onClick={toggleMenu}
              >
                <div className="w-6 flex flex-col items-center justify-center">
                  <motion.span
                    animate={
                      isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.2 }}
                    className="w-full h-[2px] bg-foreground block mb-[6px] origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-[2px] bg-foreground block mb-[6px]"
                  />
                  <motion.span
                    animate={
                      isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.2 }}
                    className="w-full h-[2px] bg-foreground block origin-center"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden border-t bg-background"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="container flex flex-col py-6 px-4">
                <div className="space-y-3 mb-6">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "transition-colors px-6 py-3 rounded-lg hover:bg-accent block",
                          pathname === link.href ||
                            pathname?.startsWith(link.href)
                            ? "text-foreground font-medium bg-accent"
                            : "text-foreground/60"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="px-2"
                  >
                    <ServicesDropdown isMobile />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="px-2"
                  >
                    <ToolsDropdown isMobile />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="px-2"
                >
                  <Button asChild className="w-full py-6">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
