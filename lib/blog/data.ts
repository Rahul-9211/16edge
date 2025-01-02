import { promises as fs } from "fs";
import path from "path";
import { BlogPost } from './types';

export async function getBlogPosts(): Promise<BlogPost[]> {
  const filePath = path.join(process.cwd(), "data/blogs.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(fileContents);
  return data.blogs;
}

export async function getBlogPost(id: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.id === id);
}