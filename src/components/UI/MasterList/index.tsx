import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store.ts';
import { Button, MasterCard } from '@/components';
import { getMasterWord } from '@/utils/getWordForm.ts';
import styles from './masterList.module.scss';

type Master = {
    id: number;
    name: string;
    specialty: string;
    address: string;
    rating: number;
    reviewsCount: number;
};

const firstNames = ['Маргарита', 'Анастасия', 'Екатерина', 'Светлана', 'Ольга', 'Наталья', 'Вероника', 'Дарья'];
const lastNames = ['Чернышова', 'Иванова', 'Петрова', 'Сидорова', 'Кузнецова', 'Морозова', 'Смирнова', 'Попова'];
const streets = ['Центральная', 'Парковая', 'Лесная', 'Победы', 'Гагарина', 'Советская', 'Молодёжная', 'Набережная'];

const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomFloat = (min: number, max: number) => (Math.random() * (max - min) + min).toFixed(1);

const mockMasters: Master[] = Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    name: `${getRandom(firstNames)} ${getRandom(lastNames)}`,
    specialty: 'мастер маникюра',
    address: `г. Минск, ул. ${getRandom(streets)}, ${50 + index}`,
    rating: parseFloat(getRandomFloat(4.2, 5.0)),
    reviewsCount: Math.floor(Math.random() * 20 + 1),
}));

const INITIAL_VISIBLE_COUNT = 6;
const ITEMS_PER_PAGE = 12;

const MasterList: React.FC = () => {
    const { district, searchTriggered } = useSelector((state: RootState) => state.filters);

    const [hasClickedShowMore, setHasClickedShowMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    
    let filteredMasters: Master[] = mockMasters;

    if (searchTriggered && district) {
        const matching = mockMasters.filter((master) => master.address.includes(district));
        const nonMatching = mockMasters.filter((master) => !master.address.includes(district));
        filteredMasters = [...matching, ...nonMatching];
    }

    const totalPages = Math.ceil(filteredMasters.length / ITEMS_PER_PAGE);

    const visibleMasters = hasClickedShowMore
        ? filteredMasters.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
        : filteredMasters.slice(0, INITIAL_VISIBLE_COUNT);

    const handleShowMore = () => {
        setHasClickedShowMore(true);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <p className={styles.wrappCards}>
                {visibleMasters.map((master) => (
                    <MasterCard
                        key={master.id}
                        name={master.name}
                        specialty={master.specialty}
                        address={master.address}
                        rating={master.rating}
                        reviewsCount={master.reviewsCount}
                    />
                ))}
            </p>

            {!hasClickedShowMore && (
                <p className={styles.mastersMoreWrap}>
                    <Button classNames={{ buttonClass: 'mastersMoreBtn' }} onClick={handleShowMore}>
                        Показать еще мастеров по вашим параметрам
                    </Button>
                </p>
            )}

            {hasClickedShowMore && (
                <p className={styles.paginationWrap}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            classNames={{
                                buttonClass: `${currentPage === page ? 'activePageBtn' : 'pageBtn'}`
                            }}
                        >
                            {page}
                        </Button>
                    ))}
                </p>
            )}

            {hasClickedShowMore && currentPage < totalPages && (
                <p className={styles.showMoreWrap}>
                    <Button
                        onClick={() => handlePageChange(currentPage + 1)}
                        classNames={{ buttonClass: 'showMoreMasters' }}
                    >
                        Показать ещё {filteredMasters.length - currentPage * ITEMS_PER_PAGE}{' '}
                        {getMasterWord(filteredMasters.length - currentPage * ITEMS_PER_PAGE)}
                    </Button>
                </p>
            )}
        </>
    );
};

export { MasterList };