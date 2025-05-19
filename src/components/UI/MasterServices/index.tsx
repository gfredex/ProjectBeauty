import React from 'react';
import Edit from '../../../assets/icons/colored/Edit.svg?react';
import { SvgIcon, Button, IconSprite, MasterServicesForm } from '@/components';
import type { ServiceItem } from '@/stores/slices/masterSlice';
import styles from './masterServices.module.scss';

type Props = {
    services: ServiceItem[];
    isEditing: boolean;
    onEdit: () => void;
    onChange: (index: number, field: keyof ServiceItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterServices: React.FC<Props> = ({
                                                 services,
                                                 isEditing,
                                                 onEdit,
                                                 onChange,
                                                 onAdd,
                                                 onRemove,
                                                 onSave,
                                                 onCancel,
                                             }) => {
    return (
        <div className={styles.servicesCard}>
            <div className={styles.header}>
                <h2 className={styles.title}>Услуги и цены</h2>
                {!isEditing && (
                    <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {isEditing ? (
                <MasterServicesForm
                    services={services}
                    onChange={onChange}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            ) : (
                <ul className={styles.servicesList}>
                    {services.map((item, index) => (
                        <li key={index} className={styles.servicesItem}>
                            <div className={styles.itemContent}>
                                <IconSprite name="Check" classNames={{ iconClass: 'checkServices' }}/>
                                <div className={styles.serviceInfo}>
                                    <p className={styles.serviceTitle}>{item.title}</p>
                                    <p className={styles.serviceDesc}>{item.description}</p>
                                </div>
                            </div>
                            <div className={styles.servicePriceBlock}>
                                <span className={styles.label}>за ноготь</span>
                                <p className={styles.servicePrice}>{item.price} руб.</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export { MasterServices };