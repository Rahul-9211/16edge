'use client';

import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Upload, X } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface ImageUploadProps {
  onImageUploaded: (url: string) => void;
  currentImage?: string;
  label?: string;
}

export interface ImageUploadRef {
  reset: () => void;
}

const ImageUpload = forwardRef<ImageUploadRef, ImageUploadProps>(
  ({ onImageUploaded, currentImage, label = 'Upload Image' }, ref) => {
    const [isUploading, setIsUploading] = useState(false);
    const [preview, setPreview] = useState<string | null>(currentImage || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setPreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    }));

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        toast.error('Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed.');
        return;
      }

      // Validate file size (5MB max)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        toast.error('File too large. Maximum size is 5MB.');
        return;
      }

      try {
        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const data = await response.json();
        setPreview(data.url);
        onImageUploaded(data.url);
        toast.success('Image uploaded successfully!');
      } catch (error) {
        toast.error('Failed to upload image');
      } finally {
        setIsUploading(false);
      }
    };

    const handleRemove = () => {
      setPreview(null);
      onImageUploaded('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium">{label}</label>
        <div className="flex items-center space-x-4">
          <div
            className={`relative w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-primary transition-colors ${
              isUploading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => !isUploading && fileInputRef.current?.click()}
          >
            {preview ? (
              <>
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove();
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="text-center p-4">
                <Upload className="w-8 h-8 mx-auto text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  {isUploading ? 'Uploading...' : 'Click to upload'}
                </p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            disabled={isUploading}
          />
        </div>
      </div>
    );
  }
);

ImageUpload.displayName = 'ImageUpload';

export default ImageUpload; 