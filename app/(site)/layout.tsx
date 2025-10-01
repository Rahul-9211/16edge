import { MainNav } from "@/components/layout/main-nav";
import { GradientWrapper } from "@/components/layout/gradient-wrapper";
import { Footer } from "@/components/footer";
import { Providers } from '@/components/providers';
import { Toaster } from 'sonner';
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://16edge.com'),
  title: {
    default: '16edge - Data-Driven Marketing That Delivers Results',
    template: '%s | 16edge'
  },
  description: 'Unlock your brand\'s full potential with high-performance marketing strategies that drive real business growth and measurable impact.',
  keywords: ['performance marketing', 'SEO', 'social media marketing', 'data-driven marketing', 'digital marketing', 'brand growth', 'ROI optimization'],
  authors: [{ name: '16edge' }],
  creator: '16edge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://16edge.com',
    title: '16edge - Data-Driven Marketing That Delivers Results',
    description: 'Unlock your brand\'s full potential with high-performance marketing strategies that drive real business growth and measurable impact.',
    siteName: '16edge',
  },
  twitter: {
    card: 'summary_large_image',
    title: '16edge - Data-Driven Marketing That Delivers Results',
    description: 'Unlock your brand\'s full potential with high-performance marketing strategies that drive real business growth and measurable impact.',
  },
};

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