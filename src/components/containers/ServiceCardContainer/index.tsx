import React, { useState } from 'react';
import { ServiceCard } from '@/components';

type ServiceData = {
    name: string;
    coating: string;
    design: string;
    address: string;
    price: string;
    image: string;
};

const ServiceCardContainer: React.FC = () => {
    const [uploadMode, setUploadMode] = useState(false);

    const [formData, setFormData] = useState<ServiceData>({
        name: 'Комбинированный маникюр',
        coating: 'гель лак',
        design: 'однотонное, френч',
        address: 'ул. Жудро, 61',
        price: '40 руб.',
        image: '',
    });

    const [tempData, setTempData] = useState<ServiceData>(formData);
    const [hovered, setHovered] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempData({ ...tempData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempData({ ...tempData, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        setFormData(tempData);
        setUploadMode(false);
    };

    const handleClearFormData = () => {
        const cleared = Object.keys(formData).reduce((acc, key) => {
            acc[key as keyof ServiceData] = '';
            return acc;
        }, {} as ServiceData);
        setFormData(cleared);
    };

    return (
        <ServiceCard
            formData={formData}
            tempData={tempData}
            hovered={hovered}
            uploadMode={uploadMode}
            setHovered={setHovered}
            setUploadMode={setUploadMode}
            setTempData={setTempData}
            onInputChange={handleInputChange}
            onImageUpload={handleImageUpload}
            onSubmit={handleSubmit}
            onClear={handleClearFormData}
        />
    );
};

export { ServiceCardContainer };
