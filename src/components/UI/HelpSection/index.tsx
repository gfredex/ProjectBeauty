import React from 'react';
import styles from './helpSection.module.scss';
import Viber from '../../../assets/icons/colored/Viber.svg?react';
import WhatsApp from '../../../assets/icons/colored/WhatsApp.svg?react';
import ExternalLink from "../ExternalLink";
import {SvgIcon} from "../SvgIcon";

const HelpSection: React.FC = () => {
    return (
        <div className={styles.wrappHelpSection}>
            <h2 className={styles.titleHelp}>Возникли вопросы?</h2>
            <p className={styles.subtitleHelp}>Свяжитесь с нами в мессенджерах:</p>
            <div className={styles.iconsHelp}>
                <ExternalLink href='viber://chat?number=%2B1234567890'
                              classNames={{ linkClass: 'viberLink' }}>
                    <SvgIcon Icon={Viber}/>
                </ExternalLink>
                <ExternalLink href='https://wa.me/1234567890'
                              classNames={{ linkClass: 'whatsAppLink' }}>
                     <SvgIcon Icon={WhatsApp}/>
                </ExternalLink>
            </div>
        </div>
    );
}

export {HelpSection};