import React from 'react';
import {
    Dropdown,
    Header,
    Main,
    LinkButton,
    Logo,
    Menu,
    MasterSidebar,
    MasterProfileContainer,
    ScheduleContainer,
    MasterAboutContainer,
    MasterEducationContainer,
    MasterAdressesContainer,
    MasterServicesContainer,
    MasterExperienceContainer,
    Diplomas,
    MasterPortfolio, Footer, IconSprite, FooterNav, FooterLegal, CountrySelector,
} from '@/components';
import logoIcon from '../../assets/icons/colored/Logo.svg?react';
import { useAppSelector } from '@/hooks/reduxHooks';
import styles from './masterArea.module.scss';

const MasterArea = () => {
    const experience = useAppSelector((state) => state.master.experience);

    return (
        <>
            <Header>
                <div className="bg-light-pink">
                    <div className="container">
                        <div className={styles.headerWrapp}>
                            <Logo icon={logoIcon} />
                            <p className={styles.navbarMenu}>
                                <Dropdown
                                    buttonLabel="Меню"
                                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                                    iconName="PurpleArrowDown"
                                    iconClassName="dropDownMenu"
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
                <div className="bg-white">
                    <div className="container">
                        <div className={styles.masterProfileSection}>
                            <MasterSidebar />
                            <div className={styles.wrappMainPanel}>
                                <div className={styles.mainPanel}>
                                    <MasterProfileContainer />
                                    <ScheduleContainer />
                                </div>
                                <div className={styles.wrappAboutCard}>
                                    <MasterAboutContainer />
                                    <MasterEducationContainer />
                                    {experience[0] && (
                                        <MasterExperienceContainer index={0} />
                                    )}
                                    <Diplomas />
                                    {experience[1] && (
                                        <MasterExperienceContainer index={1} />
                                    )}
                                    <MasterAdressesContainer/>
                                    <MasterServicesContainer/>
                                    <MasterPortfolio/>
                                </div>
                            </div>
                        </div>
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
};

export { MasterArea };
