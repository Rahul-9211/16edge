"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";

interface TiptapEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TiptapEditor({ value, onChange }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Image,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      },
    },
  });

  // Keep editor in sync with value prop
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "<p></p>", false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div>
      <div className="flex gap-2 mb-2 flex-wrap">
        <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()} className={editor?.isActive('bold') ? 'font-bold text-primary' : ''}>B</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleItalic().run()} className={editor?.isActive('italic') ? 'italic text-primary' : ''}>I</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleStrike().run()} className={editor?.isActive('strike') ? 'line-through text-primary' : ''}>S</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleBulletList().run()} className={editor?.isActive('bulletList') ? 'text-primary' : ''}>• List</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleOrderedList().run()} className={editor?.isActive('orderedList') ? 'text-primary' : ''}>1. List</button>
        <button type="button" onClick={() => editor?.chain().focus().setParagraph().run()} className={editor?.isActive('paragraph') ? 'text-primary' : ''}>P</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className={editor?.isActive('heading', { level: 2 }) ? 'text-primary' : ''}>H2</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} className={editor?.isActive('heading', { level: 3 }) ? 'text-primary' : ''}>H3</button>
        <button type="button" onClick={() => editor?.chain().focus().setHorizontalRule().run()}>―</button>
        <button type="button" onClick={() => {
          const url = window.prompt('Enter image URL');
          if (url) editor?.chain().focus().setImage({ src: url }).run();
        }}>Img</button>
        <button type="button" onClick={() => {
          const url = window.prompt('Enter link URL');
          if (url) editor?.chain().focus().toggleLink({ href: url }).run();
        }}>Link</button>
        <button type="button" onClick={() => editor?.chain().focus().unsetLink().run()}>Unlink</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
} 