import {Dropdown, Header, LinkButton, Logo, Main, Menu, Banner, SearchPanel} from '../../components';
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
                                <Dropdown
                                    buttonLabel="Меню"
                                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                                    onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
                                />

                                <Menu/>
                            </p>
                            <LinkButton to='#'>Вход</LinkButton>
                        </div>
                    </div>
                </div>
            </Header>
            <Main>
                <div className={styles.hero}>
                    <div className={'container _h-100'}>
                        <Banner
                            title={'Твой мастер маникюра'}
                            subtitle={'Онлайн-запись, напоминания клиентам и ведение клиентской базы для профессионалов индустрии красоты'}
                            description={'один сервис - много возможностей'}/>
                    </div>
                </div>
                <div className={'container'}>
                    <SearchPanel title={'Найди своего мастера  ногтевого сервиса  максимально быстро, и удобно.'}></SearchPanel>
                </div>
            </Main>
        </>
    );
}

export {Home};
