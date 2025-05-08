import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateEducation } from '@/stores/slices/userSlice';
import { MasterEducation } from '@/components';
import type { EducationItem } from '@/stores/slices/userSlice';

const MasterEducationContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const education = useAppSelector((state) => state.master.education);

    const [isEditing, setIsEditing] = useState(false);
    const [tempEducation, setTempEducation] = useState<EducationItem[]>([]);

    useEffect(() => {
        setTempEducation(education);
    }, [education]);

    const handleEdit = () => setIsEditing(true);

    const handleCancel = () => {
        setTempEducation(education);
        setIsEditing(false);
    };

    const handleSave = () => {
        dispatch(updateEducation(tempEducation));
        setIsEditing(false);
    };

    const handleChange = (index: number, field: keyof EducationItem, value: string) => {
        setTempEducation((prev) =>
            prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
        );
    };

    const handleAdd = () => {
        setTempEducation((prev) => [...prev, { title: '', year: '' }]);
    };

    const handleRemove = (index: number) => {
        setTempEducation((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <MasterEducation
            education={tempEducation}
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

export { MasterEducationContainer };
