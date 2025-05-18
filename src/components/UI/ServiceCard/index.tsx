import React from 'react';
import Upload from '@/assets/icons/colored/Upload.svg?react';
import Edit from '@/assets/icons/colored/Edit.svg?react';
import { SvgIcon, Picture, Button, ServiceCardForm } from '@/components';
import styles from './serviceCard.module.scss';

type ServiceData = {
    name: string;
    coating: string;
    design: string;
    address: string;
    price: string;
    image: string;
};

type Props = {
    formData: ServiceData;
    tempData: ServiceData;
    hovered: boolean;
    uploadMode: boolean;
    setHovered: (hovered: boolean) => void;
    setUploadMode: (upload: boolean) => void;
    setTempData: (data: ServiceData) => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
    onClear: () => void;
};

const ServiceCard: React.FC<Props> = ({
                                          formData,
                                          tempData,
                                          hovered,
                                          uploadMode,
                                          setHovered,
                                          setUploadMode,
                                          setTempData,
                                          onInputChange,
                                          onImageUpload,
                                          onSubmit,
                                          onClear
                                      }) => {
    const hasImage = formData.image !== '';

    return (
        <div
            className={styles.wrapServCard}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={styles.imgSection}>
                {hasImage ? (
                    <div className={styles.wrappPicture}>
                        <Picture src={formData.image} alt='preview' className='picture' />
                        {hovered && (
                            <>
                                <Button onClick={onClear} classNames={{ buttonClass: 'actionIcon' }}>
                                    <SvgIcon Icon={Edit} className='editUpload' />
                                </Button>
                                <Button
                                    classNames={{ buttonClass: 'textButton' }}
                                    onClick={() => {
                                        setUploadMode(true);
                                        setTempData(formData);
                                    }}
                                >
                                    редактировать
                                </Button>
                            </>
                        )}
                    </div>
                ) : (
                    <div
                        className={styles.wrappIcon}
                        onClick={() => {
                            setUploadMode(true);
                            setTempData(formData);
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        <SvgIcon Icon={Upload} />
                    </div>
                )}
            </div>

            {!uploadMode && (
                <div className={styles.infoBlock}>
                    <h3 className={styles.title}>{formData.name || '—'}</h3>
                    <p className={styles.text}><strong>Покрытие:</strong> {formData.coating || '—'}</p>
                    <p className={styles.text}><strong>Дизайн:</strong> {formData.design || '—'}</p>
                    <p className={styles.text}><strong>Адрес:</strong> {formData.address || '—'}</p>
                    <p className={styles.label}>Стоимость</p>
                    <p className={styles.price}>{formData.price || '—'}</p>
                </div>
            )}

            {uploadMode && (
                <ServiceCardForm
                    data={tempData}
                    onChange={onInputChange}
                    onImageUpload={onImageUpload}
                    onSubmit={onSubmit}
                    onCancel={() => setUploadMode(false)}
                />
            )}
        </div>
    );
};

export { ServiceCard };