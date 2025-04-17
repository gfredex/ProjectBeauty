import React from 'react';
import styles from './footerLegal.module.scss';
import {IconSprite} from "../IconSprite";

interface FooterLegalProps {
    companyName: string;
    years: string;
    activityCode?: string;
}

const FooterLegal: React.FC<FooterLegalProps> = ({
                                                     companyName,
                                                     years,
                                                     activityCode = '2.01',
                                                 }) => {
    return (
        <div className={styles.footerLegal}>
            <div className={styles.wrapAge}>
                <IconSprite name='AgeIcon' classNames={{iconClass:'ageIcon'}}/>
                <p className={styles.footerLegalText}>
                    Информация, опубликованная на данном сайте, предназначена для любой аудитории, если иное не указано
                    дополнительно в отношении отдельных материалов.
                </p>
            </div>

            <p className={styles.footerCopyright}>
                © {companyName}, {years}
            </p>
            <p className={styles.footerLegalInfo}>
                ООО «{companyName}» осуществляет деятельность в области информационных технологий. Вид деятельности
                (код): {activityCode}.<br/>
                На информационном ресурсе применяются рекомендательные технологии.
            </p>
        </div>
    );
};

export { FooterLegal };
