import React, { useState, useEffect } from 'react';
import { MasterServices } from '@/components';

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
    const [services, setServices] = useState<ServiceItem[]>(defaultServices);
    const [originalServices, setOriginalServices] = useState<ServiceItem[]>([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setServices(defaultServices);
    }, []);

    const handleEdit = () => {
        setOriginalServices(services);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setServices(originalServices);
        setIsEditing(false);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleChange = (index: number, field: keyof ServiceItem, value: string) => {
        setServices((prev) =>
            prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
        );
    };

    const handleAdd = () => {
        setServices((prev) => [...prev, { title: '', description: '', price: '' }]);
    };

    const handleRemove = (index: number) => {
        setServices((prev) => prev.filter((_, i) => i !== index));
    };

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