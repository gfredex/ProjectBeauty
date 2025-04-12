import React from 'react';
import { Dropdown } from '../../containers/Dropdown';
import styles from './searchForm.module.scss';

const SearchForm: React.FC  = () => {
    return (
        <form className={styles.searchForm}>
            <Dropdown
                buttonLabel="Меню"
                items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                classNames={{
                    button: 'searchPanelBtn',
                }}
                onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
            />
        </form>
    );
};

export { SearchForm };
