import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateAddress } from '@/stores/slices/masterSlice.ts';
import { MasterAddresses } from '@/components';
import { useEditableList } from '@/hooks/useEditableList';

type AddressItem = {
    address: string;
    region: string;
};

const MasterAdressesContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const addressData = useAppSelector((state) => state.master.addressData);

    const {
        items: addresses,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useEditableList<AddressItem>({
        initialList: addressData ?? [],
        emptyItem: { address: '', region: '' },
        onSave: (updated) => {
            dispatch(updateAddress(updated));
        },
    });

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
