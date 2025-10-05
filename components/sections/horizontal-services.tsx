'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { services } from '@/config/services';
import { BarChart3, Search, Users, Laptop, Palette, Target, ArrowRight } from 'lucide-react';

interface Card {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: any;
  link: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  borderColor: string;
}

interface HorizontalScrollSectionProps {
  cards: Card[];
  title?: string;
  subtitle?: string;
  className?: string;
}

function HorizontalScrollSection({ 
  cards, 
  title = "Platforms",
  subtitle = "AI-Engineered. Performance-Optimized. Brand-Ready.",
  className = "" 
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const scrollAccumulator = useRef(0);
  const animationRef = useRef<number>();
  const scrollLockRef = useRef(false);
  const lastScrollTime = useRef(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const updateCardPositions = useCallback((progress: number) => {
    // Smooth progress value between 0 and cards.length - 1
    const maxProgress = cards.length - 1;
    const clampedProgress = Math.max(0, Math.min(maxProgress, progress));
    setScrollProgress(clampedProgress);
  }, [cards.length]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Check if section is in viewport
      const isInViewport = rect.top < viewportHeight && rect.bottom > 0
      
      // Check if section is properly positioned for horizontal scrolling
      // Allow some tolerance for when section is entering/exiting viewport
      const isWithinScrollArea = rect.top <= viewportHeight * 0.3 && rect.bottom >= viewportHeight * 0.7

      if (!isInViewport) {
        // Reset scrolling state when out of viewport
        if (isScrolling) {
          setIsScrolling(false)
        }
        return
      }

      // Only hijack scroll when section is in the scroll area
      if (!isWithinScrollArea) {
        // Reset scrolling state when not in scroll area
        if (isScrolling) {
          setIsScrolling(false)
        }
        return
      }

      const now = Date.now()
      if (now - lastScrollTime.current < 50) return

      const scrollingDown = e.deltaY > 0
      const scrollingUp = e.deltaY < 0

      const shouldHijackScrollDown = scrollingDown && Math.round(scrollProgress) < cards.length - 1
      const shouldHijackScrollUp = scrollingUp && Math.round(scrollProgress) > 0

      // Set scrolling state to true when section is in scroll area and user is scrolling
      if (isWithinScrollArea && !isScrolling) {
        setIsScrolling(true)
      }

      if (shouldHijackScrollDown || shouldHijackScrollUp) {
        e.preventDefault()
        e.stopPropagation()

        if (scrollLockRef.current) return
        scrollLockRef.current = true
        lastScrollTime.current = now

        if (shouldHijackScrollDown) {
          const newProgress = Math.min(Math.round(scrollProgress) + 1, cards.length - 1)
          scrollAccumulator.current = newProgress
          updateCardPositions(newProgress)
          
          // Exit horizontal scroll mode when reaching the last card and scrolling down
          if (newProgress === cards.length - 1) {
            setTimeout(() => {
              setIsScrolling(false)
              // Allow page to scroll to next section
              window.scrollBy(0, 100)
            }, 300)
          }
        } else if (shouldHijackScrollUp) {
          const newProgress = Math.max(Math.round(scrollProgress) - 1, 0)
          scrollAccumulator.current = newProgress
          updateCardPositions(newProgress)
          
          // Exit horizontal scroll mode when reaching the first card and scrolling up
          if (newProgress === 0) {
            setTimeout(() => {
              setIsScrolling(false)
              // Allow page to scroll to previous section
              window.scrollBy(0, -100)
            }, 300)
          }
        }

        setTimeout(() => {
          scrollLockRef.current = false
        }, 600)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [scrollProgress, cards.length, updateCardPositions, isScrolling]);

  const getCardTransform = (index: number) => {
    const diff = index - scrollProgress;
    const absdiff = Math.abs(diff);
    
    if (diff > 0) {
      // Cards to the right
      const translateX = Math.min(400, 80 + diff * 120);
      const translateZ = -absdiff * 50;
      const rotateY = Math.min(25, absdiff * 8);
      return `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(-${rotateY}deg)`;
    } else if (diff < 0) {
      // Cards to the left
      const translateX = Math.max(-400, -80 + diff * 120);
      const translateZ = -absdiff * 50;
      const rotateY = Math.min(25, absdiff * 8);
      return `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg)`;
    } else {
      // Active card
      return 'translate3d(0, 0, 0) rotateY(0deg)';
    }
  };

  const getCardOpacity = (index: number) => {
    const diff = Math.abs(index - scrollProgress);
    return Math.max(0.4, 1 - diff * 0.2);
  };

  const getCardScale = (index: number) => {
    const diff = Math.abs(index - scrollProgress);
    return Math.max(0.9, 1 - diff * 0.05);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden bg-[#0a0e27] transition-all duration-700 ease-in-out ${className}`}
      style={{
        height: isScrolling ? '100vh' : 'min-h-screen',
        position: isScrolling ? 'fixed' : 'relative',
        top: isScrolling ? '0' : 'auto',
        left: isScrolling ? '0' : 'auto',
        right: isScrolling ? '0' : 'auto',
        zIndex: isScrolling ? '50' : 'auto'
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="flex h-screen items-center">
        {/* Left content */}
        <div className="w-1/2 flex flex-col justify-center px-16 lg:px-20">
          <div className="max-w-lg">
            <h1 className="text-white text-5xl lg:text-6xl mb-12 leading-tight font-bold">
              <span className="block">Platforms</span>
              <span className="block text-orange-500">AI-Engineered.</span>
              <span className="block">Performance-</span>
              <span className="block">Optimized.</span>
              <span className="block">Brand-Ready.</span>
            </h1>
            
            {/* Progress indicators */}
            <div className="flex gap-2 pt-4">
              {cards.map((_, index) => {
                const isActive = Math.round(scrollProgress) === index;
                return (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      isActive ? "w-12 bg-orange-500" : "w-2 bg-white/30"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Right content - Cards */}
        <div className="w-1/2 h-screen flex items-center justify-center relative">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ perspective: '1200px', perspectiveOrigin: 'center center' }}
          >
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              const isActive = Math.round(scrollProgress) === index;
              
              return (
                <div
                  key={card.id}
                  className={`absolute w-80 h-96 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer group border-2 ${
                    isActive ? 'ring-4 ring-primary/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    backgroundColor: card.backgroundColor,
                    borderColor: isActive ? card.accentColor : undefined,
                    transform: `${getCardTransform(index)} scale(${getCardScale(index)})`,
                    opacity: getCardOpacity(index),
                    transformStyle: 'preserve-3d',
                    zIndex: cards.length - Math.abs(index - Math.round(scrollProgress))
                  }}
                  onClick={() => window.open(card.link, '_blank')}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50/50 to-transparent" />
                  
                  {/* Card content */}
                  <div className="relative p-6 h-full flex flex-col" style={{ color: card.textColor }}>
                    {/* Header with icon and title */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: card.accentColor + '20' }}>
                            <IconComponent className="w-6 h-6" style={{ color: card.accentColor }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold" style={{ color: card.textColor }}>{card.title}</h3>
                            <div className="flex items-center space-x-1 mt-1">
                              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                              <div className="w-1 h-1 rounded-full bg-white/40"></div>
                              <div className="w-1 h-1 rounded-full bg-white/20"></div>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      
                      <p className="text-sm opacity-90 leading-relaxed mb-4">{card.subtitle}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {card.features.slice(0, 3).map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-3 py-1 text-xs rounded-full font-medium"
                            style={{ 
                              backgroundColor: card.accentColor + '15',
                              color: card.accentColor,
                              border: `1px solid ${card.accentColor}30`
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Visual element area */}
                    <div className="flex-1 flex items-end justify-center">
                      <div className="w-full h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:bg-white/15 transition-all duration-300">
                        {/* Service-specific visual elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: card.accentColor + '20' }}>
                            <IconComponent className="w-10 h-10" style={{ color: card.accentColor }} />
                          </div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute top-2 right-2 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: card.accentColor + '60' }}></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        
                        {/* Performance indicator */}
                        <div className="absolute bottom-3 right-3 flex items-center space-x-1">
                          <div className="w-1 h-4 bg-white/40 rounded-full"></div>
                          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: card.accentColor }}></div>
                          <div className="w-1 h-3 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-6 right-6 h-1 rounded-full" style={{ backgroundColor: card.accentColor + '40' }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {Math.round(scrollProgress) < cards.length - 1 ? "Scroll to explore services" : "Scroll to continue"}
      </div>
    </div>
  );
}

// Transform services data to card format
const servicesCards: Card[] = services.map((service, index) => {
  // Clean white theme with colorful accents
  const colors = [
    { bg: '#ffffff', accent: '#e54021', text: '#1f2937', border: '#e54021' },
    { bg: '#ffffff', accent: '#3b82f6', text: '#1f2937', border: '#3b82f6' },
    { bg: '#ffffff', accent: '#10b981', text: '#1f2937', border: '#10b981' },
    { bg: '#ffffff', accent: '#8b5cf6', text: '#1f2937', border: '#8b5cf6' },
    { bg: '#ffffff', accent: '#f59e0b', text: '#1f2937', border: '#f59e0b' },
    { bg: '#ffffff', accent: '#ef4444', text: '#1f2937', border: '#ef4444' }
  ];
  
  return {
    id: service.title.toLowerCase().replace(/\s+/g, '-'),
    title: service.title,
    subtitle: service.description,
    description: service.features.slice(0, 2).join(', '),
    features: service.features,
    icon: service.icon,
    link: service.link,
    backgroundColor: colors[index % colors.length].bg,
    accentColor: colors[index % colors.length].accent,
    textColor: colors[index % colors.length].text,
    borderColor: colors[index % colors.length].border,
  };
});

// Export the services section component
export function HorizontalServicesSection() {
  return (
    <HorizontalScrollSection 
      cards={servicesCards}
      title="Our Services"
      subtitle="AI-Engineered. Performance-Optimized. Brand-Ready."
    />
  );
}

export default HorizontalScrollSection;