import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // убрали navigation!
import { Pagination } from 'swiper/modules';
import { ServiceCard } from '@/components';

const ServiceCardSlider: React.FC = () => {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {[...Array(6)].map((_, idx) => (
                <SwiperSlide key={idx}>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export { ServiceCardSlider };

