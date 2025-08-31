import React from 'react';
import styles from './masterCard.module.scss';
import { Picture, Button, IconSprite } from '@/components';
import { getReviewWord } from '@/utils/getWordForm.ts';

type MasterCardProps = {
    name?: string;
    rating?: number;
    reviewsCount?: number;
    specialty?: string;
    address?: string;
    /* avatarAddress?: string;*/
};

const MasterCard: React.FC<MasterCardProps> = ({
    name,
    rating,
    reviewsCount,
    specialty,
    address /*, avatarAddress*/,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.masterWrapp}>
                <Picture src={'./images/masterPhoto.png'} alt={'фото мастера'} />
                <div className={styles.masterInfo}>
                    <IconSprite name="StarOutline" classNames={{ iconClass: 'starOutIcon' }} />
                    <span className={styles.evalMaster}>{rating.toFixed(1)}</span>
                    <IconSprite name="Message" classNames={{ iconClass: 'messageIcon' }} />
                    <span>
                        {reviewsCount} {getReviewWord(reviewsCount)}
                    </span>
                </div>
            </div>
            <p className={styles.infoWrapper}>
                <p className={styles.infoNextWrapper}>
                    <div className={styles.info}>
                        <h2 className={styles.name}>{name}</h2>
                        <p className={styles.specialty}>{specialty}</p>
                        <p className={styles.address}>{address}</p>
                    </div>
                    <IconSprite name="HeartOutline" classNames={{ iconClass: 'heartOutIcon' }} />
                </p>
                <Button classNames={{ buttonClass: 'bookBtn' }}>Записаться</Button>
            </p>
        </div>
    );
};

export { MasterCard };
