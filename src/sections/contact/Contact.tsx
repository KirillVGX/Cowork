'use client';

import Image from 'next/image';
import styles from './contact.module.css';
import ContactForm from '@/forms/contactForm/constact.form';

export default function Contact() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.head}>
                <div className={styles.title}>
                    <h1>Contact Us</h1>
                    <span className={styles.image}>
                        <Image
                            src="/chat-bubles.svg"
                            alt="Chat bubbles"
                            fill
                            sizes="(max-width: 768px) 48px, 64px"
                            className={styles.imageImg}
                        />
                    </span>
                </div>

                <p className={styles.quote}>
                    Have questions about our coworking space and membership
                    plans? Drop us a line using the form below or give us a
                    call.
                </p>
            </div>
            <div className={styles.contactBody}>
                <div className={styles.contacts}>
                    <div className={styles.contactInner}>
                        <h3>Call Us At</h3>
                        <p>(555) 555-5555</p>
                    </div>
                    <div className={styles.contactInner}>
                        <h3>Office Hours</h3>
                        <p>
                            Monday-Friday: 9am - 6pm
                            <br />
                            Saturday: 9am - 3pm
                            <br />
                            Closed Sundays
                        </p>
                    </div>
                    <div className={styles.contactInner}>
                        <h3>Location</h3>
                        <p>
                            123 Coworking Street
                            <br />
                            Anycity, State 12345
                        </p>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <ContactForm />

                    <small className={styles.notate}>
                        We aim to respond to all inquiries within 24 business
                        hours. For the fastest response, please include your
                        preferred membership plan of interest and any specific
                        questions you may have. One of our workspace specialists
                        will be happy to assist you further.
                    </small>
                </div>
            </div>
        </section>
    );
}
