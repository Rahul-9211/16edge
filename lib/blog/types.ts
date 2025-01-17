export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  publishDate: Date;
  featuredImage: string;
}

export interface BlogConnection {
  url: string;
}