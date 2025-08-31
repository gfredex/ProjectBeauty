import React, { forwardRef } from 'react';
import styles from './input.module.scss';

type InputProps = {
    type: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, name, value, placeholder, onChange, className = '', ...rest }, ref) => {
        return (
            <input
                ref={ref}
                className={`${styles.input} ${className}`}
                type={type}
                name={name}
                value={type !== 'file' ? value : undefined}
                onChange={onChange}
                placeholder={placeholder}
                {...rest}
            />
        );
    }
);

Input.displayName = 'Input';

export { Input };
