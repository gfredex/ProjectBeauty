import { Logo } from '../Logo';
import styles from './header.module.scss';

const Header = () => {

    return (
        <>
            <div className={styles.headerWrapp}>
                <Logo/>
            </div>
        </>
    );
};

export { Header };