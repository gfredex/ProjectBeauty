import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ServiceCardContainer } from '@/components';
import styles from './serviceCardSlider.module.scss';

const ServiceCardSlider: React.FC = () => {
    return (
        <div className={styles.sliderWrap}>
            <Swiper
                spaceBetween={42}
                slidesPerView={2.7}
                breakpoints={{
                    640: { slidesPerView: 1.1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.7 },
                }}
            >
                {[...Array(6)].map((_, idx) => (
                    <SwiperSlide key={idx}>
                        <ServiceCardContainer />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export { ServiceCardSlider };