import React from 'react';
import { cn } from '@/utils/cn.ts';
import styles from './externalLink.module.scss';

type ClassNames = {
    linkClass?: string;
};

type ExternalLinkProps = {
    href: string;
    children: React.ReactNode;
    classNames?: ClassNames;
    target?: '_blank' | '_self';
    rel?: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({
    href,
    children,
    classNames = {},
    target = '_blank',
    rel = 'noopener noreferrer',
}) => {
    return (
        <a href={href} className={cn(styles, 'link', classNames.linkClass)} target={target} rel={rel}>
            {children}
        </a>
    );
};

export { ExternalLink };
