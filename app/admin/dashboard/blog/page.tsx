import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { fetchBlogs } from "@/lib/blog/data";
import { formatDate } from "@/lib/utils/date";
import { BlogActions } from "@/components/admin/BlogActions";

export default async function BlogManagementPage() {
  const { data: blogs } = await fetchBlogs(1, 50); // Fetch first 50 blogs

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <Link href="/admin/dashboard/blog/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            New Blog Post
          </Button>
        </Link>
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
            {blogs.map((blog) => (
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
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 