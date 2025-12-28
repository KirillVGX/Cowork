'use client';

import Image from 'next/image';
import styles from './contact.module.css';
import { useEffect, useState } from 'react';
import Button from '@/components/button/Button';

export default function Contact() {
    const plans = ['Basic', 'Pro', 'Business'];
    const [plan, setPlan] = useState('');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        plan: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            ...formData,
            plan,
        };

        if (!data.email || !data.plan) {
            alert('Please fill required fields');
            return;
        }

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            plan: '',
            message: '',
        });
        setPlan('');

        console.log(formData);
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.head}>
                <div className={styles.title}>
                    <h1>Contact Us</h1>
                    <span className={styles.image}>
                        <Image
                            src="/chat-bubles.svg"
                            alt="Chat bubles"
                            width={64}
                            height={64}
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
                    <form
                        className={styles.form}
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.names}>
                            <label
                                htmlFor="firstName"
                                className="visuallyHidden"
                            >
                                First name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                className={styles.input}
                                value={formData.firstName}
                                onChange={handleChange}
                            />

                            <label
                                htmlFor="lastName"
                                className="visuallyHidden"
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                className={styles.input}
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <label
                            htmlFor="email"
                            className="visuallyHidden"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label
                            htmlFor="phone"
                            className="visuallyHidden"
                        >
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Phone"
                            className={styles.input}
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <label
                            htmlFor="plan"
                            className="visuallyHidden"
                        >
                            Select a plan
                        </label>

                        <select
                            id="plan"
                            value={formData.plan}
                            onChange={handleChange}
                            className={`${styles.input} ${styles.select}`}
                            // onChange={(e) => setPlan(e.target.value)}
                            required
                        >
                            <option
                                value=""
                                disabled
                            >
                                Select a plan
                            </option>
                            {plans.map((p) => (
                                <option
                                    key={p}
                                    value={p}
                                >
                                    {p}
                                </option>
                            ))}
                        </select>

                        <textarea
                            name="message"
                            id="message"
                            className={`${styles.input} ${styles.textarea}`}
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <Button
                            text="Submit"
                            type="submit"
                        />
                    </form>

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
