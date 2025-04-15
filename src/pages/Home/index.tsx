import {Dropdown, Header, LinkButton, Logo, Main, Menu, Banner, SearchPanel, MastersToolbar, MasterCard} from '../../components';
import React from 'react';
import styles from './home.module.scss';

function Home() {
    return (
        <>
            <Header>
                <div className={'bg-light-pink'}>
                    <div className={'container'}>
                        <div className={styles.headerWrapp}>
                            <Logo />
                            <p className={styles.navbarMenu}>
                                <Dropdown
                                    buttonLabel="Меню"
                                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                                    iconName={'PurpleArrowDown'}
                                    iconSize={16}
                                    iconStroke={'#AA01A2'}
                                    iconColor={'transparent'}
                                    onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
                                />

                                <Menu />
                            </p>
                            <LinkButton to="#">Вход</LinkButton>
                        </div>
                    </div>
                </div>
            </Header>
            <Main>
                <div className={styles.hero}>
                    <div className={'container _h-100'}>
                        <Banner
                            title={'Твой мастер маникюра'}
                            subtitle={
                                'Онлайн-запись, напоминания клиентам и ведение клиентской базы для профессионалов индустрии красоты'
                            }
                            description={'один сервис - много возможностей'}
                        />
                    </div>
                </div>
                <div className={'container _relative'}>
                    <SearchPanel
                        title={'Найди своего мастера  ногтевого сервиса  максимально быстро, и удобно.'}
                    ></SearchPanel>
                    <p className={styles.wrappToolbar}>
                        <MastersToolbar />
                    </p>
                </div>
                <div className={'container'}>
                    <p className={styles.wrappCards}>
                        <MasterCard
                            name={'Маргарита Чернышова'}
                            specialty={'мастер маникюра '}
                            address={'г. Минск, ул. Центральная, 54'}
                            rating={5.0}
                            reviewsCount={4}
                        />
                        <MasterCard
                            name={'Маргарита Чернышова'}
                            specialty={'мастер маникюра '}
                            address={'г. Минск, ул. Центральная, 54'}
                            rating={5.0}
                            reviewsCount={4}
                        />
                        <MasterCard
                            name={'Маргарита Чернышова'}
                            specialty={'мастер маникюра '}
                            address={'г. Минск, ул. Центральная, 54'}
                            rating={5.0}
                            reviewsCount={4}
                        />
                        <MasterCard
                            name={'Маргарита Чернышова'}
                            specialty={'мастер маникюра '}
                            address={'г. Минск, ул. Центральная, 54'}
                            rating={5.0}
                            reviewsCount={4}
                        />
                        <MasterCard
                            name={'Маргарита Чернышова'}
                            specialty={'мастер маникюра '}
                            address={'г. Минск, ул. Центральная, 54'}
                            rating={5.0}
                            reviewsCount={4}
                        />
                        <MasterCard
                            name={'Маргарита Чернышова'}
                            specialty={'мастер маникюра '}
                            address={'г. Минск, ул. Центральная, 54'}
                            rating={5.0}
                            reviewsCount={4}
                        />
                    </p>
                </div>
            </Main>
        </>
    );
}

export {Home};
