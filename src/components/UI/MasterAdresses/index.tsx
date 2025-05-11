import React from 'react';
import Edit from '../../../assets/icons/colored/Edit.svg?react';
import Home from '../../../assets/icons/colored/Home.svg?react';
import Car from '../../../assets/icons/colored/Car.svg?react';
import { SvgIcon, Button, MasterAdressesForm } from '@/components';
import styles from './masterAdresses.module.scss';

type AddressItem = {
    address: string;
    region: string;
};

type MasterAddressProps = {
    addresses: AddressItem[];
    isEditing: boolean;
    onEdit: () => void;
    onChange: (index: number, field: keyof AddressItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterAddresses: React.FC<MasterAddressProps> = ({
                                                           addresses,
                                                           isEditing,
                                                           onEdit,
                                                           onChange,
                                                           onAdd,
                                                           onRemove,
                                                           onSave,
                                                           onCancel,
                                                       }) => {
    const hasVisibleData = addresses.some(
        (item) => item.address.trim() || item.region.trim()
    );

    return (
        <div className={styles.addressCard}>
            <div className={styles.header}>
                <h2 className={styles.title}>Адреса и районы проведения услуг</h2>
                {!isEditing && (
                    <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {isEditing ? (
                <MasterAdressesForm
                    addresses={addresses}
                    onChange={onChange}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            ) : (
                hasVisibleData && (
                    <ul>
                        {addresses.map((item, index) => {
                            const hasAddress = item.address.trim();
                            const hasRegion = item.region.trim();

                            if (!hasAddress && !hasRegion) return null;

                            return (
                                <li key={index} className={styles.addressItem}>
                                    {hasAddress && (
                                        <>
                                            <h3 className={styles.addressLabel}>Адрес</h3>
                                            <div className={styles.addressRow}>
                                                <SvgIcon Icon={Home} />
                                                <p className={styles.addressText}>{item.address}</p>
                                            </div>
                                        </>
                                    )}
                                    {hasRegion && (
                                        <>
                                            <h3 className={styles.regionLabel}>Выезд к клиенту</h3>
                                            <div className={styles.addressRow}>
                                                <SvgIcon Icon={Car} />
                                                <p className={styles.regionText}>{item.region}</p>
                                            </div>
                                        </>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                )
            )}
        </div>
    );
};

export { MasterAddresses };