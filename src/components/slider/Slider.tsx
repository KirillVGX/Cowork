'use client';
import { useState, ReactNode } from 'react';
import styles from './slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

interface SliderProps {
    children: ReactNode[];
    showNumbers?: boolean;
}

export default function Slider({ children, showNumbers = true }: SliderProps) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null
    );
    const [activeIndex, setActiveIndex] = useState(0);

    const totalSlides = children.length;

    return (
        <section className={styles.sliderSection}>
            <Swiper
                modules={[Navigation]}
                navigation={false}
                slidesPerView={1}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                }}
                className={styles.swiper}
            >
                {children.map((child, index) => (
                    <SwiperSlide
                        key={index}
                        className={styles.slide}
                    >
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.navigationRow}>
                <button
                    className={styles.arrow}
                    onClick={() => swiperInstance?.slidePrev()}
                    disabled={activeIndex === 0}
                    aria-label="Previous slide"
                >
                    <Image
                        src="/left-arrow.svg"
                        alt="Left arrow"
                        width={8}
                        height={15}
                    />
                </button>

                {showNumbers && (
                    <div className={styles.customPagination}>
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.paginationBullet} ${
                                    i === activeIndex ? styles.active : ''
                                }`}
                                onClick={() => swiperInstance?.slideTo(i)}
                                aria-label={`Go to section ${i + 1}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}

                <button
                    className={styles.arrow}
                    onClick={() => swiperInstance?.slideNext()}
                    disabled={activeIndex === totalSlides - 1}
                    aria-label="Next slide"
                >
                    <Image
                        src="/right-arrow.svg"
                        alt="Right arrow"
                        width={8}
                        height={15}
                    />
                </button>
            </div>
        </section>
    );
}
