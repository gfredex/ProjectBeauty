import React from "react";
import { Button } from "../Button";
import styles from './banner.module.scss';

type BannerProps = {
    title: string;
    subtitle: string;
    description: string;
};

const Banner: React.FC<BannerProps> = ( { title, subtitle, description }) => {
    return (
        <div className={styles.banner}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.bannerActions}>
                <Button className='masters'>Мастерам</Button>
                <Button className='clients'>Клиентам</Button>
            </div>
        </div>
    );
};

export { Banner };