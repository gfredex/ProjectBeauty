import { useState, useEffect } from 'react';

export const useEditableValue = <T>(initialValue: T) => {
    const [value, setValue] = useState<T>(initialValue);
    const [original, setOriginal] = useState<T>(initialValue);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setValue(initialValue);
        setOriginal(initialValue);
    }, [initialValue]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setValue(original);
        setIsEditing(false);
    };

    const handleSave = (onSave: (v: T) => void) => {
        onSave(value);
        setIsEditing(false);
    };

    return {
        value,
        setValue,
        isEditing,
        handleEdit,
        handleCancel,
        handleSave,
    };
};
