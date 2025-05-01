import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { setUserType } from '@/stores/slices/userTypeSlice';
import { Banner } from '@/components';

const BannerContainer: React.FC = () => {
    const dispatch = useDispatch();
    const userType = useSelector((state: RootState) => state.userType.userType);

    const handleUserTypeChange = (type: 'master' | 'client') => {
        dispatch(setUserType(type));
    };

    return (
        <Banner
            title={'Твой мастер маникюра'}
            subtitle={
                'Онлайн-запись, напоминания клиентам и ведение клиентской базы для профессионалов индустрии красоты'
            }
            description={'один сервис - много возможностей'}
            activeUserType={userType}
            onUserTypeChange={handleUserTypeChange}
        />
    );
};

export { BannerContainer };