import React from 'react';
import Edit from '../../../../assets/icons/colored/Edit.svg?react';
import styles from './masterAbout.module.scss';
import { MasterAboutForm, SvgIcon, Button } from '@/components';

type MasterAboutProps = {
    aboutText: string;
    tempText: string;
    isEditing: boolean;
    onEdit: () => void;
    onChange: (value: string) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterAbout: React.FC<MasterAboutProps> = ({
    aboutText,
    tempText,
    isEditing,
    onEdit,
    onChange,
    onSave,
    onCancel,
}) => {
    return (
        <div className={styles.aboutCard}>
            <div className={styles.header}>
                <h2 className={styles.title}>О себе</h2>
                {!isEditing && (
                    <Button classNames={{ buttonClass: 'editButton' }} onClick={onEdit}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {!isEditing ? (
                <p className={styles.text}>{aboutText}</p>
            ) : (
                <MasterAboutForm value={tempText} onChange={onChange} onSave={onSave} onCancel={onCancel} />
            )}
        </div>
    );
};

export { MasterAbout };
