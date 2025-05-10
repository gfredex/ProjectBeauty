import React from 'react';
import Edit from '../../../assets/icons/colored/Edit.svg?react';
import { SvgIcon, Button, MasterAdressesForm, IconSprite } from '@/components';

type Props = {
    address: string;
    region: string;
    isEditing: boolean;
    onEdit: () => void;
    onChange: (field: 'address' | 'region', value: string) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterAdresses: React.FC<Props> = ({
                                             address,
                                             region,
                                             isEditing,
                                             onEdit,
                                             onChange,
                                             onSave,
                                             onCancel,
                                         }) => {
    return (
        <div
            style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '12px',
                marginTop: '20px',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 600 }}>Адреса и районы проведения услуг</h2>
                {!isEditing && (
                    <Button onClick={onEdit}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {isEditing ? (
                <MasterAdressesForm
                    address={address}
                    region={region}
                    onChange={onChange}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            ) : (
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <IconSprite name="Home" />
                        <div>
                            <div style={{ fontWeight: 500 }}>Адрес</div>
                            <div>{address}</div>
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <IconSprite name="Car" />
                        <div>
                            <div style={{ fontWeight: 500 }}>Выезд к клиенту</div>
                            <div>{region}</div>
                        </div>
                    </li>
                </ul>
            )}
        </div>
    );
};

export { MasterAdresses };