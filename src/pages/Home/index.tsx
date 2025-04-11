import {Dropdown, Header, LinkButton, Logo, Main, Menu, Banner} from '../../components';
import React from 'react';
import styles from './home.module.scss';

function Home() {
    return (
        <>
            <Header>
                <div className={'bg-light-pink'}>
                    <div className={'container'}>
                        <div className={styles.headerWrapp}>
                            <Logo/>
                            <p className={styles.navbarMenu}>
                                <Dropdown/>
                                <Menu/>
                            </p>
                            <LinkButton to='#'>Вход</LinkButton>
                        </div>
                    </div>
                </div>
            </Header>
            <Main>
                <section className={styles.hero}>
                    <div className={'container _h-100'}>
                        <Banner
                            title={'Твой мастер маникюра'}
                            subtitle={'Онлайн-запись, напоминания клиентам и ведение клиентской базы для профессионалов индустрии красоты'}
                            description={'один сервис - много возможностей'}/>
                    </div>
                </section>
            </Main>
        </>
    );
}

export {Home};
