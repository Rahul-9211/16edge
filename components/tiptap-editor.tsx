"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function QuillEditor({ value, onChange }: QuillEditorProps) {
  useEffect(() => {
    // Optionally, you can do something when value changes
  }, [value]);

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        style={{ minHeight: "200px", borderRadius: "8px" }}
      />
    </div>
  );
} 