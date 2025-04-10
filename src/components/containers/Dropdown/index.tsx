import React, { useState, useRef, useEffect } from 'react';
import styles from './dropdown.module.scss'

interface MenuItem {
    label: string;
    onClick: () => void;
}

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
            <button
                onClick={() => setOpen(prev => !prev)}
                className={styles.dropMenuBtn}
            >
                Меню
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M5 7l5 5 5-5H5z" />
                </svg>
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
                            onMouseEnter={e => (e.currentTarget.style.background = '#fde2ee')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
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