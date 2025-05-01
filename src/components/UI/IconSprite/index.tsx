import React from 'react';
import { cn } from '@/utils/cn.ts';
import styles from './iconSprite.module.scss';

type ClassNames = {
    iconClass?: string;
};

type IconProps = {
    name: string;
    classNames?: ClassNames;
};

const IconSprite: React.FC<IconProps> = ({ name, classNames = {} }) => {
    return (
        <svg
            className={cn(styles, 'sprite-icon', classNames.iconClass)}
            aria-hidden="true"
        >
            <use xlinkHref={`#icon-${name}`} />
        </svg>
    );
};

export { IconSprite };