import React from 'react';
import styles from './input.module.scss';

type InputProps = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

export const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className ? className : styles.input}
        />
    );
};
