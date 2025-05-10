import React from 'react';
import { Button } from '@/components';

type Props = {
    address: string;
    region: string;
    onChange: (field: 'address' | 'region', value: string) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterAdressesForm: React.FC<Props> = ({ address, region, onChange, onSave, onCancel }) => {
    return (
        <div style={{ marginTop: '15px' }}>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>Адрес</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => onChange('address', e.target.value)}
                    style={{
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        fontSize: '14px',
                    }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>Район</label>
                <input
                    type="text"
                    value={region}
                    onChange={(e) => onChange('region', e.target.value)}
                    style={{
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        fontSize: '14px',
                    }}
                />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button onClick={onSave}>Сохранить</Button>
                <Button onClick={onCancel}>Отмена</Button>
            </div>
        </div>
    );
};

export { MasterAdressesForm };