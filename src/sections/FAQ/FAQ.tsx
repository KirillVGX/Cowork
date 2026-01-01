'use client';

import { Accordion } from '@/components/accordion/Accordion';
import styles from './FAQ.module.css';
import { questions } from '@/data/questions';
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
                <h2 style={{marginBottom: 24}}>Your Roadmap to Coworking Clarity</h2>
                <p>
                    Frequently asked questions ordered by popularity. Remember
                    that if the visitor has not committed to the call to action,
                    they may still have questions (doubts) that can be answered.
                </p>
            </div>

            <div className={styles.acordionBlock}>
                {questions.map((item) => (
                    <Accordion
                        key={item.id}
                        id={item.id}
                        title={item.question}
                        content={item.answer}
                        isOpen={openId === item.id}
                        onToggle={toggle}
                    />
                ))}
            </div>
        </section>
    );
}
