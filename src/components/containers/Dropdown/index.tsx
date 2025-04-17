import React, { useState, useRef, useEffect } from 'react';
import { DropdownUI } from '../../UI/DropdownUI';

type ClassNames = {
    wrapper?: string;
    button?: string;
    list?: string;
    item?: string;
};

type DropdownContainerProps = {
    items: string[];
    buttonLabel: string;
    onItemClick?: (label: string) => void;
    classNames?: ClassNames;
    iconName?: string;
    iconClassName?: string;
};

const Dropdown: React.FC<DropdownContainerProps> = ({
                                                                 items,
                                                                 buttonLabel,
                                                                 onItemClick,
                                                                 iconName,
                                                                 iconClassName,
                                                                 classNames = {},
                                                             }) => {
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

    const toggleDropdown = () => setOpen(prev => !prev);

    const handleItemClick = (label: string) => {
        onItemClick?.(label);
        setOpen(false);
    };

    return (
        <DropdownUI
            open={open}
            menuRef={menuRef}
            items={items}
            buttonLabel={buttonLabel}
            onItemClick={handleItemClick}
            toggleDropdown={toggleDropdown}
            classNames={classNames}
            iconName={iconName}
            iconClassName={iconClassName}
        />
    );
};

export { Dropdown };
