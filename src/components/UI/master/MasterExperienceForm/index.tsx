import React from 'react';

type ExperienceItem = {
    title: string;
    yearStart: string;
    yearEnd: string;
};

type Props = {
    experience: ExperienceItem[];
    onChange: (index: number, field: keyof ExperienceItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterExperienceForm: React.FC<Props> = ({ experience, onChange, onAdd, onRemove, onSave, onCancel }) => {
    return (
        <div>
            {experience.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '10px',
                    }}
                >
                    <input
                        type="text"
                        value={item.title}
                        onChange={(e) => onChange(index, 'title', e.target.value)}
                        placeholder="Название опыта"
                        style={{
                            flexGrow: 1,
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '6px',
                            fontSize: '14px',
                        }}
                    />
                    <input
                        type="text"
                        value={item.yearStart}
                        onChange={(e) => onChange(index, 'yearStart', e.target.value)}
                        placeholder="Начало"
                        style={{
                            width: '80px',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '6px',
                            fontSize: '14px',
                        }}
                    />
                    <input
                        type="text"
                        value={item.yearEnd}
                        onChange={(e) => onChange(index, 'yearEnd', e.target.value)}
                        placeholder="Конец"
                        style={{
                            width: '80px',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '6px',
                            fontSize: '14px',
                        }}
                    />
                    <button
                        onClick={() => onRemove(index)}
                        aria-label="Удалить"
                        style={{
                            fontSize: '20px',
                            border: 'none',
                            background: 'transparent',
                            color: '#a00',
                            cursor: 'pointer',
                            lineHeight: '1',
                        }}
                    >
                        ×
                    </button>
                </div>
            ))}

            <div style={{ marginBottom: '15px' }}>
                <button onClick={onAdd}>Добавить</button>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={onSave}>Сохранить</button>
                <button onClick={onCancel}>Отмена</button>
            </div>
        </div>
    );
};

export { MasterExperienceForm };
