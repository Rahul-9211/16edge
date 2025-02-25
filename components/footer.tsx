import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">HackRest</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered development solutions for modern businesses in the US and Canada.
            </p>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a 
                  href="https://linkedin.com/company/hackrest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  LinkedIn
                  <Linkedin className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-dev" className="text-sm text-muted-foreground hover:text-primary">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-dev" className="text-sm text-muted-foreground hover:text-primary">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/cms-dev" className="text-sm text-muted-foreground hover:text-primary">
                  CMS Development
                </Link>
              </li>
              <li>
                <Link href="/services/analytics" className="text-sm text-muted-foreground hover:text-primary">
                  Analytics Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-sm text-muted-foreground hover:text-primary">
                  E-commerce Development
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-sm text-muted-foreground hover:text-primary">
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/me" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@hackrest.com" 
                  className="text-sm text-muted-foreground hover:text-primary inline-flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@hackrest.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918512821898" 
                  className="text-sm text-muted-foreground hover:text-primary inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 8512821898
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                 F-2/39 Jai Vihar,<br />
                  Najafgarh, Delhi,<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} HackRest. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 