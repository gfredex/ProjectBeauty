import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateServices } from '@/stores/slices/masterSlice';
import { MasterServices } from '@/components';
import { useEditableList } from '@/hooks/useEditableList';
import type { ServiceItem } from '@/stores/slices/masterSlice';

const MasterServicesContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const storedServices = useAppSelector((state) => state.master.services);

    const {
        items: services,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useEditableList<ServiceItem>({
        initialList: storedServices,
        emptyItem: { title: '', description: '', price: '' },
        onSave: (updated) => {
            dispatch(updateServices(updated));
        },
    });

    return (
        <MasterServices
            services={services}
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

export { MasterServicesContainer };
