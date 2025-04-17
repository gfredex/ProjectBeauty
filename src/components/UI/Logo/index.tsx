import React from 'react';
import {SvgIcon} from "../SvgIcon";

type LogoProps = {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Logo: React.FC<LogoProps> = ({ icon }) => {
    return (
        <SvgIcon Icon={icon} />
    );
};

export { Logo };
