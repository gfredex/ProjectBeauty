import React from 'react';
import styles from './input.module.scss';

type InputProps = {
    type: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ type, name, value, placeholder, onChange }) => {
    return (
        <input
            className={styles.input}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export { Input };