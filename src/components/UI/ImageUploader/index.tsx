import React from 'react';
import Upload from '@/assets/icons/colored/Upload.svg?react';
import Edit from '@/assets/icons/colored/Edit.svg?react';
import { SvgIcon, Button, Input } from '@/components';
import styles from './imageUploader.module.scss';

interface ImageUploaderProps {
    preview: string | null;
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onTriggerUpload: (e: React.MouseEvent) => void;
    onRemoveImage: (e: React.MouseEvent) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
                                                         preview,
                                                         isHovered,
                                                         onMouseEnter,
                                                         onMouseLeave,
                                                         onTriggerUpload,
                                                         onRemoveImage,
                                                         inputRef,
                                                         onImageUpload
                                                     }) => (
    <div
        className={styles.wrapper}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={!preview ? onTriggerUpload : undefined}
    >
        {preview ? (
            <>
                <img src={preview} alt="Preview" className={styles.thumbnail} />
                {isHovered && (
                    <>
                        <Button
                            onClick={onTriggerUpload}
                            type="button"
                            classNames={{ buttonClass: 'iconButton' }}
                        >
                            <SvgIcon Icon={Edit} className="editUpload" />
                        </Button>
                        <Button
                            onClick={onRemoveImage}
                            type="button"
                            classNames={{ buttonClass: 'editButtonUploader' }}
                        >
                            редактировать
                        </Button>
                    </>
                )}
            </>
        ) : (
            <div className={styles.uploadArea}>
                <SvgIcon Icon={Upload} />
                {isHovered && <div className={styles.tooltip}>загрузите файл</div>}
            </div>
        )}
        <Input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            ref={inputRef}
            style={{ display: 'none' }}
        />
    </div>
);

export { ImageUploader };