import React from 'react';
import styles from './joinSection.module.scss';
import { Picture, Button } from "../../../components";

const JoinSection: React.FC = () => {
    return (
        <section className={styles.joinSection}>
            <div className={styles.content}>
                <h2 className={styles.title}>Бесплатный сервис для поиска клиентов</h2>
                <p className={styles.text}>
                    Ты мастер ногтевого сервиса или владелец бизнеса? Присоединяйся к нашей единой системе бронирования.<br/>
                    Прозрачные условия сотрудничества, удобный кабинет, уникальное<br/>сообщество и самые лояльные клиенты.
                </p>
                <p className={styles.subtext}>Расширяй свой бизнес с нами!</p>
                <Button classNames={{buttonClass: 'joinServBtn'}}>
                    Присоединиться к сервису бесплатно
                </Button>
            </div>
            <div className={styles.imageWrapper}>
                <Picture src={'./images/joinUsVisual.png'} alt={'присоединяйся к сервису'} />
            </div>
        </section>
    );
}

export { JoinSection };