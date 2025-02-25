import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/layout/main-nav";
import { GradientWrapper } from "@/components/layout/gradient-wrapper";
import { Metadata } from "next";
import Script from 'next/script';
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";

const base64Data = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGxSURBVFiD7ZY9axRRFIafM7ObxEIQbAQFG0tbwcrOTgQrK8HKH6CFYGMhCFZWFhYiVoKdhYWFhYWIhYiFhYUIQkAUDSisn7vvsbibZGZ3Z3Y2WRYL98DAzD3nPe95z9y5A3v8x6gkxXa7PQC0gGPAEPgKvHLODf/KhPu+fwZ4Adz8w+MZ8Ng5t5asgLUTwHvgYITpN+C8c+5HogLW2hLwETgcY74CnHXO/UxEwFr7GrieYAoL59zVnQpYa+8Cj3cQ4plz7u52BKy1V4CXCQcHGAGHnHO/4wSstVVgDJQTFvgEnHLONYILxSBba8+y8+AB6sBLa+1IGQSC4zhwP6XgAFeB58aYkhYIXsVpYwQ8KRQKDSEEgiulLPAEuJWBwA3P857KbQFr7WHgPVDLSOCbc+6EEALAWnsI+ABUM0rwzTl3TEgpJWCUYfAAVWPMYyGEwBhzH7ibg8BdIcQGnHMPgGc5JHhmjHm4+WCMuQU8zVjgiTHm9tYHY8wt4HGGAo+MMXe2G4wx14BHGQg8NMbcizIYY84BD1IUuG+MeRBnNMacAe6lIHDPGPMkzriH/4Y/pW+9JPQNnqsAAAAASUVORK5CYII=';

export const metadata: Metadata = {
  title: "HackRest | Software Developer",
  description: "Full-stack developer specializing in modern web technologies",
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-50440B50JK`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-50440B50JK');
            `,
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GradientWrapper>
            <MainNav />
            <main>
              {children}
            </main>
          </GradientWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}