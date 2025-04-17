import React, { useState, useEffect, useRef } from 'react';
import { CountryUI } from '../../UI/CountryUI';

type Country = {
    code: string;
    name: string;
};

const countries: Country[] = [
    { code: 'by', name: 'Беларусь' },
    { code: 'ru', name: 'Россия' },
    { code: 'ua', name: 'Украина' },
    { code: 'kz', name: 'Казахстан' },
    { code: 'us', name: 'США' },
];

const CountrySelector: React.FC = () => {
    const [selected, setSelected] = useState<string>('by');
    const [open, setOpen] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const current = countries.find((c) => c.code === selected);

    const toggleDropdown = (): void => setOpen(!open);
    const selectCountry = (code: string): void => {
        setSelected(code);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <CountryUI
            wrapperRef={wrapperRef}
            open={open}
            current={current}
            countries={countries}
            toggleDropdown={toggleDropdown}
            selectCountry={selectCountry}
        />
    );
};

export { CountrySelector };
