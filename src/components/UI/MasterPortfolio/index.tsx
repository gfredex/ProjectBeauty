import React from 'react';
import { ServiceCardSlider } from '@/components';
import styles from '@/components/UI/MasterServices/masterServices.module.scss';

const MasterPortfolio: React.FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Портфолио</h2>
            <ServiceCardSlider/>
        </div>
    );
};

export { MasterPortfolio };