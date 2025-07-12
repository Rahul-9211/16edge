"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils/date";
import { BlogActions } from "@/components/admin/BlogActions";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  publishDate: string;
  // Add other blog properties as needed
}

export default function BlogManagementPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleRefresh = () => {
    fetchBlogs();
  };

  if (loading) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleRefresh}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Link href="/admin/dashboard/blog/new">
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              New Blog Post
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Posts</CardTitle>
          <CardDescription>
            Manage your blog posts, create new content, and edit existing posts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blogs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No blog posts found. Create your first blog post to get started!
              </div>
            ) : (
              blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{blog.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Published: {formatDate(blog.publishDate) || "Unknown date"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <BlogActions slug={blog.slug} />
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 