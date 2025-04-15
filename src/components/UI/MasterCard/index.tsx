import React from 'react';
import styles from './masterCard.module.scss';
import { Picture, SvgIcon, Button } from '../../../components';
import HeartOutline from '../../../assets/icons/colored/HeartOutline.svg?react';
import StarOutline from '../../../assets/icons/colored/StarOutline.svg?react';
import Message from '../../../assets/icons/colored/Message.svg?react';
import { getReviewWord } from '../../../utils/getWordForm.ts'

type MasterCardProps = {
    name?: string;
    rating?: number;
    reviewsCount?: number;
    specialty?: string;
    address?: string;
   /* avatarAddress?: string;*/
};

const MasterCard: React.FC<MasterCardProps> = ({ name, rating, reviewsCount, specialty, address/*, avatarAddress*/ }) => {
    return (
        <div className={styles.card}>
            <div className={styles.masterWrapp}>
                <Picture src={'./images/masterPhoto.png'} alt={'фото мастера'}/>
                <div className={styles.masterInfo}>
                    <SvgIcon Icon={StarOutline}/>
                    <span className={styles.evalMaster}>{rating.toFixed(1)}</span>
                    <SvgIcon Icon={Message}/>
                    <span>{reviewsCount} {getReviewWord(reviewsCount)}</span>
                </div>
            </div>
            <p className={styles.infoWrapper}>
                <p className={styles.infoNextWrapper}>
                    <div className={styles.info}>
                        <h2 className={styles.name}>{name}</h2>
                        <p className={styles.specialty}>{specialty}</p>
                        <p className={styles.address}>{address}</p>
                    </div>
                    <SvgIcon Icon={HeartOutline} className={'heartOutline'}/>
                </p>
                <Button classNames={{buttonClass: 'bookBtn'}}>Записаться</Button>
            </p>
        </div>
    );
}

export {MasterCard};