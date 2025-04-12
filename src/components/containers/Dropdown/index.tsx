import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../../UI/Icon';
import styles from './dropdown.module.scss';

type ClassNames = {
    wrapper?: string;
    button?: string;
    list?: string;
    item?: string;
};

type DropdownProps = {
    items: string[];
    buttonLabel: string;
    onItemClick?: (label: string) => void;
    classNames?: ClassNames;
};

const Dropdown: React.FC<DropdownProps> = ({ items, buttonLabel, onItemClick, classNames = {} }) => {
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

    const handleItemClick = (label: string) => {
        onItemClick?.(label);
        setOpen(false);
    };

    const cn = (base: string, custom?: string) =>
        `${styles[base]}${custom ? ` ${styles[custom]}` : ''}`;

    return (
        <div ref={menuRef} className={cn('dropMenuWrap', classNames.wrapper)}>
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className={cn('dropMenuBtn', classNames.button)}
            >
                {buttonLabel}
                <Icon name="PurpleArrowDown" size={16} color="transparent" stroke="#AA01A2" />
            </button>

            {open && (
                <ul className={cn('dropMenuList', classNames.list)}>
                    {items.map((label, index) => (
                        <li
                            key={index}
                            className={cn('dropMenuItem', classNames.item)}
                            onClick={() => handleItemClick(label)}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export { Dropdown };
