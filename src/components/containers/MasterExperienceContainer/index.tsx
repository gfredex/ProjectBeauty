import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateExperience } from '@/stores/slices/masterSlice';
import { MasterExperience } from '@/components';
import { useEditableList } from '@/hooks/useEditableList';
import type { ExperienceItem } from '@/stores/slices/masterSlice';

type Props = {
    id: string;
};

const MasterExperienceContainer: React.FC<Props> = ({ id }) => {
    const dispatch = useAppDispatch();
    const experience = useAppSelector((state) => state.master.experience);
    const item = experience.find((exp) => exp.id === id);

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
        initialList: item ? [item] : [],
        emptyItem: { id, title: '', yearStart: '', yearEnd: '' },

        onSave: (updatedItemList) => {
            const updatedItem = updatedItemList[0];

            const existingIndex = experience.findIndex((exp) => exp.id === id);

            let updatedExperience: ExperienceItem[];

            if (existingIndex !== -1) {
                updatedExperience = experience.map((exp) =>
                    exp.id === id ? updatedItem : exp
                );
            } else {
                updatedExperience = [...experience, updatedItem];
            }

            dispatch(updateExperience(updatedExperience));
        },
    });

    if (!item && !isEditing) return null;

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