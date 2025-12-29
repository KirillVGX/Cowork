"use client"

import styles from './contactForm.module.css';
import { useState } from 'react';
import Button from '@/components/button/Button';
import Input from '@/components/formActions/input';
import Textarea from '@/components/formActions/textarea';
import Select from '@/components/formActions/select';

const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    plan: '',
    message: '',
};

export default function ContactForm() {
    const [plan, setPlan] = useState('');
    const [formData, setFormData] = useState(initialData);

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
            return;
        }

        setFormData(initialData);
        setPlan('');

        console.log(formData);
    };

    return (
        <form
            className={styles.form}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div className={styles.names}>
                <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <Input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
            />

            <Input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
            />

            <Select
                value={formData.plan}
                ariaLabel="Select a plan"
                options={[
                    {
                        value: '1',
                        label: 'Hot Desk',
                    },
                    {
                        value: '2',
                        label: 'Dedicated Desk',
                    },
                    {
                        value: '3',
                        label: 'Private Office',
                    },
                ]}
                onChange={(val) => setFormData((p) => ({ ...p, plan: val }))}
            />

            <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
            />

            <Button
                text="Submit"
                type="submit"
            />
        </form>
    );
}
