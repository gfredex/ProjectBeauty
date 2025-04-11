import React from 'react';
import { Link } from 'react-router-dom';
import styles from './linkButton.module.scss'

type LinkProps = {
    to: string;
    children: React.ReactNode;
    className?: string;
}

const LinkButton: React.FC<LinkProps> = ({ to, children, className = '' }) => {
    return (
        <Link to={to} className={`${styles.linkButton} ${className}`}>
            {children}
        </Link>
    );
}

export { LinkButton };