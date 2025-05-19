import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateExperience } from '@/stores/slices/masterSlice';
import { MasterExperience } from '@/components';
import { useEditableList } from '@/hooks/useEditableList';
import type { ExperienceItem } from '@/stores/slices/masterSlice';

type Props = {
    index: number;
};

const MasterExperienceContainer: React.FC<Props> = ({ index }) => {
    const dispatch = useAppDispatch();
    const experience = useAppSelector((state) => state.master.experience);
    const list: ExperienceItem[] = (experience[index] || []) as ExperienceItem[];

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
        initialList: list,
        emptyItem: { title: '', yearStart: '', yearEnd: '' },

        onSave: (updatedItemList) => {
            const updatedExperience = [...experience];
            updatedExperience[index] = updatedItemList;
            dispatch(updateExperience(updatedExperience));
        },
    });

    if (!list.length && !isEditing) return null;

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