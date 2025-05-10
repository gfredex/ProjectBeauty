import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateAddress } from '@/stores/slices/userSlice';
import { MasterAdresses } from '@/components';

const MasterAdressesContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const { address, region } = useAppSelector((state) => state.master.addressData);

    const [isEditing, setIsEditing] = useState(false);
    const [tempAddress, setTempAddress] = useState(address);
    const [tempRegion, setTempRegion] = useState(region);

    useEffect(() => {
        setTempAddress(address);
        setTempRegion(region);
    }, [address, region]);

    const handleEdit = () => setIsEditing(true);

    const handleCancel = () => {
        setTempAddress(address);
        setTempRegion(region);
        setIsEditing(false);
    };

    const handleSave = () => {
        dispatch(updateAddress({ address: tempAddress, region: tempRegion }));
        setIsEditing(false);
    };

    const handleChange = (field: 'address' | 'region', value: string) => {
        if (field === 'address') {
            setTempAddress(value);
        } else {
            setTempRegion(value);
        }
    };

    return (
        <MasterAdresses
            address={tempAddress}
            region={tempRegion}
            isEditing={isEditing}
            onEdit={handleEdit}
            onChange={handleChange}
            onSave={handleSave}
            onCancel={handleCancel}
        />
    );
};

export { MasterAdressesContainer };
