import React, { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useSyncState } from '@/hooks/useSyncState';
import { updateAddress } from '@/stores/slices/userSlice';
import { MasterAddresses } from '@/components';

type AddressItem = {
    address: string;
    region: string;
};

const MasterAdressesContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const addressData = useAppSelector((state) => state.master.addressData);

    const initialAddresses: AddressItem[] = useMemo(() => {
        return Array.isArray(addressData) ? addressData : [addressData];
    }, [addressData]);

    const [originalAddresses, setOriginalAddresses] = useState<AddressItem[]>([]);
    const [isEditing, setIsEditing] = useState(false);

    const [addresses, setAddresses] = useSyncState(initialAddresses);

    const handleEdit = () => {
        setOriginalAddresses(addresses);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setAddresses(originalAddresses);
        setIsEditing(false);
    };

    const handleSave = () => {
        const cleaned = addresses[0];
        const isEmpty = !cleaned?.address?.trim() && !cleaned?.region?.trim();

        if (isEmpty) {
            localStorage.removeItem('userAddress');
            dispatch(updateAddress({ address: '', region: '' }));
        } else {
            dispatch(updateAddress(cleaned));
        }

        setIsEditing(false);
    };

    const handleChange = (index: number, field: keyof AddressItem, value: string) => {
        setAddresses((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        );
    };

    const handleAdd = () => {
        setAddresses((prev) => [...prev, { address: '', region: '' }]);
    };

    const handleRemove = (index: number) => {
        setAddresses((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <MasterAddresses
            addresses={addresses}
            isEditing={isEditing}
            onEdit={handleEdit}
            onChange={handleChange}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onSave={handleSave}
            onCancel={handleCancel}
        />
    );
};

export { MasterAdressesContainer };