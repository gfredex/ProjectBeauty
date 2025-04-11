import {PropsWithChildren} from "react";

const Header = ({ children }: PropsWithChildren<object>) => {
    return ( <> { children } </> );
};

export { Header };
