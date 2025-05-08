import React, { useEffect, useState } from 'react';
import { MasterAbout } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateAbout } from '@/stores/slices/userSlice';

const MasterAboutContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const aboutText = useAppSelector((state) => state.master.about);

    const [isEditing, setIsEditing] = useState(false);
    const [tempText, setTempText] = useState(aboutText);

    useEffect(() => {
        setTempText(aboutText);
    }, [aboutText]);

    const handleEdit = () => setIsEditing(true);

    const handleCancel = () => {
        setTempText(aboutText);
        setIsEditing(false);
    };

    const handleSave = () => {
        dispatch(updateAbout(tempText));
        setIsEditing(false);
    };

    return (
        <MasterAbout
            aboutText={aboutText}
            tempText={tempText}
            isEditing={isEditing}
            onEdit={handleEdit}
            onChange={setTempText}
            onSave={handleSave}
            onCancel={handleCancel}
        />
    );
};

export { MasterAboutContainer };