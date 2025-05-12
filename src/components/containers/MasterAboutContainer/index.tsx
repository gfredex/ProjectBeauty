import React from 'react';
import { MasterAbout } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateAbout } from '@/stores/slices/masterSlice.ts';
import { useEditableValue } from '@/hooks/useEditableValue';

const MasterAboutContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const aboutText = useAppSelector((state) => state.master.about);

    const {
        value: tempText,
        setValue: setTempText,
        isEditing,
        handleEdit,
        handleCancel,
        handleSave,
    } = useEditableValue(aboutText);

    return (
        <MasterAbout
            aboutText={aboutText}
            tempText={tempText}
            isEditing={isEditing}
            onEdit={handleEdit}
            onChange={setTempText}
            onSave={() => handleSave((text) => dispatch(updateAbout(text)))}
            onCancel={handleCancel}
        />
    );
};

export { MasterAboutContainer };