import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.scss'

const menuItems = [
    { label: 'Главная', path: '#' },
    { label: 'Контакты', path: '#' },
    { label: 'Помощь', path: '#' },
    { label: 'Отзывы', path: '#' },
];

const Menu: React.FC = () => {
    const [activeItem, setActiveItem] = useState('Главная');

    return (
        <nav className={styles.nav}>
            {menuItems.map((item) => (
                <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setActiveItem(item.label)}
                    className={`${styles.navLink} ${activeItem === item.label ? styles.active : ''}`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

export { Menu };
