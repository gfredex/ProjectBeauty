import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../../assets/icons/colored/User.svg?react';
import Chat from '../../../assets/icons/colored/Chat.svg?react';
import Orders from '../../../assets/icons/colored/Orders.svg?react';
import Notification from '../../../assets/icons/colored/Notification.svg?react';
import Settings from '../../../assets/icons/colored/Settings.svg?react';
import { SvgIcon } from '@/components';
import styles from './masterSidebar.module.scss';
import { useAppSelector } from '@/hooks/reduxHooks';

type MasterSidebarProps = {
    avatarUrl?: string;
};

const MasterSidebar: React.FC<MasterSidebarProps> = ({ avatarUrl }) => {
    const userName = useAppSelector((state) => state.master.name);

    return (
        <aside className={styles.masterSidebar}>
            <div className={styles.masterInfoBox}>
                <div>
                    {avatarUrl ? (
                        <img src={avatarUrl} alt={`${userName} avatar`} />
                    ) : (
                        <div className={styles.wrapperImg}></div>
                    )}
                </div>
                <p className={styles.userName}>{userName}</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link className={styles.item} to="/profile">
                            <span>Мой Профиль</span>
                            <SvgIcon Icon={User} />
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.item} to="/messages">
                            <span>Сообщения</span>
                            <SvgIcon Icon={Chat} />
                        </Link>
                    </li>
                    <li>
                        <Link className={`${styles.item} ${styles.itemOrder}`} to="/orders">
                            <span>Заказы</span>
                            <SvgIcon Icon={Orders} />
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.item} to="/notifications">
                            <span>Уведомления</span>
                            <SvgIcon Icon={Notification} />
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.item} to="/settings">
                            <span>Настройки</span>
                            <SvgIcon Icon={Settings} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export { MasterSidebar };