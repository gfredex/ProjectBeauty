import {
    Dropdown,
    Header,
    LinkButton,
    Logo,
    Main,
    Menu,
    SearchPanel,
    MastersToolbar,
    MasterCard,
    Button,
    Slider,
    JoinSection,
    HelpSection,
    Footer,
    IconSprite,
    FooterNav,
    FooterLegal,
    CountrySelector,
    BannerContainer,
} from '@/components';
import React from 'react';
import logoIcon from '../../assets/icons/colored/Logo.svg?react';
import styles from './home.module.scss';

function Home() {
    return (
        <>
            <Header>
                <div className={'bg-light-pink'}>
                    <div className={'container'}>
                        <div className={styles.headerWrapp}>
                            <Logo  icon={logoIcon}/>
                            <p className={styles.navbarMenu}>
                                <Dropdown
                                    buttonLabel="Меню"
                                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                                    iconName={'PurpleArrowDown'}
                                    iconClassName={'dropDownMenu'}
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
                        <BannerContainer/>
                    </div>
                </div>
                <div className={'bg-white'}>
                    <div className={'container _relative'}>
                        <SearchPanel
                            title={'Найди своего мастера  ногтевого сервиса  максимально быстро, и удобно.'}
                        ></SearchPanel>
                        <p className={styles.wrappToolbar}>
                            <MastersToolbar/>
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
                        <p className={styles.mastersMoreWrap}>
                            <Button classNames={{buttonClass: 'mastersMoreBtn'}}>
                                Показать еще мастеров по вашим параметрам
                            </Button>
                        </p>
                    </div>
                </div>
                <div className={'bg-light-pink'}>
                    <div className={'container'}>
                        <Slider/>
                    </div>
                </div>
                <div className={'bg-white'}>
                    <div className={'container'}>
                        <JoinSection/>
                    </div>
                </div>
                <div className={'bg-purple'}>
                    <div className={'container'}>
                        <HelpSection/>
                    </div>
                </div>
            </Main>
            <Footer>
                <div className={'bg-light-pink'}>
                    <div className={'container'}>
                        <div className={styles.wrappFooter}>
                            <IconSprite name='LogoFooter' classNames={{iconClass:'logoFooter'}}/>
                            <p className={styles.wrappFooterNav}>
                                <FooterNav/>
                            </p>
                            <hr className={styles.footerSeparator}/>
                            <p className={styles.basement}>
                                <FooterLegal companyName={'LOGO'} years={'2011–2024'}/>
                                <CountrySelector/>
                            </p>
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    );
}

export { Home };
