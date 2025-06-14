"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import dynamic from "next/dynamic";

const Tiptap = dynamic(() => import("@/components/tiptap-editor"), { ssr: false });

interface CustomField {
  key: string;
  value: string;
}

export default function EditBlogPage() {
  const router = useRouter();
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [featuredImage, setFeaturedImage] = useState<string>("");
  const [uploading, setUploading] = useState<{thumb: boolean; featured: boolean}>({thumb: false, featured: false});

  // Extra fields
  const [title, setTitle] = useState("");
  const [blogSlug, setBlogSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorBio, setAuthorBio] = useState("");
  const [category, setCategory] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [tags, setTags] = useState("");
  const [publishNow, setPublishNow] = useState(false);
  const [allowComments, setAllowComments] = useState(false);
  const [featurePost, setFeaturePost] = useState(false);

  useEffect(() => {
    async function fetchBlog() {
      setIsLoading(true);
      const res = await fetch(`/api/blog/${slug}`);
      if (!res.ok) {
        toast.error("Failed to fetch blog data");
        router.push("/admin/dashboard/blog");
        return;
      }
      const data = await res.json();
      setTitle(data.title || "");
      setBlogSlug(data.slug || "");
      setContent(data.content || "");
      setTags((data.tags || []).join(", "));
      setFeaturedImage(data.featuredImage || "");
      setThumbnail(data.thumbnail || "");
      setExcerpt(data.excerpt || "");
      setAuthorName(data.authorName || "");
      setAuthorBio(data.authorBio || "");
      setCategory(data.category || "");
      setReadingTime(data.readingTime || "");
      setPublishDate(data.publishDate ? data.publishDate.slice(0, 16) : "");
      setMetaTitle(data.metaTitle || "");
      setMetaDescription(data.metaDescription || "");
      setMetaKeywords(data.metaKeywords || "");
      setPublishNow(!!data.publishNow);
      setAllowComments(!!data.allowComments);
      setFeaturePost(!!data.featurePost);
      // Extract custom fields
      const knownFields = [
        "_id","title","slug","content","tags","featuredImage","thumbnail","excerpt","authorName","authorBio","category","readingTime","publishDate","metaTitle","metaDescription","metaKeywords","publishNow","allowComments","featurePost"
      ];
      setCustomFields(
        Object.entries(data)
          .filter(([k]) => !knownFields.includes(k))
          .map(([key, value]) => ({ key, value: String(value) }))
      );
      setIsLoading(false);
    }
    if (slug) fetchBlog();
    // eslint-disable-next-line
  }, [slug]);

  const addCustomField = () => setCustomFields([...customFields, { key: '', value: '' }]);
  const removeCustomField = (index: number) => setCustomFields(customFields.filter((_, i) => i !== index));
  const updateCustomField = (index: number, field: 'key' | 'value', newValue: string) => {
    const updatedFields = [...customFields];
    updatedFields[index][field] = newValue;
    setCustomFields(updatedFields);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'thumb' | 'featured') => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(u => ({...u, [type]: true}));
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) {
        if (type === 'thumb') setThumbnail(data.url);
        else setFeaturedImage(data.url);
        toast.success('Image uploaded!');
      } else {
        toast.error(data.error || 'Upload failed');
      }
    } catch (err) {
      toast.error('Upload failed');
    } finally {
      setUploading(u => ({...u, [type]: false}));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const baseData = {
      title,
      slug: blogSlug,
      content,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      featuredImage,
      thumbnail,
      excerpt,
      authorName,
      authorBio,
      category,
      readingTime,
      publishDate: publishNow ? new Date().toISOString() : publishDate,
      metaTitle,
      metaDescription,
      metaKeywords,
      publishNow,
      allowComments,
      featurePost,
    };
    const customFieldsData = customFields.reduce((acc, field) => {
      if (field.key && field.value) acc[field.key] = field.value;
      return acc;
    }, {} as Record<string, string>);
    const blogData = { ...baseData, ...customFieldsData };
    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      });
      if (!response.ok) throw new Error('Failed to update blog post');
      toast.success('Blog post updated successfully!');
      router.push('/admin/dashboard/blog');
    } catch (error) {
      toast.error('Failed to update blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="container mx-auto py-6 max-w-3xl">
      <div className="mb-6">
        <Link href="/admin/dashboard/blog">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Edit Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <section>
              <h2 className="font-semibold text-lg mb-2">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input id="title" name="title" required value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="slug">Slug *</Label>
                  <Input id="slug" name="slug" required value={blogSlug} onChange={e => setBlogSlug(e.target.value)} />
                </div>
              </div>
              <div className="mt-4">
                <Label>Content *</Label>
                <Tiptap value={content} onChange={setContent} />
              </div>
              <div className="mt-4">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea id="excerpt" value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="A brief summary of the blog post" />
              </div>
            </section>

            {/* Author Info */}
            <section>
              <h2 className="font-semibold text-lg mb-2">Author Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="authorName">Author Name</Label>
                  <Input id="authorName" value={authorName} onChange={e => setAuthorName(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="authorBio">Author Bio</Label>
                  <Textarea id="authorBio" value={authorBio} onChange={e => setAuthorBio(e.target.value)} placeholder="Brief description about the author" />
                </div>
              </div>
            </section>

            {/* Media */}
            <section>
              <h2 className="font-semibold text-lg mb-2">Media</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Thumbnail Image</Label>
                  <Input type="file" accept="image/*" onChange={e => handleImageUpload(e, 'thumb')} />
                  {uploading.thumb && <div className="text-xs mt-1">Uploading...</div>}
                  {thumbnail && <img src={thumbnail} alt="Thumbnail" className="mt-2 rounded w-32 h-32 object-cover" />}
                </div>
                <div>
                  <Label>Featured Image</Label>
                  <Input type="file" accept="image/*" onChange={e => handleImageUpload(e, 'featured')} />
                  {uploading.featured && <div className="text-xs mt-1">Uploading...</div>}
                  {featuredImage && <img src={featuredImage} alt="Featured" className="mt-2 rounded w-32 h-32 object-cover" />}
                </div>
              </div>
            </section>

            {/* Publishing */}
            <section>
              <h2 className="font-semibold text-lg mb-2">Publishing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" value={category} onChange={e => setCategory(e.target.value)} placeholder="Select a category" />
                </div>
                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" name="tags" value={tags} onChange={e => setTags(e.target.value)} placeholder="Comma-separated tags" />
                </div>
                <div>
                  <Label htmlFor="readingTime">Reading Time (minutes)</Label>
                  <Input id="readingTime" value={readingTime} onChange={e => setReadingTime(e.target.value)} placeholder="Estimated reading time" />
                </div>
                <div>
                  <Label htmlFor="publishDate">Publish Date</Label>
                  <Input id="publishDate" type="datetime-local" value={publishDate} onChange={e => setPublishDate(e.target.value)} />
                </div>
              </div>
            </section>

            {/* SEO */}
            <section>
              <h2 className="font-semibold text-lg mb-2">SEO Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input id="metaTitle" value={metaTitle} onChange={e => setMetaTitle(e.target.value)} placeholder="SEO title for search engines" />
                </div>
                <div>
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea id="metaDescription" value={metaDescription} onChange={e => setMetaDescription(e.target.value)} placeholder="SEO description for search engines" />
                </div>
                <div>
                  <Label htmlFor="metaKeywords">Meta Keywords</Label>
                  <Input id="metaKeywords" value={metaKeywords} onChange={e => setMetaKeywords(e.target.value)} placeholder="Comma-separated keywords for SEO" />
                </div>
              </div>
            </section>

            {/* Settings */}
            <section>
              <h2 className="font-semibold text-lg mb-2">Settings</h2>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={publishNow} onChange={e => setPublishNow(e.target.checked)} />
                  Publish immediately
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={allowComments} onChange={e => setAllowComments(e.target.checked)} />
                  Allow comments
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={featurePost} onChange={e => setFeaturePost(e.target.checked)} />
                  Feature this post
                </label>
              </div>
            </section>

            {/* Custom Fields */}
            <section>
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-lg">Custom Fields</h2>
                <Button type="button" variant="outline" size="sm" onClick={addCustomField}>
                  <Plus className="w-4 h-4 mr-2" /> Add Field
                </Button>
              </div>
              {customFields.map((field, index) => (
                <div key={index} className="flex gap-4 items-start mb-2">
                  <div className="flex-1">
                    <Label>Field Name</Label>
                    <Input placeholder="e.g., customField" value={field.key} onChange={e => updateCustomField(index, 'key', e.target.value)} />
                  </div>
                  <div className="flex-1">
                    <Label>Value</Label>
                    <Input placeholder="Enter value" value={field.value} onChange={e => updateCustomField(index, 'value', e.target.value)} />
                  </div>
                  <Button type="button" variant="ghost" size="icon" className="mt-8" onClick={() => removeCustomField(index)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </section>

            <div className="flex justify-end gap-4">
              <Link href="/admin/dashboard/blog">
                <Button variant="outline" type="button">Cancel</Button>
              </Link>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 