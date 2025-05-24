import "@/styles/globals.css";
import { Providers } from '@/components/providers';
import { Toaster } from 'sonner';
import { Metadata } from "next";
import Script from 'next/script';
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { GTMClient } from "@/components/GTMClient";

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
  title: "HackRest - Code Execution Platform",
  description: "Execute code in multiple languages with real-time output",
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
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}