import React from 'react';
import styles from './supportInfo.module.scss';
import VK from '../../../assets/icons/colored/VK.svg?react';
import Youtube from '../../../assets/icons/colored/Youtube.svg?react';
import {SvgIcon, ExternalLink } from '@/components';


const SupportInfo: React.FC = () => {
    return (
        <div className={styles.supportInfo}>
            <p className={styles.itemSupport}>Служба поддержки:</p>
            <p className={styles.emailSupport}>
                <ExternalLink
                    href={'mailto:support@dvesoroki.by'}
                    classNames={{linkClass:'supportEmail'}}>
                    support@dvesoroki.by
                </ExternalLink>
            </p>
            <p className={styles.itemSupport}>Будни: с 8 до 22</p>
            <p className={styles.itemSupport}>Выходные: с 9 до 22</p>
            <div className={styles.supportSocials}>
                <SvgIcon Icon={VK} className='iconSupport'/>
                <SvgIcon Icon={Youtube} className='iconSupport'/>
            </div>
        </div>
    );
};

export { SupportInfo };
