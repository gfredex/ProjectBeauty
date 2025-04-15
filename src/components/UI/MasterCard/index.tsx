import React from 'react';
import styles from './masterCard.module.scss';
import { Picture, SvgIcon } from '../../../components';
import HeartOutline from '../../../assets/icons/colored/HeartOutline.svg?react';

type MasterCardProps = {
    name?: string;
   /* rating?: number;*/
    reviewsCount?: number;
    specialty?: string;
    address?: string;
   /* avatarAddress?: string;*/
};

const MasterCard: React.FC<MasterCardProps> = ({ name, /*rating,*/ reviewsCount, specialty, address/*, avatarAddress*/ }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <Picture src={'./images/masterPhoto.png'} alt={'фото мастера'}/>
                <div className={styles.info}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.specialty}>{specialty}</p>
                    <p className={styles.address}>{address}</p>
                </div>
                <SvgIcon Icon={HeartOutline}/>
            </div>

            <div className={styles.footer}>
                <div className={styles.rating}>
                    <span>⭐</span>
                    <span>{reviewsCount} отзыв{reviewsCount === 1 ? '' : 'а'}</span>
                </div>
                <button className={styles.button}>Записаться</button>
            </div>
        </div>
    );
}

export { MasterCard };