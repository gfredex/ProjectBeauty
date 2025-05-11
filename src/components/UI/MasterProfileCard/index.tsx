import React from 'react';
import { Button, SvgIcon, ProfileEditForm  } from '@/components';
import Avatar from '../../../assets/icons/colored/Avatar.svg?react';
import Edit from '../../../assets/icons/colored/Edit.svg?react';
import styles from './masterProfileCard.module.scss';

type UserProfile = {
    name: string;
    email: string;
    phone: string;
};

type MasterProfileCardProps = {
    photoUrl?: string;
    user: UserProfile;
    formData: UserProfile;
    isEditing: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEdit: () => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterProfileCard: React.FC<MasterProfileCardProps> = ({
                                                                 photoUrl,
                                                                 user,
                                                                 formData,
                                                                 isEditing,
                                                                 onChange,
                                                                 onEdit,
                                                                 onSave,
                                                                 onCancel,
                                                             }) => {
    return (
        <div className={styles.masterProfileCard}>
            <div className={styles.cardHeader}>
                {photoUrl ? (
                    <img src={photoUrl} alt="Фото мастера" className="profile-photo" />
                ) : (
                    <SvgIcon Icon={Avatar}/>
                )}
                <h2 className={styles.title}>Мой профиль</h2>
                {!isEditing && (
                    <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {!isEditing ? (
                <>
                    <p className={styles.masterName}>{user.name}</p>
                    <p className={styles.masterEmail}>{user.email}</p>
                    <p className={styles.masterPhone}>{user.phone}</p>
                </>
            ) : (
                <ProfileEditForm
                    formData={formData}
                    onChange={onChange}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            )}
        </div>
    );
};

export { MasterProfileCard };