import React from 'react';
import { Button } from '@/components';
import styles from './banner.module.scss';

export type UserType = 'master' | 'client';

type BannerProps = {
    title: string;
    subtitle: string;
    description: string;
    activeUserType: UserType;
    onUserTypeChange: (type: UserType) => void;
};

const Banner: React.FC<BannerProps> = ({ title, subtitle, description, activeUserType, onUserTypeChange }) => {
    return (
        <div className={styles.banner}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.bannerActions}>
                <Button
                    classNames={{
                        buttonClass: activeUserType === 'master' ? 'activeButton' : 'inactiveButton',
                    }}
                    onClick={() => onUserTypeChange('master')}
                >
                    <span>Мастерам</span>
                </Button>
                <Button
                    classNames={{
                        buttonClass: activeUserType === 'client' ? 'activeButton' : 'inactiveButton',
                    }}
                    onClick={() => onUserTypeChange('client')}
                >
                    <span>Клиентам</span>
                </Button>
            </div>
        </div>
    );
};

export { Banner };
