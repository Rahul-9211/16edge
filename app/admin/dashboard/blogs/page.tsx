'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Pencil, Trash2, Check, X, Calendar, Clock, Tag, User, Image, Eye, EyeOff } from 'lucide-react';
import ImageUpload, { ImageUploadRef } from '@/components/image-upload';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  author: string;
  authorBio: string;
  thumbnail: string;
  featuredImage: string;
  published: boolean;
  publishDate: string;
  readingTime: number;
  category: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  allowComments: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

interface BlogFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string;
  author: string;
  authorBio: string;
  thumbnail: string;
  featuredImage: string;
  published: boolean;
  publishDate: string;
  readingTime: number;
  category: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  allowComments: boolean;
  featured: boolean;
}

const categories = [
  'Technology',
  'Programming',
  'Web Development',
  'Mobile Development',
  'AI & Machine Learning',
  'Data Science',
  'DevOps',
  'Cloud Computing',
  'Cybersecurity',
  'Blockchain',
  'UI/UX Design',
  'Career & Education',
  'Industry News',
  'Tutorials',
  'Best Practices',
  'Case Studies',
  'Opinion',
  'Other'
];

// Add this helper component at the top of the file, after the imports
const RequiredField = () => <span className="text-red-500 ml-1">*</span>;

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [selectedBlogs, setSelectedBlogs] = useState<string[]>([]);
  const { register, handleSubmit, setValue, watch, reset } = useForm<BlogFormData>();
  
  // Add refs for image uploads
  const thumbnailUploadRef = useRef<ImageUploadRef>(null);
  const featuredImageUploadRef = useRef<ImageUploadRef>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      toast.error('Failed to fetch blogs');
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const onSubmit = async (data: BlogFormData) => {
    try {
      setIsSubmitting(true);
      const readingTime = calculateReadingTime(data.content);
      
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          tags: data.tags.split(',').map(tag => tag.trim()),
          readingTime,
          publishDate: data.published ? new Date().toISOString() : null,
        }),
      });

      if (!response.ok) throw new Error('Failed to save blog');
      
      toast.success('Blog saved successfully!');
      reset();
      // Reset image uploads
      thumbnailUploadRef.current?.reset();
      featuredImageUploadRef.current?.reset();
      fetchBlogs();
    } catch (error) {
      toast.error('Failed to save blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setValue('title', blog.title);
    setValue('slug', blog.slug);
    setValue('content', blog.content);
    setValue('excerpt', blog.excerpt);
    setValue('tags', blog.tags.join(', '));
    setValue('author', blog.author);
    setValue('authorBio', blog.authorBio);
    setValue('thumbnail', blog.thumbnail);
    setValue('featuredImage', blog.featuredImage);
    setValue('published', blog.published);
    setValue('publishDate', blog.publishDate);
    setValue('readingTime', blog.readingTime);
    setValue('category', blog.category);
    setValue('metaTitle', blog.metaTitle);
    setValue('metaDescription', blog.metaDescription);
    setValue('metaKeywords', blog.metaKeywords);
    setValue('allowComments', blog.allowComments);
    setValue('featured', blog.featured);
  };

  const handleUpdate = async (data: BlogFormData) => {
    if (!editingBlog) return;

    try {
      setIsSubmitting(true);
      const readingTime = calculateReadingTime(data.content);
      
      const response = await fetch(`/api/blogs/${editingBlog._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          tags: data.tags.split(',').map(tag => tag.trim()),
          readingTime,
          publishDate: data.published ? new Date().toISOString() : null,
        }),
      });

      if (!response.ok) throw new Error('Failed to update blog');
      
      toast.success('Blog updated successfully!');
      setEditingBlog(null);
      reset();
      // Reset image uploads
      thumbnailUploadRef.current?.reset();
      featuredImageUploadRef.current?.reset();
      fetchBlogs();
    } catch (error) {
      toast.error('Failed to update blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete blog');
      
      toast.success('Blog deleted successfully!');
      fetchBlogs();
    } catch (error) {
      toast.error('Failed to delete blog');
    }
  };

  const handleBulkDelete = async () => {
    if (selectedBlogs.length === 0) return;
    if (!confirm(`Are you sure you want to delete ${selectedBlogs.length} blogs?`)) return;

    try {
      const response = await fetch('/api/blogs/bulk-delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedBlogs }),
      });

      if (!response.ok) throw new Error('Failed to delete blogs');
      
      toast.success('Blogs deleted successfully!');
      setSelectedBlogs([]);
      fetchBlogs();
    } catch (error) {
      toast.error('Failed to delete blogs');
    }
  };

  const toggleSelectBlog = (id: string) => {
    setSelectedBlogs(prev => 
      prev.includes(id) 
        ? prev.filter(blogId => blogId !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedBlogs(prev => 
      prev.length === blogs.length 
        ? [] 
        : blogs.map(blog => blog._id)
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Blog Management</h1>
        <p className="text-muted-foreground">
          Create and manage your blog posts
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Fields marked with <RequiredField /> are required
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-xl font-bold mb-4">
            {editingBlog ? 'Edit Blog' : 'Create New Blog'}
          </h2>
          <form onSubmit={handleSubmit(editingBlog ? handleUpdate : onSubmit)} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Title <RequiredField />
                  </label>
                  <input
                    {...register('title', { 
                      required: 'Title is required',
                      minLength: {
                        value: 3,
                        message: 'Title must be at least 3 characters'
                      }
                    })}
                    className="w-full p-2 border rounded"
                    onChange={(e) => {
                      setValue('slug', generateSlug(e.target.value));
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Slug <RequiredField />
                  </label>
                  <input
                    {...register('slug', { 
                      required: 'Slug is required',
                      pattern: {
                        value: /^[a-z0-9-]+$/,
                        message: 'Slug can only contain lowercase letters, numbers, and hyphens'
                      }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Content <RequiredField />
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={watch('content')}
                    onChange={(content) => setValue('content', content)}
                    className="h-64 mb-12"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <textarea
                    {...register('excerpt')}
                    className="w-full p-2 border rounded"
                    rows={3}
                    placeholder="A brief summary of the blog post"
                  />
                </div>
              </div>
            </div>

            {/* Author Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Author Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Author Name <RequiredField />
                  </label>
                  <input
                    {...register('author', { 
                      required: 'Author name is required'
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Author Bio</label>
                  <textarea
                    {...register('authorBio')}
                    className="w-full p-2 border rounded"
                    rows={2}
                    placeholder="Brief description about the author"
                  />
                </div>
              </div>
            </div>

            {/* Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Media</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ImageUpload
                    ref={thumbnailUploadRef}
                    label="Thumbnail Image"
                    currentImage={watch('thumbnail')}
                    onImageUploaded={(url) => setValue('thumbnail', url)}
                  />
                </div>

                <div>
                  <ImageUpload
                    ref={featuredImageUploadRef}
                    label="Featured Image"
                    currentImage={watch('featuredImage')}
                    onImageUploaded={(url) => setValue('featuredImage', url)}
                  />
                </div>
              </div>
            </div>

            {/* Publishing */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Publishing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    {...register('category')}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <input
                    {...register('tags')}
                    className="w-full p-2 border rounded"
                    placeholder="nextjs, javascript, react"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Separate tags with commas
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Reading Time (minutes)</label>
                  <input
                    type="number"
                    {...register('readingTime')}
                    className="w-full p-2 border rounded"
                    placeholder="Estimated reading time"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Will be auto-calculated if left empty
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Publish Date</label>
                  <input
                    type="datetime-local"
                    {...register('publishDate')}
                    className="w-full p-2 border rounded"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Leave empty to publish immediately
                  </p>
                </div>
              </div>
            </div>

            {/* SEO */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">SEO Settings</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Meta Title</label>
                  <input
                    {...register('metaTitle')}
                    className="w-full p-2 border rounded"
                    placeholder="SEO title for search engines"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Meta Description</label>
                  <textarea
                    {...register('metaDescription')}
                    className="w-full p-2 border rounded"
                    rows={2}
                    placeholder="SEO description for search engines"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Meta Keywords</label>
                  <input
                    {...register('metaKeywords')}
                    className="w-full p-2 border rounded"
                    placeholder="Comma-separated keywords for SEO"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Optional: Separate keywords with commas
                  </p>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    {...register('published')}
                    className="rounded border-gray-300"
                  />
                  <label className="text-sm font-medium">Publish immediately</label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    {...register('featured')}
                    className="rounded border-gray-300"
                  />
                  <label className="text-sm font-medium">Feature this post</label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    {...register('allowComments')}
                    className="rounded border-gray-300"
                  />
                  <label className="text-sm font-medium">Allow comments</label>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? 'Saving...' : editingBlog ? 'Update Blog' : 'Save Blog'}
              </button>
              {editingBlog && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingBlog(null);
                    reset();
                  }}
                  className="bg-muted text-muted-foreground px-4 py-2 rounded hover:bg-muted/90"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">All Blogs</h2>
            {selectedBlogs.length > 0 && (
              <button
                onClick={handleBulkDelete}
                className="bg-destructive text-destructive-foreground px-4 py-2 rounded hover:bg-destructive/90"
              >
                Delete Selected ({selectedBlogs.length})
              </button>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    <input
                      type="checkbox"
                      checked={selectedBlogs.length === blogs.length}
                      onChange={toggleSelectAll}
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedBlogs.includes(blog._id)}
                        onChange={() => toggleSelectBlog(blog._id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-foreground">{blog.title}</div>
                      <div className="text-sm text-muted-foreground">/blog/{blog.slug}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{blog.category}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{blog.author}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          blog.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {blog.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 