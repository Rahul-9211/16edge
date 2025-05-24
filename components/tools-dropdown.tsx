"use client";

import { services } from "@/config/services";
import { ChevronDown, ChevronRight, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function ToolsDropdown({ isMobile = false }: { isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname?.startsWith("/tools");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const tools = [
    {
      title: "Compiler",
      link: "/compiler",
      description: "Online code compiler and editor",
      icon: Code2,
      color: "from-blue-500 to-blue-600",
    },
    // Add more tools here as needed
  ];

  // Mobile version
  if (isMobile) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center justify-between w-full px-2 py-1.5 rounded-md transition-colors hover:bg-accent",
            isActive ? "text-foreground font-medium bg-accent" : "text-foreground/60"
          )}
        >
          <span>Tools</span>
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pl-3 py-2 space-y-1">
                <Link
                  href="/tools"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>All Tools</span>
                </Link>
                {tools.map((tool) => (
                  <Link
                    key={tool.title}
                    href={tool.link}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-accent/50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <tool.icon className="w-4 h-4" />
                    <span>{tool.title}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop version
  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-sm hover:text-foreground/80 transition-colors group",
          isActive ? "text-foreground" : "text-foreground/60"
        )}
      >
        <span className="relative">
          Tools
          {isActive && (
            <motion.div
              layoutId="tools-underline"
              className="absolute left-0 right-0 h-0.5 -bottom-1 bg-primary"
            />
          )}
        </span>
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "transform rotate-180"
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute top-full left-0 mt-1 w-[480px] bg-background backdrop-blur-sm border rounded-xl shadow-lg z-50"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <div className="p-4">
              <Link
                href="/tools"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group mb-3"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-base">All Tools</div>
                  <div className="text-sm text-muted-foreground">
                    Explore our complete range of tools
                  </div>
                </div>
              </Link>

              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={tool.title}
                  >
                    <Link
                      href={tool.link}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className={cn(
                        "p-2 rounded-lg",
                        `bg-gradient-to-br ${tool.color} group-hover:scale-110 transition-transform`
                      )}>
                        <tool.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {tool.title}
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {tool.description}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 