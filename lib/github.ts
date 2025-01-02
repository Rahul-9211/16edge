import { GithubRepo } from './projects/types';

const GITHUB_USERNAME = "Rahul-9211"; // Replace with your GitHub username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGithubProjects(): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    const repos = await response.json();
    return repos.filter((repo: GithubRepo) => !repo.fork); // Filter out forked repos
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
} 