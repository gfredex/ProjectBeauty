import React from 'react';
import { Input } from '@/components';

type AddressItem = {
    address: string;
    region: string;
};

type MasterAdressesFormProps = {
    addresses: AddressItem[];
    onChange: (index: number, field: keyof AddressItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterAdressesForm: React.FC<MasterAdressesFormProps> = ({
                                                                   addresses,
                                                                   onChange,
                                                                   onAdd,
                                                                   onRemove,
                                                                   onSave,
                                                                   onCancel,
                                                               }) => {
    return (
        <div>
            {addresses.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Input
                            type="text"
                            name={`address-${index}`}
                            placeholder="Адрес"
                            value={item.address}
                            onChange={(e) => onChange(index, 'address', e.target.value)}
                        />

                        <Input
                            type="text"
                            name={`region-${index}`}
                            placeholder="Район"
                            value={item.region}
                            onChange={(e) => onChange(index, 'region', e.target.value)}
                        />
                    </div>

                    <button
                        onClick={() => onRemove(index)}
                        aria-label="Удалить"
                    >
                        ×
                    </button>
                </div>
            ))}

            <button type="button" onClick={onAdd} style={{ marginTop: '12px' }}>
                + Добавить адрес
            </button>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button onClick={onSave}>Сохранить</button>
                <button onClick={onCancel}>Отмена</button>
            </div>
        </div>
    );
};

export { MasterAdressesForm };