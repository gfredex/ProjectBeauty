import React from 'react';
import styles from './picture.module.scss';

type PictureProps = {
    src: string;
    alt?: string;
    className?: keyof typeof styles;
};

const Picture: React.FC<PictureProps> = ({ src, alt, className }) => {
    const appliedClass = className ? styles[className] : '';

    return (
        <img src={src} alt={alt} className={appliedClass}/>
    );
};

export { Picture };
