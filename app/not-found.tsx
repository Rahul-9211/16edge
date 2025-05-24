import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-8 text-muted-foreground">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium shadow hover:bg-primary/90 transition-colors">
          Go to Home
        </button>
      </Link>
    </div>
  );
} 