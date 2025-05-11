import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateEducation } from '@/stores/slices/userSlice';
import { MasterEducation } from '@/components';
import type { EducationItem } from '@/stores/slices/userSlice';
import { useEditableList } from '@/hooks/useEditableList';

const MasterEducationContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const education = useAppSelector((state) => state.master.education);

    const {
        items: tempEducation,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useEditableList<EducationItem>({
        initialList: education,
        emptyItem: { title: '', year: '' },
        onSave: (updatedList) => {
            dispatch(updateEducation(updatedList));
        },
    });

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
