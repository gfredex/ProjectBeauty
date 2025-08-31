import React from 'react';
import { ImageUploaderContainer } from '@/components';
import styles from './diplomas.module.scss';

const Diplomas: React.FC = () => {
    const uploadSlots = 6;

    return (
        <div className={styles.diplomasWrapper}>
            <h2 className={styles.title}>Сертификаты и дипломы</h2>
            <div className={styles.grid}>
                {Array.from({ length: uploadSlots }).map((_, index) => (
                    <ImageUploaderContainer key={index} />
                ))}
            </div>
        </div>
    );
};

export { Diplomas };
