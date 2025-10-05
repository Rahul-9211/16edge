import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              16edge
            </h3>
            <p className="text-sm text-gray-600">
              Data-driven marketing that delivers real business results. We craft high-performance marketing strategies that drive growth and measurable impact.
            </p>
            <div className="flex flex-col gap-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="w-full border-primary text-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link href="/contact">
                  Request Free Consultation
                </Link>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Strategy & Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@16edge.com" 
                  className="text-sm text-gray-600 hover:text-primary inline-flex items-center transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@16edge.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1-xxx-xxx-xxxx" 
                  className="text-sm text-gray-600 hover:text-primary inline-flex items-center transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (xxx) xxx-xxxx
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  Available Worldwide
                </span>
              </li>
            </ul>
            
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2 text-gray-900">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/company/16edge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/16edge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} 16edge. All rights reserved. | Data-Driven Marketing That Delivers Results
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 