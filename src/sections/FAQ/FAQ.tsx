'use client';

import styles from './FAQ.module.css';
import { questions } from '@/data/questions';
import Image from 'next/image';
import { useState } from 'react';

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className={styles.FAQsection}>
            <div className={styles.quote}>
                <h6 style={{marginBottom: 16}}>Frequently Asked Questions</h6>
                <h2>Your Roadmap to Coworking Clarity</h2>
                <p>
                    Frequently asked questions ordered by popularity. Remember
                    that if the visitor has not committed to the call to action,
                    they may still have questions (doubts) that can be answered.
                </p>
            </div>

            <div className={styles.acordionBlock}>
                {questions.map((item) => (
                    <div
                        className={styles.acordion}
                        key={item.id}
                        onClick={() => toggle(item.id)}
                    >
                        <div className={styles.questionBlock}>
                            <p className={styles.question}>{item.question}</p>
                            <span
                                className={`${styles.icon} ${
                                    openId === item.id ? styles.rotate : ''
                                }`}
                            >
                                <Image
                                    src="/arrow.svg"
                                    alt="open button"
                                    width={10}
                                    height={5}
                                />
                            </span>
                        </div>

                        <div
                            className={`${styles.answerWrapper} ${
                                openId === item.id ? styles.open : ''
                            }`}
                        >
                            <p className={styles.answer}>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
