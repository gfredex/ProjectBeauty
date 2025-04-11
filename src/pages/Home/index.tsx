import {Header, Main} from '../../components';
import React from 'react';
import styles from './home.module.scss';

function Home() {
    return (
        <div className={'bg-light-pink'}>
            <div className={'container'}>
                <Header />
                <Main>
                    <section className={styles.hero}>

                    </section>
                </Main>
            </div>
        </div>
    );
}

export { Home };
