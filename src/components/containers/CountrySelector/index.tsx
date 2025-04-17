import React, { useState, useEffect, useRef } from 'react';
import styles from './countrySelector.module.scss';
import {IconSprite} from "../../UI/IconSprite";

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

    // обработка кликов вне компонента
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
        <div className={styles.wrapper} ref={wrapperRef}>
            {current && (
                <div className={styles.currentCountry} onClick={toggleDropdown}>
                    <img
                        src={`https://flagcdn.com/w40/${current.code}.png`}
                        alt={current.name}
                        className={styles.flag}
                    />
                    <span>
                        {current.name} — <span className={styles.changeText}>сменить страну</span>
                    </span>
                    <IconSprite name='PurpleArrowDown' classNames={{iconClass:'selectCountry'}}/>
                </div>
            )}
            {open && (
                <ul className={styles.dropdown}>
                    {countries.map((country) => (
                        <li
                            key={country.code}
                            onClick={() => selectCountry(country.code)}
                            className={styles.dropdownItem}
                        >
                            <img
                                src={`https://flagcdn.com/w40/${country.code}.png`}
                                alt={country.name}
                                className={styles.flag}
                            />
                            {country.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export { CountrySelector };