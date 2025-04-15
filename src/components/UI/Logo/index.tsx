import React from 'react';
import {SvgIcon} from "../SvgIcon";
import logoIcon from '../../../assets/icons/colored/Logo.svg?react';


const Logo: React.FC = () => {
    return (
        <>
            <SvgIcon Icon={logoIcon}/>
        </>
    );
};

export { Logo };
