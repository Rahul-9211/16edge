import { GithubRepo } from './projects/types';
import { cache } from 'react';

const GITHUB_USERNAME = "Rahul-9211"; // Replace with your GitHub username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_API_URL = 'https://api.github.com';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

async function fetchWithRetry(url: string, retries = MAX_RETRIES): Promise<Response> {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return fetchWithRetry(url, retries - 1);
    }
    throw error;
  }
}

export const getGithubRepos = cache(async (username: string) => {
  try {
    const response = await fetchWithRetry(
      `${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=10`
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
});

export const getGithubProfile = cache(async (username: string) => {
  try {
    const response = await fetchWithRetry(
      `${GITHUB_API_URL}/users/${username}`
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
});

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