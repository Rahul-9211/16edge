import { Loader2 } from "lucide-react";

export function Loader({ className = "", size = "default" }: { className?: string, size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "w-4 h-4",
    default: "w-6 h-6",
    large: "w-8 h-8"
  };

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[100px]">
      <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
    </div>
  );
} 