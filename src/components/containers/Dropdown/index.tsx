import React, { useState, useEffect } from 'react';
import { DropdownUI } from '@/components';
import { useDropdown } from '@/hooks/useDropdown.ts';

type ClassNames = {
    wrapper?: string;
    button?: string;
    list?: string;
    item?: string;
};

type DropdownContainerProps = {
    items: string[];
    buttonLabel: string;
    selectedLabel?: string | null;
    onItemClick?: (label: string) => void;
    classNames?: ClassNames;
    iconName?: string;
    iconClassName?: string;
};

const Dropdown: React.FC<DropdownContainerProps> = ({
                                                        items,
                                                        buttonLabel,
                                                        selectedLabel,
                                                        onItemClick,
                                                        iconName,
                                                        iconClassName,
                                                        classNames = {},
                                                    }) => {
    const { open, toggle, ref } = useDropdown<HTMLDivElement>();

    const [label, setLabel] = useState(buttonLabel);

    useEffect(() => {
        if (selectedLabel) {
            setLabel(selectedLabel);
        } else {
            setLabel(buttonLabel);
        }
    }, [selectedLabel, buttonLabel]);

    const handleItemClick = (itemLabel: string) => {
        setLabel(itemLabel);
        onItemClick?.(itemLabel);
        toggle();
    };

    return (
        <DropdownUI
            open={open}
            menuRef={ref}
            items={items}
            buttonLabel={label}
            onItemClick={handleItemClick}
            toggleDropdown={toggle}
            classNames={classNames}
            iconName={iconName}
            iconClassName={iconClassName}
        />
    );
};

export { Dropdown };