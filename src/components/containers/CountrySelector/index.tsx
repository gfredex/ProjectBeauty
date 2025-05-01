import React from 'react';
import { CountryUI } from '@/components';
import { useDropdown } from '@/hooks/useDropdown.ts';

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
    const [selected, setSelected] = React.useState<string>('by');
    const { open, toggle, ref } = useDropdown<HTMLDivElement>();

    const current = countries.find((c) => c.code === selected);
    const selectCountry = (code: string): void => {
        setSelected(code);
        toggle();
    };

    return (
        <CountryUI
            wrapperRef={ref}
            open={open}
            current={current}
            countries={countries}
            toggleDropdown={toggle}
            selectCountry={selectCountry}
        />
    );
};

export { CountrySelector };