import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: keyof typeof styles;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', disabled = false, className }) => {
    const buttonClass = styles[className ?? ''];

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.btn} ${buttonClass}`}
        >
            {children}
        </button>
    )
}

export { Button };