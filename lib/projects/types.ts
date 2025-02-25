export type ProjectCategory = 
  | "business-websites"      // For company websites, landing pages
  | "web-applications"       // For complex web apps, SaaS products
  | "mobile-apps"           // For iOS, Android apps
  | "ecommerce-stores"      // For online stores
  | "wordpress-sites"       // For WordPress, CMS based sites
  | "digital-marketing"     // For SEO, marketing projects
  | "custom-dashboards"     // For analytics, reporting dashboards
  | "ui-ux-design"         // For design projects
  | "ai-solutions"         // For AI/ML projects
  | "automation-tools";    // For automation, scripts, tools

export interface ProjectRating {
  rating: number;       // Out of 5
  review?: string;      // Optional review text
  clientName: string;   // Client/Company name
  clientRole?: string;  // Optional client role/position
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  isGithubProject?: boolean;
  category: ProjectCategory;
  rating?: ProjectRating; // Add rating field
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
}