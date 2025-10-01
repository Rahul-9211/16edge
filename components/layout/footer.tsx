import { Linkedin, Mail, Twitter, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-maroon-600 via-maroon-800 to-burgundy-700 bg-clip-text text-transparent">
              16edge
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Unlock your brand&apos;s full potential with data-driven marketing that delivers real business results. 
              We craft high-performance marketing strategies that drive growth and measurable impact.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@16edge.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (xxx) xxx-xxxx</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Performance Marketing
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                SEO
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Social Media Marketing
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Website Development
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Branding
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Strategy & Consulting
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
            
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold">Connect With Us</h4>
              <div className="flex gap-4">
                <Link
                  href="https://linkedin.com/company/16edge"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com/16edge"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:info@16edge.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 text-center text-sm text-muted-foreground border-t">
          <p>© {new Date().getFullYear()} 16edge. All rights reserved. | Data-Driven Marketing That Delivers Results</p>
        </div>
      </div>
    </footer>
  );
}
