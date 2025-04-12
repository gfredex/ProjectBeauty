import React from 'react';
import { SearchForm } from '../SearchForm';
import styles from './searchPanel.module.scss';

type SearchPanelProps = {
    title: string;
};

const SearchPanel: React.FC<SearchPanelProps> = ({ title }) => {
    return (
        <section className={styles.searchPanel}>
            <h1>{ title }</h1>
            <SearchForm/>
        </section>
    );
};

export { SearchPanel };
