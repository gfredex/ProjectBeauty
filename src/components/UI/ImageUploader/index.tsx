import React, { useRef, useState } from 'react';
import Upload from '@/assets/icons/colored/Upload.svg?react';
import Edit from '@/assets/icons/colored/Edit.svg?react';
import { SvgIcon } from '@/components';
import styles from './imageUploader.module.scss';

const ImageUploader: React.FC = () => {
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
        <div
            className={styles.wrapper}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={!preview ? triggerUpload : undefined}
        >
            {preview ? (
                <>
                    <img src={preview} alt="Preview" className={styles.thumbnail} />
                    {isHovered && (
                        <>
                            <button
                                className={styles.iconButton}
                                onClick={triggerUpload}
                                type="button"
                            >
                                <SvgIcon Icon={Edit} />
                            </button>
                            <button
                                className={styles.editButton}
                                onClick={handleRemoveImage}
                                type="button"
                            >
                                редактировать
                            </button>
                        </>
                    )}
                </>
            ) : (
                <div className={styles.uploadArea}>
                    <SvgIcon Icon={Upload} />
                    {isHovered && <div className={styles.tooltip}>загрузите файл</div>}
                </div>
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