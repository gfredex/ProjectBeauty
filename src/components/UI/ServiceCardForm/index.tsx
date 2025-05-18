import React from 'react';
import { Input } from '@/components';

type FormData = {
    name: string;
    coating: string;
    design: string;
    address: string;
    price: string;
    image: string;
};

type Props = {
    data: FormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
    onCancel: () => void;
};

const ServiceCardForm: React.FC<Props> = ({ data, onChange, onImageUpload, onSubmit, onCancel }) => {
    return (
        <div style={{ maxWidth: '368px' }}>
            <Input type="file" accept="image/*" onChange={onImageUpload} />

            <Input type="text" name="name" placeholder="Наименование" value={data.name} onChange={onChange} />
            <Input type="text" name="coating" placeholder="Покрытие" value={data.coating} onChange={onChange} />
            <Input type="text" name="design" placeholder="Дизайн" value={data.design} onChange={onChange} />
            <Input type="text" name="address" placeholder="Адрес" value={data.address} onChange={onChange} />
            <Input type="text" name="price" placeholder="Цена" value={data.price} onChange={onChange} />

            <div style={{ marginTop: '0.5rem', display: 'flex', gap: '8px' }}>
                <button onClick={onSubmit}>OK</button>
                <button onClick={onCancel}>Отмена</button>
            </div>
        </div>
    );
};

export { ServiceCardForm };