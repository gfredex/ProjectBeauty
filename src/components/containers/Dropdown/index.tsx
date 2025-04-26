import React from 'react';
import { DropdownUI } from '../../UI/DropdownUI';
import { useDropdown } from '../../../hooks/useDropdown';

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
    const { open, toggle, ref } = useDropdown<HTMLDivElement>();

    const handleItemClick = (label: string) => {
        onItemClick?.(label);
        toggle(); // или close() если нужно
    };

    return (
        <DropdownUI
            open={open}
            menuRef={ref}
            items={items}
            buttonLabel={buttonLabel}
            onItemClick={handleItemClick}
            toggleDropdown={toggle}
            classNames={classNames}
            iconName={iconName}
            iconClassName={iconClassName}
        />
    );
};

export { Dropdown };