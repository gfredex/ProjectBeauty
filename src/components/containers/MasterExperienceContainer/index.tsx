import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateExperience } from '@/stores/slices/masterSlice.ts';
import { MasterExperience } from '@/components';
import { useEditableList } from '@/hooks/useEditableList';

type ExperienceItem = {
    title: string;
    yearStart: string;
    yearEnd: string;
};

const MasterExperienceContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const experience = useAppSelector((state) => state.master.experience);

    const {
        items: tempExperience,
        isEditing,
        handleEdit,
        handleCancel,
        handleChange,
        handleAdd,
        handleRemove,
        handleSave,
    } = useEditableList<ExperienceItem>({
        initialList: experience,
        emptyItem: { title: '', yearStart: '', yearEnd: '' },
        onSave: (updated) => dispatch(updateExperience(updated)),
    });

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