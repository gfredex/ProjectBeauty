import React, { RefObject } from 'react';
import styles from './countryUI.module.scss';
import { IconSprite } from '@/components';

type Country = {
    code: string;
    name: string;
};

type Props = {
    wrapperRef: RefObject<HTMLDivElement>;
    open: boolean;
    current?: Country;
    countries: Country[];
    toggleDropdown: () => void;
    selectCountry: (code: string) => void;
};

const CountryUI: React.FC<Props> = ({ wrapperRef, open, current, countries, toggleDropdown, selectCountry }) => {
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
                    <IconSprite name="PurpleArrowDown" classNames={{ iconClass: 'selectCountry' }} />
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

export { CountryUI };
