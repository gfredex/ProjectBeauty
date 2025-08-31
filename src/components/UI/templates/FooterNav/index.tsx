import React from 'react';
import styles from './footerNav.module.scss';
import { LocalLink, SupportInfo } from '@/components';

const FooterNav: React.FC = () => {
    return (
        <div className={styles.footerNav}>
            <p className={styles.wrappClients}>
                <h4 className={styles.titleFooterNav}>Клиент</h4>
                <ul>
                    <li className={styles.wrappItemFooter}>
                        <LocalLink to={'#'} classNames={{ linkClass: 'itemFooterNav' }}>
                            Услуги
                        </LocalLink>
                    </li>
                    <li className={styles.wrappItemFooter}>
                        <LocalLink to={'#'} classNames={{ linkClass: 'itemFooterNav' }}>
                            Отзывы
                        </LocalLink>
                    </li>
                    <li className={styles.wrappItemFooter}>
                        <LocalLink to={'#'} classNames={{ linkClass: 'itemFooterNav' }}>
                            Условия использования
                        </LocalLink>
                    </li>
                </ul>
            </p>
            <p className={styles.wrappMasters}>
                <h4 className={styles.titleFooterNav}>Мастер </h4>
                <ul>
                    <li className={styles.wrappItemFooter}>
                        <LocalLink to={'#'} classNames={{ linkClass: 'itemFooterNav' }}>
                            Вход для специалистов
                        </LocalLink>
                    </li>
                    <li className={styles.wrappItemFooter}>
                        <LocalLink to={'#'} classNames={{ linkClass: 'itemFooterNav' }}>
                            Партнёрская программа
                        </LocalLink>
                    </li>
                </ul>
            </p>
            <p className={styles.wrappAbout}>
                <h4 className={styles.titleFooterNav}>О нас </h4>
                <ul>
                    <li className={styles.wrappItemFooter}>
                        <LocalLink to={'#'} classNames={{ linkClass: 'itemFooterNav' }}>
                            Контакты
                        </LocalLink>
                    </li>
                    <li className={styles.wrappItemFooter}>
                        <LocalLink to={'#'} classNames={{ linkClass: 'itemFooterNav' }}>
                            Вопросы
                        </LocalLink>
                    </li>
                    <li className={styles.wrappItemFooter}>
                        <LocalLink to={'#'} classNames={{ linkClass: 'itemFooterNav' }}>
                            Наша команда
                        </LocalLink>
                    </li>
                </ul>
            </p>
            <SupportInfo />
        </div>
    );
};

export { FooterNav };
