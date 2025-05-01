import React from 'react';
import { Dropdown, IconSprite } from '@/components';
import styles from './searchForm.module.scss';
import {Button} from "../Button";

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
                iconClassName={'searchFormIcon'}
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
                iconClassName={'searchFormIcon'}
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
                iconClassName={'searchFormIcon'}
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
                iconClassName={'searchFormIcon'}
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
                iconClassName={'searchFormIcon'}
                onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
            />
            <Button classNames={{buttonClass:'searchBtn'}}>
                <span>найти</span>
                <IconSprite name='Magnifier' classNames={{iconClass:'magnifier'}}/>
            </Button>
        </form>
    );
};

export { SearchForm };
