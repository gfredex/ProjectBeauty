import { Logo, Dropdown } from '../../../components';
import styles from './header.module.scss';

const Header = () => {

    return (
        <>
            <div className={styles.headerWrapp}>
                <Logo/>
                <Dropdown/>
            </div>
        </>
    );
};

export { Header };