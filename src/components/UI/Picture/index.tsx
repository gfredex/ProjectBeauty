import React from 'react';
import styles from './picture.module.scss';
import { cn } from '@/utils/cn';

type PictureProps = {
    src: string;
    alt?: string;
    className?: keyof typeof styles;
};

const Picture: React.FC<PictureProps> = ({ src, alt, className }) => {
    const appliedClass = className ? cn(styles, className) : '';
    return <img src={src} alt={alt} className={appliedClass} />;
};

export { Picture };
