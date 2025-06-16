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
  metadataBase: new URL('https://hackrest.com'),
  title: {
    default: 'HackRest - Digital Solutions & Innovation Hub',
    template: '%s | HackRest'
  },
  description: 'Transform your ideas into digital excellence with our cutting-edge solutions. We craft innovative digital experiences that drive growth and success.',
  keywords: ['digital solutions', 'web development', 'innovation', 'technology', 'digital transformation'],
  authors: [{ name: 'HackRest' }],
  creator: 'HackRest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hackrest.com',
    title: 'HackRest - Digital Solutions & Innovation Hub',
    description: 'Transform your ideas into digital excellence with our cutting-edge solutions.',
    siteName: 'HackRest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HackRest - Digital Solutions & Innovation Hub',
    description: 'Transform your ideas into digital excellence with our cutting-edge solutions.',
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