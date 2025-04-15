import styles from './mastersToolbar.module.scss';
import { Button } from "../Button";
import {Dropdown} from "../../containers/Dropdown";

const MastersToolbar = () => {
    return (
        <p className={styles.wrapToolbar}>
            <div className={styles.wrapBtnsToolbar}>
                <Button classNames={{buttonClass: 'listBtn'}}>
                    <span>списком</span>
                </Button>
                <Button classNames={{buttonClass: 'mapBtn'}}>
                    <span>на карте</span>
                </Button>
            </div>
            <Dropdown
                buttonLabel='Сортировать по'
                items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                iconName={'PlusIcon'}
                iconSize={16}
                iconColor={'#7f207b'}
                classNames={{button:'sortBtn', wrapper:'toolbarWrapp'}}
                onItemClick={(label) => alert(`Вы выбрали: ${label}`)}>
            </Dropdown>
        </p>
    );
}

export {MastersToolbar};