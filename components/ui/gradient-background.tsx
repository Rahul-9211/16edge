export function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div 
        className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />
      <div 
        className="absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />
      <div 
        className="absolute left-1/3 bottom-1/4 h-[500px] w-[500px] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />
      <div 
        className="absolute right-1/3 top-1/4 h-[500px] w-[500px] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />
    </div>
  );
} 