import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, IconSprite, Button, SvgIcon } from '@/components';
import { setDistrict, setSpecialty, setSearchTriggered } from '@/stores/slices/filtersSlice.ts';
import { RootState } from '@/stores/store.ts';
import { streets, specialties } from '@/data/masters.ts';
import tagClose from '../../../assets/icons/colored/tagClose.svg?react';
import styles from './searchForm.module.scss';

const SearchForm: React.FC = () => {
    const dispatch = useDispatch();
    const { district, specialty } = useSelector((state: RootState) => state.filters);

    const handleRemoveDistrict = () => dispatch(setDistrict(null));
    const handleRemoveSpecialty = () => dispatch(setSpecialty(null));

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setSearchTriggered(true));
    };

    const handleClearAllFilters = () => {
        dispatch(setDistrict(null));
        dispatch(setSpecialty(null));
        dispatch(setSearchTriggered(false));
    };

    const showClearButton = district !== null || specialty !== null;

    return (
        <form onSubmit={handleSearch}>
            <p className={styles.searchForm}>
                <Dropdown
                    buttonLabel='Выбрать район'
                    items={streets}
                    selectedLabel={district}
                    onItemClick={(label) => dispatch(setDistrict(label))}
                    classNames={{
                        wrapper: 'searchWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName='GrayArrowDown'
                    iconClassName='searchFormIcon'
                />
                <Dropdown
                    buttonLabel='Выбрать Услуги'
                    items={specialties}
                    selectedLabel={specialty}
                    onItemClick={(label) => dispatch(setSpecialty(label))}
                    classNames={{
                        wrapper: 'searchWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName='GrayArrowDown'
                    iconClassName='searchFormIcon'
                />
                {/* Остальные дропдауны */}
                <Dropdown
                    buttonLabel='Какйо-то фильтр'
                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                    classNames={{
                        wrapper: 'searchWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName='GrayArrowDown'
                    iconClassName='searchFormIcon'
                />
                <Dropdown
                    buttonLabel='Выбрать Дату'
                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                    classNames={{
                        wrapper: 'searchWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName='GrayArrowDown'
                    iconClassName='searchFormIcon'
                />
                <Dropdown
                    buttonLabel='Цена'
                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                    classNames={{
                        wrapper: 'lastItemWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName='GrayArrowDown'
                    iconClassName='searchFormIcon'
                />
                <Button classNames={{ buttonClass: 'searchBtn' }} type="submit">
                    <span>найти</span>
                    <IconSprite name='Magnifier' classNames={{ iconClass: 'magnifier' }} />
                </Button>
            </p>

            <p className={styles.selectedFilters}>
                {district && (
                    <Button
                        type='button'
                        classNames={{ buttonClass: 'filterTag' }}
                        onClick={handleRemoveDistrict}
                    >
                        {district}
                        <SvgIcon Icon={tagClose} className='tagClose' />
                    </Button>
                )}
                {specialty && (
                    <Button
                        type='button'
                        classNames={{ buttonClass: 'filterTag' }}
                        onClick={handleRemoveSpecialty}
                    >
                        {specialty}
                        <SvgIcon Icon={tagClose} className='tagClose' />
                    </Button>
                )}
                {showClearButton && (
                    <Button
                        type='button'
                        classNames={{ buttonClass: 'clearFiltersBtn' }}
                        onClick={handleClearAllFilters}
                    >
                        Очистить фильтр
                    </Button>
                )}
            </p>
        </form>
    );
};

export { SearchForm };
