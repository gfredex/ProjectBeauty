import React from 'react';
import { Dropdown } from '../../containers/Dropdown';
import styles from './searchForm.module.scss';
import {Button} from "../Button";
import {Icon} from "../Icon";

const SearchForm: React.FC  = () => {
    return (
        <form className={styles.searchForm}>
            <Dropdown
                buttonLabel='Выбрать район'
                items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                classNames={{
                    wrapper: 'searchWrap',
                    button: 'searchPanelBtn',
                }}
                iconName={'GrayArrowDown'}
                iconSize={14}
                iconStroke={'#7D7979'}
                iconColor={'transparent'}
                onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
            />
            <Dropdown
                buttonLabel='Выбрать Услуги'
                items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                classNames={{
                    wrapper: 'searchWrap',
                    button: 'searchPanelBtn',
                }}
                iconName={'GrayArrowDown'}
                iconSize={14}
                iconStroke={'#7D7979'}
                iconColor={'transparent'}
                onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
            />
            <Dropdown
                buttonLabel='Какйо-то фильтр'
                items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                classNames={{
                    wrapper: 'searchWrap',
                    button: 'searchPanelBtn',
                }}
                iconName={'GrayArrowDown'}
                iconSize={14}
                iconStroke={'#7D7979'}
                iconColor={'transparent'}
                onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
            />
            <Dropdown
                buttonLabel='Выбрать Дату'
                items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                classNames={{
                    wrapper: 'searchWrap',
                    button: 'searchPanelBtn',
                }}
                iconName={'GrayArrowDown'}
                iconSize={14}
                iconStroke={'#7D7979'}
                iconColor={'transparent'}
                onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
            />
            <Dropdown
                buttonLabel='Цена'
                items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                classNames={{
                    wrapper: 'lastItemWrap',
                    button: 'searchPanelBtn',
                }}
                iconName={'GrayArrowDown'}
                iconSize={14}
                iconStroke={'#7D7979'}
                iconColor={'transparent'}
                onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
            />
            <Button classNames={{buttonClass:'searchBtn'}}>
                <span>найти</span>
                <Icon name='Magnifier' size={15} color='#fff'/>
            </Button>
        </form>
    );
};

export { SearchForm };
