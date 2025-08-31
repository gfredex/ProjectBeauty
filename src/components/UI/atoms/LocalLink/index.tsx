import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn.ts';
import styles from './localLink.module.scss';

type ClassNames = {
    linkClass?: string;
};

type LocalLinkProps = {
    to: string;
    children: React.ReactNode;
    classNames?: ClassNames;
};

const LocalLink: React.FC<LocalLinkProps> = ({ to, children, classNames = {} }) => {
    return (
        <Link to={to} className={cn(styles, 'link', classNames.linkClass)}>
            {children}
        </Link>
    );
};

export { LocalLink };
