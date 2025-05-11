import React from 'react';
import { MasterServices } from '@/components';
import { useEditableList } from '@/hooks/useEditableList';

export type ServiceItem = {
    title: string;
    description: string;
    price: string;
};

const defaultServices: ServiceItem[] = [
    {
        title: 'Дизайн',
        description: 'описание услуги',
        price: '100',
    },
];

const MasterServicesContainer: React.FC = () => {
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
        initialList: defaultServices,
        emptyItem: { title: '', description: '', price: '' },
        onSave: () => {},
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