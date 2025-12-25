'use client';

import { ReactNode, Children } from 'react';
import styles from './slider.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

interface SliderProps {
    children: ReactNode;
}

export default function ScrollbarSwiper({ children }: SliderProps) {
    const slides = Children.toArray(children);

    return (
        <section className={styles.sliderSection}>
            <Swiper
                modules={[Scrollbar]}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                className={styles.swiper}
            >
                {slides.map((child, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
