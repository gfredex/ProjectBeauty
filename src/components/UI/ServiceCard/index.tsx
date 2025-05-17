import React, { useState } from 'react';
import Upload from '@/assets/icons/colored/Upload.svg?react';
import Edit from '@/assets/icons/colored/Edit.svg?react';
import { SvgIcon } from '@/components';
import styles from './serviceCard.module.scss';

interface ServiceData {
    name: string;
    coating: string;
    design: string;
    address: string;
    price: string;
    image: string;
}

const ServiceCard: React.FC = () => {
    const [editMode, setEditMode] = useState(false);
    const [uploadMode, setUploadMode] = useState(false);
    const [formData, setFormData] = useState<ServiceData>({
        name: 'Комбинированный маникюр',
        coating: 'гель лак',
        design: 'однотонное, френч',
        address: 'ул. Жудро, 61',
        price: '40 руб.',
        image: '',
    });
    const [tempData, setTempData] = useState<ServiceData>(formData);
    const [hovered, setHovered] = useState(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempData({ ...tempData, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempData({ ...tempData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setFormData(tempData);
        setUploadMode(false);
    };

    return (
        <div
            className={styles.wrapServCard}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={styles.imgSection}>
                {formData.image ? (
                    <div className={styles.wrappPicture}>
                        <img
                            className={styles.picture}
                            src={formData.image}
                            alt="preview"
                        />
                        {hovered && (
                            <>
                                <button
                                    className={styles.iconButton}
                                    onClick={() => {
                                        setEditMode(true);
                                        setUploadMode(false);
                                        setFormData({
                                            name: '',
                                            coating: '',
                                            design: '',
                                            address: '',
                                            price: '',
                                            image: '',
                                        });
                                    }}
                                >
                                    <SvgIcon Icon={Edit} className="editUpload" />
                                </button>
                                <button
                                    className={styles.textButton}
                                    onClick={() => {
                                        setUploadMode(true);
                                        setEditMode(false);
                                        setTempData(formData);
                                    }}
                                >
                                    редактировать
                                </button>
                            </>
                        )}
                    </div>
                ) : (
                    <div
                        className={styles.wrappIcon}
                        onClick={() => {
                            setUploadMode(true);
                            setEditMode(false);
                            setTempData(formData);
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        <SvgIcon Icon={Upload} />
                    </div>
                )}
            </div>

            {!editMode && !uploadMode && (
                <div className={styles.infoBlock}>
                    <h3 className={styles.title}>{formData.name}</h3>
                    <p className={styles.text}><strong>Покрытие:</strong> {formData.coating}</p>
                    <p className={styles.text}><strong>Дизайн:</strong> {formData.design}</p>
                    <p className={styles.text}><strong>Адрес:</strong> {formData.address}</p>
                    <p className={styles.label}>Стоимость</p>
                    <p className={styles.price}>{formData.price}</p>
                </div>
            )}

            {uploadMode && (
                <div>
                    <input type='file' accept='image/*' onChange={handleImageUpload} />
                    <input type='text' name='name' placeholder='Наименование' value={tempData.name} onChange={handleInputChange} />
                    <input type='text' name='coating' placeholder='Покрытие' value={tempData.coating} onChange={handleInputChange} />
                    <input type='text' name='design' placeholder='Дизайн' value={tempData.design} onChange={handleInputChange} />
                    <input type='text' name='address' placeholder='Адрес' value={tempData.address} onChange={handleInputChange} />
                    <input type='text' name='price' placeholder='Цена' value={tempData.price} onChange={handleInputChange} />
                    <button onClick={handleSubmit}>OK</button>
                </div>
            )}
        </div>
    );
};

export { ServiceCard };