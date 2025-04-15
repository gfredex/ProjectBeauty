import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../../UI/Icon';
import { cn } from '../../../utils/cn';
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
    iconName?: string;
    iconStroke?: string;
    iconColor?: string;
    iconSize?: number;
};

const Dropdown: React.FC<DropdownProps> = ({items, buttonLabel,
                       onItemClick, iconStroke, iconSize, iconName, iconColor, classNames = {} }) => {
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

    return (
        <div ref={menuRef} className={cn(styles, 'dropMenuWrap', classNames.wrapper)}>
            <button
                type='button'
                onClick={() => setOpen(prev => !prev)}
                className={cn(styles, 'dropMenuBtn', classNames.button)}
            >
                <span>{buttonLabel}</span>
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                    stroke={iconStroke} />
            </button>

            {open && (
                <ul className={cn(styles, 'dropMenuList', classNames.list)}>
                    {items.map((label, index) => (
                        <li
                            key={index}
                            className={cn(styles, 'dropMenuItem', classNames.item)}
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
