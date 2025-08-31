import React from 'react';
import { Input, Button } from '@/components';
import styles from './profileEditForm.module.scss';

type ProfileEditFormProps = {
    formData: {
        name: string;
        email: string;
        phone: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
    onCancel: () => void;
};

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ formData, onChange, onSave, onCancel }) => {
    return (
        <form className={styles.editForm} onSubmit={(e) => e.preventDefault()}>
            <Input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Имя" />
            <Input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" />
            <Input type="tel" name="phone" value={formData.phone} onChange={onChange} placeholder="Телефон" />
            <div className={styles.buttonGroup}>
                <Button type="button" onClick={onSave}>
                    Сохранить
                </Button>
                <Button type="button" onClick={onCancel}>
                    Отмена
                </Button>
            </div>
        </form>
    );
};

export { ProfileEditForm };
