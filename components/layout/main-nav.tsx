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
import { motion, AnimatePresence } from "framer-motion";

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Our Work" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <div className={cn(
      "border-b border-gray-200 sticky top-0 z-[60] transition-all duration-300",
      isScrolled 
        ? "bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60" 
        : "bg-white"
    )}>
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
                    "transition-colors hover:text-black-900 font-semibold",
                    pathname === link.href || pathname?.startsWith(link.href)
                      ? "text-gray-900"
                      : "text-gray-600"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <ServicesDropdown />
            </nav>
          </div>

          {/* Actions Section */}
          <div className="w-[180px] flex items-center justify-end gap-2">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
           
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
           
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
                      className="w-full h-[2px] bg-gray-900 block mb-[6px] origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                      className="w-full h-[2px] bg-gray-900 block mb-[6px]"
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
              className="md:hidden border-t bg-white"
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
                          "transition-colors px-6 py-3 rounded-lg hover:bg-gray-100 block",
                          pathname === link.href ||
                            pathname?.startsWith(link.href)
                            ? "text-gray-900 font-medium bg-gray-100"
                            : "text-gray-600"
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
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="px-2"
                >
                  <Button asChild className="w-full py-6 bg-primary hover:bg-primary/90 text-white">
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
