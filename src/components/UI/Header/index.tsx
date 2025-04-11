import { Logo, Dropdown, Menu, LinkButton } from '../../../components';
import styles from './header.module.scss';

const Header = () => {
    return (
        <>
            <div className={styles.headerWrapp}>
                <Logo/>
                <p className={styles.navbarMenu}>
                    <Dropdown/>
                    <Menu/>
                </p>
                <LinkButton to='#'>Вход</LinkButton>
            </div>
        </>
    );
};

export { Header };
