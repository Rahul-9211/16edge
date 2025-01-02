import { Project, GithubRepo } from './types';
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
    demo: "https://brands.lal10.com/"
   
  },
  {
    id: "2",
    title: "Lal10 - Tech Enabled Manufacturer",
    description: "A feature-rich Leetcode clone with code execution, authentication, and real-time updates",
    image: "/images/project/lal10-p2.png",
    technologies: ["Next.js", "TypeScript", "NestJs", "PostgreSQL"],
    github: "#",
    featured: true,
    demo: "https://lal10.com/"
  },
  {
    id: "2",
    title: "GuardLogiX - Tech Enabled Manufacturer",
    description: "A feature-rich Leetcode clone with code execution, authentication, and real-time updates",
    image: "/images/project/guardlogix.png",
    technologies: ["React.js", "JavaScript", "NodeJs", "ExpressJs", "MongoDB"],
    github: "#",
    featured: true,
    demo: "https://guardlogix.co/"
  },
  // ... other manual projects
];

// Convert GitHub repos to our Project format
export function convertGithubRepoToProject(repo: GithubRepo): Project {
  return {
    id: repo.id.toString(),
    title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
    description: repo.description || 'No description provided',
    image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
    technologies: repo.topics,
    github: repo.html_url,
    demo: repo.homepage,
    isGithubProject: true
  };
}

// Combine manual and GitHub projects
export async function getAllProjects(): Promise<Project[]> {
  try {
    const githubRepos = await fetchGithubProjects();
    const githubProjects = githubRepos.map(convertGithubRepoToProject);
    
    // Combine and sort projects
    const allProjects = [...manualProjects, ...githubProjects];
    
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