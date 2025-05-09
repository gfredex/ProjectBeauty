import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateExperience } from '@/stores/slices/userSlice';
import { MasterExperience } from '@/components';

type ExperienceItem = {
    title: string;
    yearStart: string;
    yearEnd: string;
};

const MasterExperienceContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const experience = useAppSelector((state) => state.master.experience);

    const [isEditing, setIsEditing] = useState(false);
    const [tempExperience, setTempExperience] = useState<ExperienceItem[]>([]);

    useEffect(() => {
        setTempExperience(experience);
    }, [experience]);

    const handleEdit = () => setIsEditing(true);
    const handleCancel = () => {
        setTempExperience(experience);
        setIsEditing(false);
    };
    const handleSave = () => {
        dispatch(updateExperience(tempExperience));
        setIsEditing(false);
    };

    const handleChange = (index: number, field: keyof ExperienceItem, value: string) => {
        setTempExperience((prev) =>
            prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
        );
    };

    const handleAdd = () => {
        setTempExperience((prev) => [...prev, { title: '', yearStart: '', yearEnd: '' }]);
    };

    const handleRemove = (index: number) => {
        setTempExperience((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <MasterExperience
            experience={tempExperience}
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

export { MasterExperienceContainer };