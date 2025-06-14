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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Your Company Name',
    template: '%s | Your Company Name',
  },
  description: 'Your company description here',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'Your Company Name',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourcompany',
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
      },
      {
        url: "/favicon.svg",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      url: "/apple-icon.png",
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