import React from 'react';
import { Button } from '../Button';
import styles from './banner.module.scss';

type BannerProps = {
    title: string;
    subtitle: string;
    description: string;
};

const Banner: React.FC<BannerProps> = ({ title, subtitle, description }) => {
    return (
        <div className={styles.banner}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.bannerActions}>
                <Button classNames={{ buttonClass: 'masters' }}>
                    <span>Мастерам</span>
                </Button>
                <Button classNames={{ buttonClass: 'clients' }}>
                    <span>Клиентам</span>
                </Button>
            </div>
        </div>
    );
};

export { Banner };
