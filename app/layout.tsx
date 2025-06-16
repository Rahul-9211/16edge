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
  metadataBase: new URL('https://hackrest.com'),
  title: {
    default: 'HackRest',
    template: '%s | HackRest'
  },
  description: 'Transform your ideas into digital excellence with our cutting-edge solutions.',
  keywords: ['digital solutions', 'web development', 'innovation', 'technology', 'digital transformation'],
  authors: [{ name: 'HackRest' }],
  creator: 'HackRest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hackrest.com',
    title: 'HackRest',
    description: 'Transform your ideas into digital excellence with our cutting-edge solutions.',
    siteName: 'HackRest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HackRest',
    description: 'Transform your ideas into digital excellence with our cutting-edge solutions.',
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