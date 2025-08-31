import React from 'react';
import styles from './discountCard.module.scss';
import { Button } from '@/components';

type DiscountCardProps = {
    percent: number;
};

const DiscountCard: React.FC<DiscountCardProps> = ({ percent }) => {
    return (
        <div className={styles.discountCard}>
            <div className={styles.discountHeader}>{percent}% скидка</div>
            <p className={styles.discountText}>
                Скидка {percent} % при оформлении маникюра и педикюра в салоне Краски.
            </p>
            <Button classNames={{ buttonClass: 'discountBtn' }}>Записаться со скидкой</Button>
        </div>
    );
};

export { DiscountCard };
