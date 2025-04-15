import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider.css';
import { DiscountCard } from "../DiscountCard";


export const Slider = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={2}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3.25,
                },
            }}
        >
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <SwiperSlide key={index}>
                    <DiscountCard percent={20}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};