import React, { useRef, useState } from 'react';
import Upload from '@/assets/icons/colored/Upload.svg?react';
import styles from './imageUploader.module.scss';
import { SvgIcon } from '@/components';

const ImageUploader: React.FC = () => {
    const [preview, setPreview] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            {preview ? (
                <img src={preview} alt="Preview" className={styles.thumbnail} />
            ) : (
                <SvgIcon Icon={Upload}/>
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={inputRef}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export { ImageUploader };