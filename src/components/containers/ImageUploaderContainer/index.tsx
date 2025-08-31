import React, { useRef, useState } from 'react';
import { ImageUploader } from '@/components';

const ImageUploaderContainer: React.FC = () => {
    const [preview, setPreview] = useState<string | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreview(null);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const triggerUpload = (e: React.MouseEvent) => {
        e.stopPropagation();
        inputRef.current?.click();
    };

    return (
        <ImageUploader
            preview={preview}
            isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTriggerUpload={triggerUpload}
            onRemoveImage={handleRemoveImage}
            inputRef={inputRef}
            onImageUpload={handleImageUpload}
        />
    );
};

export { ImageUploaderContainer };
