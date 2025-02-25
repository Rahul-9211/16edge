import { Project, GithubRepo, ProjectCategory } from './types';
import { fetchGithubProjects } from '../github';

// Also add GITHUB_USERNAME constant at the top
const GITHUB_USERNAME = "Rahul-9211"; // Replace with your username

// Manually curated projects
export const manualProjects: Project[] = [
  {
    id: "1",
    title: "Lal10 - Brands Dashboard",
    description: "Dashboard for managing and tracking brands orders T&A on Lal10 platform",
    image: "/images/project/lal10-brands-dashboard-p1.png",
    technologies: ["Nextjs", "TypeScript", "Node.js", "MongoDB"],
    github: "#",
    featured: true,
    demo: "https://brands.lal10.com/",
    category: "custom-dashboards",
    rating: {
      rating: 5,
      review: "Excellent dashboard that helped streamline our operations. The team delivered beyond expectations.",
      clientName: "Lal10 Team",
      clientRole: "Product Manager"
    }
  },
  {
    id: "2",
    title: "Lal10 - Tech Enabled Manufacturer",
    description: "A manufacturing company website for Tech Enabled Manufacturer",
    image: "/images/project/lal10-p2.png",
    technologies: ["Next.js", "TypeScript", "NestJs", "PostgreSQL"],
    github: "#",
    featured: true,
    demo: "https://lal10.com/",
    category: "web-applications",
    rating: {
      rating: 4.9,
      review: "The team delivered a robust and scalable solution that exceeded our expectations.",
      clientName: "Lal10 Management",
      clientRole: "CTO"
    }
  },
  {
    id: "3",
    title: "GuardLogiX - Cyber Security Solutions",
    description: "GuardLogiX is a leading provider of cyber security solutions. They offer a range of services including port scanning, vulnerability assessment, and security consulting.",
    image: "/images/project/guardlogix.png",
    technologies: ["React.js", "JavaScript", "NodeJs", "ExpressJs", "MongoDB"],
    github: "#",
    featured: true,
    demo: "https://guardlogix.co/",
    category: "business-websites",
    rating: {
      rating: 4.8,
      review: "Outstanding work on our website. The team was professional and delivered on time.",
      clientName: "GuardLogiX",
      clientRole: "Marketing Director"
    }
  },
  {
    id: "4",
    title: "MaxMoon Electricals Inc. - Bringing Light To Your Life ✨",
    description: "Commercial & Residential Electrician Services",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=MaxMoon+Electricals&font=raleway",
    technologies: ["React.js", "JavaScript", "NodeJs", "ExpressJs", "MongoDB"],
    github: "#",
    featured: true,
    demo: "https://maxmoonelectricals.ca/",
    category: "wordpress-sites",
    rating: {
      rating: 4.8,
      review: "Great website that perfectly represents our brand. Very professional service.",
      clientName: "MaxMoon Electricals",
      clientRole: "CEO"
    }
  },
  {
    id: "5",
    title: "16Edge - AI-Powered Edge Computing Solutions",
    description: "Data-Driven Marketing",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=16Edge&font=raleway",
    technologies: ["React.js", "JavaScript", "Tailwind", "Framer"],
    github: "#",
    featured: true,
    demo: "https://16edge.com/",
    category: "ai-solutions",
    rating: {
      rating: 5,
      review: "Exceptional AI implementation and modern design. Highly recommended team.",
      clientName: "16Edge",
      clientRole: "Technical Lead"
    }
  },
  //
  //  ... other manual projects
];

// Helper function to get projects by category
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return manualProjects.filter(project => project.category === category);
}

// Helper function to get all categories with their projects
export function getProjectCategories(): { [key in ProjectCategory]: Project[] } {
  return {
    "business-websites": getProjectsByCategory("business-websites"),
    "web-applications": getProjectsByCategory("web-applications"),
    "mobile-apps": getProjectsByCategory("mobile-apps"),
    "ecommerce-stores": getProjectsByCategory("ecommerce-stores"),
    "wordpress-sites": getProjectsByCategory("wordpress-sites"),
    "digital-marketing": getProjectsByCategory("digital-marketing"),
    "custom-dashboards": getProjectsByCategory("custom-dashboards"),
    "ui-ux-design": getProjectsByCategory("ui-ux-design"),
    "ai-solutions": getProjectsByCategory("ai-solutions"),
    "automation-tools": getProjectsByCategory("automation-tools")
  };
}

// Convert GitHub repos to our Project format
export function convertGithubRepoToProject(repo: GithubRepo): Project {
  return {
    id: repo.id.toString(),
    title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
    description: repo.description || 'No description provided',
    image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
    technologies: repo.topics,
    github: repo.html_url,
    demo: repo.homepage || undefined,
    isGithubProject: true,
    category: "web-applications" // Default category for GitHub projects
  };
}

// Combine manual and GitHub projects
export async function getAllProjects(): Promise<Project[]> {
  try {
    const githubRepos = await fetchGithubProjects();
    const githubProjects = githubRepos.map(convertGithubRepoToProject);
    
    // Combine and sort projects
    const allProjects = [...manualProjects];
    
    // Sort featured projects first, then by most recent
    return allProjects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  } catch (error) {
    console.error('Error getting all projects:', error);
    return manualProjects;
  }
}

// Get category display names
export const categoryDisplayNames: { [key in ProjectCategory]: string } = {
  "business-websites": "Business & Corporate Websites",
  "web-applications": "Web Apps & SaaS Solutions",
  "mobile-apps": "Mobile App Development",
  "ecommerce-stores": "E-commerce & Online Stores",
  "wordpress-sites": "WordPress & CMS Solutions",
  "digital-marketing": "Digital Marketing & SEO",
  "custom-dashboards": "Analytics & Custom Dashboards",
  "ui-ux-design": "UI/UX Design Projects",
  "ai-solutions": "AI & Machine Learning",
  "automation-tools": "Automation Solutions"
};