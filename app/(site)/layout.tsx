import { MainNav } from "@/components/layout/main-nav";
import { GradientWrapper } from "@/components/layout/gradient-wrapper";
import { Footer } from "@/components/footer";
import { Providers } from '@/components/providers';
import { Toaster } from 'sonner';
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
      <Providers>
        <GradientWrapper>
          <MainNav />
          <main>
            {children}
          </main>
        </GradientWrapper>
        <Footer />
        <Toaster />
      </Providers>
    </body>
  );
} 