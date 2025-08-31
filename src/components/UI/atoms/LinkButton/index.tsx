import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn.ts';
import styles from './linkButton.module.scss';

type ClassNames = {
    linkClass?: string;
};

type LinkButtonProps = {
    to: string;
    children: React.ReactNode;
    classNames?: ClassNames;
};

const LinkButton: React.FC<LinkButtonProps> = ({ to, children, classNames = {} }) => {
    return (
        <Link to={to} className={cn(styles, 'linkButton', classNames.linkClass)}>
            {children}
        </Link>
    );
};

export { LinkButton };
