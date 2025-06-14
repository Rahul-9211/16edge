"use client";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function BlogActions({ slug }: { slug: string }) {
  const router = useRouter();

  return (
    <>
      <Link href={`/admin/dashboard/blog/edit/${slug}`}>
        <Button variant="outline" size="sm">
          <Pencil className="w-4 h-4 mr-2" />
          Edit
        </Button>
      </Link>
      <Button
        type="button"
        variant="destructive"
        size="sm"
        onClick={async () => {
          if (!window.confirm("Are you sure you want to delete this blog?")) return;
          const res = await fetch(`/api/blog/${slug}`, { method: "DELETE" });
          if (res.ok) {
            toast.success("Blog deleted!");
            router.refresh();
          } else {
            toast.error("Failed to delete blog.");
          }
        }}
      >
        <Trash2 className="w-4 h-4 mr-2" />
        Delete
      </Button>
    </>
  );
} 