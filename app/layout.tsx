import "@/styles/globals.css";
import { Providers } from '@/components/providers';
import { Toaster } from 'sonner';
import { Metadata } from "next";
import Script from 'next/script';
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { GTMClient } from "@/components/GTMClient";
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

declare global {
  interface Window {
    gtmDidInit?: boolean;
  }
}

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
  icons: {
    icon: [
      {
        url: "/edge.svg",
        sizes: "any",
      },
      {
        url: "/edge.svg",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      url: "/edge.svg",
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* GTM will be injected after user interaction by GTMClient */}
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <GTMClient />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}