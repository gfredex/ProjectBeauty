import React from 'react';
import styles from './svgIcon.module.scss';

type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

type SvgIconProps = {
    Icon: SvgComponent;
    className?: keyof typeof styles;
};

const SvgIcon: React.FC<SvgIconProps> = ({ Icon, className }) => {
    const appliedClass = className ? styles[className] : '';

    return <Icon className={appliedClass} />;
};

export { SvgIcon };
