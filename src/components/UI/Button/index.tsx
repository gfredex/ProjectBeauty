import React from 'react';
import { cn } from '@/utils/cn.ts';
import styles from './button.module.scss';

type ClassNames = {
    buttonClass?: string;
};

type ButtonProps = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    classNames?: ClassNames;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', disabled = false, classNames = {} }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(styles, 'btn', classNames.buttonClass) }
        >
            {children}
        </button>
    )
}

export { Button };