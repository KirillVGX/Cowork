'use client';

import { useState, ReactNode, Children } from 'react';
import styles from './slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function getPagination(current: number, total: number): (number | 'dots')[] {
    switch (current) {
        case 0:
            return [0, 1, 'dots', total - 1];
        case 1:
            return [0, current, current + 1, 'dots'];
        case total - 2:
            return ['dots', current - 1, current, current + 1];
        case total - 1:
            return [0, 'dots', total - 2, total - 1];
        default:
            return [current - 1, current, current + 1, 'dots'];
    }
}

interface SliderProps {
    children: ReactNode;
    showNumbers?: boolean;
}

export default function Slider({ children, showNumbers = true }: SliderProps) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null
    );
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = Children.toArray(children);
    const totalSlides = slides.length;

    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section className={styles.sliderSection}>
            <Swiper
                modules={[Navigation]}
                navigation={false}
                slidesPerView={1}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className={styles.swiper}
            >
                {slides.map((child, index) => (
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

                {showNumbers && isMobile ? (
                    <div className={styles.customPagination}>
                        {getPagination(activeIndex, totalSlides).map(
                            (item, i) => {
                                if (item === 'dots') {
                                    return (
                                        <span
                                            key={`dots-${i}`}
                                            className={styles.dots}
                                        >
                                            <h5>...</h5>
                                        </span>
                                    );
                                }

                                return (
                                    <button
                                        key={item}
                                        className={`${
                                            styles.paginationBullet
                                        } ${
                                            item === activeIndex
                                                ? styles.active
                                                : ''
                                        }`}
                                        onClick={() =>
                                            swiperInstance?.slideTo(item)
                                        }
                                    >
                                        {item + 1}
                                    </button>
                                );
                            }
                        )}
                    </div>
                ) : (
                    <div className={styles.customPagination}>
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.paginationBullet} ${
                                    i === activeIndex ? styles.active : ''
                                }`}
                                onClick={() => swiperInstance?.slideTo(i)}
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
