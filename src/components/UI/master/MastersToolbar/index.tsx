import styles from './mastersToolbar.module.scss';
import { Button } from '@/components';
import { Dropdown } from '@/components';

const MastersToolbar = () => {
    return (
        <p className={styles.wrapToolbar}>
            <div className={styles.wrapBtnsToolbar}>
                <Button classNames={{ buttonClass: 'listBtn' }}>
                    <span>списком</span>
                </Button>
                <Button classNames={{ buttonClass: 'mapBtn' }}>
                    <span>на карте</span>
                </Button>
            </div>
            <Dropdown
                buttonLabel="Сортировать по"
                items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                iconName={'PlusIcon'}
                iconClassName={'toolbarIcon'}
                classNames={{ button: 'sortBtn', wrapper: 'toolbarWrapp' }}
                onItemClick={(label) => alert(`Вы выбрали: ${label}`)}
            ></Dropdown>
        </p>
    );
};

export { MastersToolbar };
