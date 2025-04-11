import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../../UI/Icon';
import styles from './dropdown.module.scss';

type MenuItem = {
    label: string;
    onClick: () => void;
};

const menuItems: MenuItem[] = [
    { label: 'Пункт 1', onClick: () => alert('Пункт 1') },
    { label: 'Пункт 2', onClick: () => alert('Пункт 2') },
    { label: 'Пункт 3', onClick: () => alert('Пункт 3') },
    { label: 'Пункт 4', onClick: () => alert('Пункт 4') },
];

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={menuRef} className={styles.dropMenuWrap}>
            <button onClick={() => setOpen((prev) => !prev)} className={styles.dropMenuBtn}>
                Меню
                <Icon name="PurpleArrowDown" size={16} color={'transparent'} stroke={'#AA01A2'} />
            </button>

            {open && (
                <ul className={styles.dropMenuList}>
                    {menuItems.map((item, index) => (
                        <li
                            className={styles.dropMenuItem}
                            key={index}
                            onClick={() => {
                                item.onClick();
                                setOpen(false);
                            }}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export { Dropdown };
