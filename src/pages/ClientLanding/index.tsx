import {
    Dropdown,
    Header,
    LinkButton,
    Logo,
    Main,
    Menu,
    Footer,
    IconSprite,
    FooterNav,
    FooterLegal,
    CountrySelector,
} from '@/components';

import logoIcon from '../../assets/icons/colored/Logo.svg?react';
import React from 'react';
import styles from "./clientlanding.module.scss";

function clientlanding() {
    return (
        <>
            <Header>
                <div className={'bg-light-pink'}>
                    <div className={'container'}>
                        <div className={styles.headerWrapp}>
                            <Logo icon={logoIcon} />
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
                <div>Content Landing Page</div>
            </Main>
            <Footer>
                <div className={'bg-light-pink'}>
                    <div className={'container'}>
                        <div className={styles.wrappFooter}>
                            <IconSprite name='LogoFooter' classNames={{ iconClass: 'logoFooter' }} />
                            <p className={styles.wrappFooterNav}>
                                <FooterNav />
                            </p>
                            <hr className={styles.footerSeparator} />
                            <p className={styles.basement}>
                                <FooterLegal companyName={'LOGO'} years={'2011–2024'} />
                                <CountrySelector />
                            </p>
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    )
}

export default clientlanding;