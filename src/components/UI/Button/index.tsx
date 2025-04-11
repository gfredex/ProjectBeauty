import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', variant = 'primary', disabled = false, className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classNames('btn', `btn--${variant}`, className)}
        >
            {children}
        </button>
    )
}

export { Button };