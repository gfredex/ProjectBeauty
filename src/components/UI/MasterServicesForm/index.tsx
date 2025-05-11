import React from 'react';
import type { ServiceItem } from '@/components';

type Props = {
    services: ServiceItem[];
    onChange: (index: number, field: keyof ServiceItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterServicesForm: React.FC<Props> = ({
                                                 services,
                                                 onChange,
                                                 onAdd,
                                                 onRemove,
                                                 onSave,
                                                 onCancel,
                                             }) => {
    return (
        <>
            {services.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center',
                        marginBottom: '10px',
                    }}
                >
                    <input
                        type="text"
                        placeholder="Название"
                        value={item.title}
                        onChange={(e) => onChange(index, 'title', e.target.value)}
                        style={{ flex: 1 }}
                    />
                    <input
                        type="text"
                        placeholder="Описание"
                        value={item.description}
                        onChange={(e) => onChange(index, 'description', e.target.value)}
                        style={{ flex: 2 }}
                    />
                    <input
                        type="text"
                        placeholder="Цена"
                        value={item.price}
                        onChange={(e) => onChange(index, 'price', e.target.value)}
                        style={{ width: '80px' }}
                    />
                    <button onClick={() => onRemove(index)} style={{ fontSize: '20px' }}>×</button>
                </div>
            ))}
            <div style={{ marginBottom: '12px' }}>
                <button onClick={onAdd}>Добавить</button>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={onSave}>Сохранить</button>
                <button onClick={onCancel}>Отмена</button>
            </div>
        </>
    );
};

export { MasterServicesForm };