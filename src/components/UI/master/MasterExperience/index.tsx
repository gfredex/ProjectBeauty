import React from 'react';
import Edit from '../../../../assets/icons/colored/Edit.svg?react';
import { SvgIcon, Button, IconSprite, MasterExperienceForm } from '@/components';
import styles from './masterExperience.module.scss';

type ExperienceItem = {
    title: string;
    yearStart: string;
    yearEnd: string;
};

type Props = {
    experience: ExperienceItem[];
    isEditing: boolean;
    onEdit: () => void;
    onChange: (index: number, field: keyof ExperienceItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterExperience: React.FC<Props> = ({
    experience,
    isEditing,
    onEdit,
    onChange,
    onAdd,
    onRemove,
    onSave,
    onCancel,
}) => {
    return (
        <div className={styles.experienceCard}>
            <div className={styles.header}>
                <h2 className={styles.title}>Опыт</h2>
                {!isEditing && (
                    <Button onClick={onEdit} classNames={{ buttonClass: 'editButton' }}>
                        <SvgIcon Icon={Edit} />
                    </Button>
                )}
            </div>

            {isEditing ? (
                <MasterExperienceForm
                    experience={experience}
                    onChange={onChange}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            ) : (
                <ul>
                    {experience.map((item, index) => (
                        <li key={index} className={styles.experienceItem}>
                            <IconSprite name="Check" classNames={{ iconClass: 'check' }} />
                            <p className={styles.text}>{item.title}</p>
                            <p className={styles.experienceYearBlock}>
                                <span className={styles.label}>период работы</span>
                                <p className={styles.year}>
                                    {item.yearStart} — {item.yearEnd}
                                </p>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export { MasterExperience };
