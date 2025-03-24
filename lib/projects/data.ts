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
    developer: "Rahul Rawat",
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
    developer: "Rahul Rawat",
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
    developer: "Rahul Rawat",
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
    developer: "Rahul Rawat",
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
    developer: "Rahul Rawat",
    category: "ai-solutions",
    rating: {
      rating: 5,
      review: "Exceptional AI implementation and modern design. Highly recommended team.",
      clientName: "16Edge",
      clientRole: "Technical Lead"
    }
  },
  {
    id: "13",
    title: "ParentGuard - Parental Control App",
    description: "A comprehensive parental control application that allows parents to monitor their children's phone and online activities. Features include call monitoring, SMS tracking, location tracking, and app management.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=ParentGuard&font=raleway",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "#",
    featured: true,
    demo: "https://looksense-one.vercel.app/",
    category: "web-applications",
    developer: "Rahul Rawat",
    rating: {
      rating: 4.9,
      review: "Excellent application with intuitive interface and robust monitoring features. Perfect for parents concerned about their children's digital safety.",
      clientName: "ParentGuard",
      clientRole: "Product Owner"
    }
  },
  {
    id: "14",
    title: "Cosmic Flights - Flight Booking System",
    description: "An advanced flight booking platform that enables users to search and book flights with a streamlined user experience. Features include flight search, booking management, and secure payment processing.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Cosmic+Flights&font=raleway",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "#",
    featured: true,
    demo: "https://flight-booking-system-app.vercel.app/",
    category: "web-applications",
    developer: "Rahul Rawat",
    rating: {
      rating: 4.8,
      review: "Fast, intuitive, and visually appealing flight booking system. The lightning-fast search and streamlined booking process are standout features.",
      clientName: "Cosmic Flights",
      clientRole: "CTO"
    }
  },
  // New Shopify Theme Development Projects
  {
    id: "6",
    title: "Mahina - Shopify Custom Theme",
    description: "A custom Shopify theme development for Mahina, featuring a clean, elegant design with optimized product pages and seamless checkout experience.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Mahina&font=raleway",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "HTML"],
    github: "#",
    featured: true,
    demo: "https://mahina.co/",
    category: "ecommerce-stores",
    rating: {
      rating: 4.9,
      review: "HackRest delivered a beautiful, high-converting theme that perfectly matches our brand aesthetic.",
      clientName: "Mahina",
      clientRole: "Brand Manager"
    },
    developer: "Tanuj Rajput"
  },
  {
    id: "7",
    title: "Fae Beauty - Shopify Custom Theme",
    description: "A vibrant and modern custom Shopify theme for Fae Beauty with focus on product visualization, mobile responsiveness, and conversion optimization.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Fae+Beauty&font=raleway",
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS", "Responsive Design"],
    github: "#",
    featured: true,
    demo: "https://www.faebeauty.in/",
    category: "ecommerce-stores",
    rating: {
      rating: 5,
      review: "The custom theme significantly improved our conversion rate and customer experience. Extremely satisfied with the results.",
      clientName: "Fae Beauty",
      clientRole: "E-commerce Director"
    },
    developer: "Tanuj Rajput"
  },
  {
    id: "8",
    title: "Nicobar - Shopify Custom Theme",
    description: "An elegant, high-performance Shopify custom theme for Nicobar featuring advanced filtering, custom product pages, and optimized mobile experience.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Nicobar&font=raleway",
    technologies: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS", "Alpine.js"],
    github: "#",
    featured: true,
    demo: "https://www.nicobar.com/",
    category: "ecommerce-stores",
    rating: {
      rating: 4.8,
      review: "Professional development team that translated our brand vision perfectly into our online store.",
      clientName: "Nicobar",
      clientRole: "Creative Director"
    },
    developer: "Tanuj Rajput"
  },
  // New WordPress Projects
  {
    id: "9",
    title: "The Six Auto - Automotive Services",
    description: "A custom WordPress website for The Six Auto Protricity, showcasing their automotive services with a focus on usability and lead generation.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=The+Six+Auto&font=raleway",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "Responsive Design"],
    github: "#",
    featured: true,
    demo: "https://www.thesixautoprotricity.ca/",
    category: "wordpress-sites",
    rating: {
      rating: 4.7,
      review: "Our website has generated significant new business leads. Great design and functionality.",
      clientName: "The Six Auto Protricity",
      clientRole: "Owner"
    },
    developer: "Tanuj Rajput"
  },
  {
    id: "10",
    title: "O & O Beauty - Cosmetics Brand",
    description: "A stylish, product-focused WordPress website for O & O Beauty with e-commerce integration and advanced product filtering.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=O+%26+O+Beauty&font=raleway",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
    github: "#",
    featured: true,
    demo: "http://oandobeauty.com/",
    category: "wordpress-sites",
    rating: {
      rating: 4.9,
      review: "The website beautifully showcases our products and has significantly improved our online sales.",
      clientName: "O & O Beauty",
      clientRole: "Marketing Manager"
    },
    developer: "Tanuj Rajput"
  },
  {
    id: "11",
    title: "Roya Security - Security Solutions",
    description: "A professional WordPress website for Roya Security showcasing their security services and solutions with clear call-to-actions and lead generation forms.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Roya+Security&font=raleway",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "SEO"],
    github: "#",
    featured: true,
    demo: "https://royabsecurity.ca/",
    category: "wordpress-sites",
    rating: {
      rating: 4.8,
      review: "Excellent website that has helped us establish our online presence and generate qualified leads.",
      clientName: "Roya Security",
      clientRole: "Operations Director"
    },
    developer: "Tanuj Rajput"
  },
  // Product-based Website
  {
    id: "12",
    title: "Product Showcase Platform",
    description: "A comprehensive product showcase website with detailed product listings, filtering options, and integrated e-commerce capabilities.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Product+Showcase&font=raleway",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "#",
    featured: true,
    demo: "#",
    category: "ecommerce-stores",
    rating: {
      rating: 5,
      review: "The platform perfectly showcases our products and has significantly improved our online visibility and sales.",
      clientName: "Product Innovations Ltd",
      clientRole: "Product Manager"
    },
    developer: "Tanuj Rajput"
  },
  // Yugant's Projects
  {
    id: "15",
    title: "Velpaso - Custom Shopify Store",
    description: "A fully custom Shopify store built from scratch with an elegant design, optimized product pages, and smooth checkout experience for improved conversion rates.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Velpaso&font=raleway",
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS", "Responsive Design"],
    github: "#",
    featured: true,
    demo: "https://velpaso.in/",
    category: "ecommerce-stores",
    rating: {
      rating: 4.9,
      review: "The custom Shopify implementation significantly improved our online sales and provided an exceptional shopping experience for our customers.",
      clientName: "Velpaso",
      clientRole: "Founder"
    },
    developer: "Yugant"
  },
  {
    id: "16",
    title: "Quinn Harper - WordPress Website",
    description: "A sophisticated WordPress website with custom design elements, optimized performance, and seamless content management for an elevated brand presence.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Quinn+Harper&font=raleway",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "Responsive Design"],
    github: "#",
    featured: true,
    demo: "https://quinnnharper.com/",
    category: "wordpress-sites",
    rating: {
      rating: 4.8,
      review: "Our WordPress site perfectly captures our brand identity while providing excellent performance and user experience.",
      clientName: "Quinn Harper",
      clientRole: "Marketing Director"
    },
    developer: "Yugant"
  },
  {
    id: "17",
    title: "The Sangrahl Records - Music Label Website",
    description: "A modern WordPress website for a music label featuring audio players, artist portfolios, event calendars, and music release showcases with a sleek, brand-aligned design.",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=The+Sangrahl+Records&font=raleway",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "Audio Integration"],
    github: "#",
    featured: true,
    demo: "https://thesangrahlprecords.com/",
    category: "wordpress-sites",
    rating: {
      rating: 5,
      review: "The website perfectly represents our music label's identity and provides an excellent platform for showcasing our artists and releases.",
      clientName: "The Sangrahl Records",
      clientRole: "Label Manager"
    },
    developer: "Yugant"
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