import React from 'react';

type EducationItem = {
    title: string;
    year: string;
};

type MasterEducationFormProps = {
    education: EducationItem[];
    onChange: (index: number, field: keyof EducationItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterEducationForm: React.FC<MasterEducationFormProps> = ({
    education,
    onChange,
    onAdd,
    onRemove,
    onSave,
    onCancel,
}) => {
    return (
        <div>
            <h2>Редактировать образование</h2>
            <ul>
                {education.map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <input
                            type="text"
                            value={item.title}
                            placeholder="Название курса"
                            onChange={(e) => onChange(index, 'title', e.target.value)}
                            style={{ flex: 2 }}
                        />
                        <input
                            type="text"
                            value={item.year}
                            placeholder="Год"
                            onChange={(e) => onChange(index, 'year', e.target.value)}
                            style={{ width: '80px' }}
                        />
                        <button onClick={() => onRemove(index)}>✕</button>
                    </li>
                ))}
            </ul>
            <button onClick={onAdd}>Добавить курс</button>
            <div style={{ marginTop: '16px' }}>
                <button onClick={onSave}>Сохранить</button>
                <button onClick={onCancel} style={{ marginLeft: '8px' }}>
                    Отмена
                </button>
            </div>
        </div>
    );
};

export { MasterEducationForm };
