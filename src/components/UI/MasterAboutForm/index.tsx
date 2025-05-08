import React from 'react';
/*import styles from './masterAbout.module.scss';*/

type MasterAboutFormProps = {
    value: string;
    onChange: (value: string) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterAboutForm: React.FC<MasterAboutFormProps> = ({ value, onChange, onSave, onCancel }) => {
    return (
        <div>
            <textarea
                /*className={styles.textarea}*/
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={6}
            />
            <div /*className={styles.buttonGroup}*/>
                <button onClick={onSave} /*className={styles.saveBtn}*/>Сохранить</button>
                <button onClick={onCancel} /*className={styles.cancelBtn}*/>Отмена</button>
            </div>
        </div>
    );
};

export { MasterAboutForm };