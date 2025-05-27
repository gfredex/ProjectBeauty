import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Dropdown, IconSprite, Button } from '@/components';
import { setDistrict, setSearchTriggered } from '@/stores/slices/filtersSlice.ts';
import { RootState } from '@/stores/store.ts';
import styles from './searchForm.module.scss';

const SearchForm: React.FC  = () => {
    const dispatch = useDispatch();
    const district = useSelector((state: RootState) => state.filters.district);

    const handleRemoveDistrict = () => {
        dispatch(setDistrict(null));
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setSearchTriggered(true));
    };

    return (
        <form>
            <p className={styles.searchForm}>
                <Dropdown
                    buttonLabel='Выбрать район'
                    items={[
                        'Центральная',
                        'Парковая',
                        'Лесная',
                        'Победы',
                        'Гагарина',
                        'Советская',
                        'Молодёжная',
                        'Набережная'
                    ]}
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
                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                    classNames={{
                        wrapper: 'searchWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName={'GrayArrowDown'}
                    iconClassName={'searchFormIcon'}
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
                />
                <Button classNames={{buttonClass:'searchBtn'}} onClick={handleSearch}>
                    <span>найти</span>
                    <IconSprite name='Magnifier' classNames={{iconClass:'magnifier'}}/>
                </Button>
            </p>

            {district && (
                <p className={styles.selectedFilters}>
                    <button
                        type="button"
                        className={styles.filterTag}
                        onClick={handleRemoveDistrict}
                    >
                        {district} <span className={styles.removeIcon}>×</span>
                    </button>
                </p>
            )}
        </form>
    );
};

export { SearchForm };
