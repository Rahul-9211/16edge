"use client";
import { services } from "@/config/services";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function ServicesDropdown({ isMobile = false }: { isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname?.startsWith("/services");
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

  // Mobile version
  if (isMobile) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center justify-between w-full px-2 py-1.5 rounded-md transition-colors hover:bg-gray-100",
            isActive ? "text-gray-900 font-medium bg-gray-100" : "text-gray-600"
          )}
        >
          <span>Services</span>
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
                  href="/services"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>All Services</span>
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.link}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.title}</span>
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
      className="relative z-[100]" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-sm hover:text-gray-900 transition-colors group font-semibold",
          isActive ? "text-gray-900" : "text-gray-600"
        )}
      >
        <span className="relative">
          Services
        </span>
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "transform rotate-180"
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute top-full left-0 mt-2 w-[480px] bg-white border border-gray-200 rounded-xl shadow-xl z-[100]"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <div className="p-4">
              <Link
                href="/services"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors group mb-3"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-base text-gray-900">All Services</div>
                  <div className="text-sm text-gray-600">
                    Explore our complete range of services
                  </div>
                </div>
              </Link>

              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={service.title}
                  >
                    <Link
                      href={service.link}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <div className={cn(
                        "p-2 rounded-lg bg-primary group-hover:scale-110 transition-transform"
                      )}>
                        <service.icon className="w-5 h-5 text-white drop-shadow-sm" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                          {service.title}
                        </div>
                        <div className="text-sm text-gray-600 line-clamp-1">
                          {service.description}
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