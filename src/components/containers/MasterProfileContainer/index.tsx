import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateProfile } from '@/stores/slices/userSlice';
import { MasterProfileCard } from '@/components';

type MasterProfileContainerProps = {
    photoUrl?: string;
};

const MasterProfileContainer: React.FC<MasterProfileContainerProps> = ({ photoUrl }) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        dispatch(updateProfile(formData));
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(user);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <MasterProfileCard
            photoUrl={photoUrl}
            user={user}
            formData={formData}
            isEditing={isEditing}
            onChange={handleChange}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
        />
    );
};

export { MasterProfileContainer };