import { GradientBackground } from "@/components/ui/gradient-background";

interface GradientWrapperProps {
  children: React.ReactNode;
}

export function GradientWrapper({ children }: GradientWrapperProps) {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none -z-10">
        <GradientBackground />
      </div>
      <div className="relative">
        {children}
      </div>
    </>
  );
} 