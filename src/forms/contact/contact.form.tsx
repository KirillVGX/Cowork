'use client';

import styles from './contact.module.css';
import { ChangeEvent, useActionState, useEffect, useState } from 'react';
import Button from '@/components/button/Button';
import Input from '@/components/formActions/input';
import Textarea from '@/components/formActions/textarea';
import Select from '@/components/formActions/select';
import { ContactUser, ContactState } from '@/actions/contactUs';

const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    plan: '',
    message: '',
};

const initialState: ContactState = {
    ok: false,
};

export default function ContactForm() {
    const [formData, setFormData] = useState(initialData);

    const [state, formAction] = useActionState(ContactUser, initialState);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
    };

    useEffect(() => {
        if (state.ok) {
            setFormData(initialData);
        }
    }, [state.ok]);

    return (
        <form
            className={styles.form}
            autoComplete="off"
            action={formAction}
        >
            <div className={styles.names}>
                <Input
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    isRequired
                />

                <Input
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    isRequired
                />
            </div>
            <Input
                type="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                isRequired
            />

            <Input
                id="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                isRequired
            />

            <Select
                value={formData.plan}
                ariaLabel="Select a plan"
                name="plan"
                options={[
                    {
                        value: 'HOT',
                        label: 'Hot Desk',
                    },
                    {
                        value: 'DEDICATED',
                        label: 'Dedicated Desk',
                    },
                    {
                        value: 'PRIVATE',
                        label: 'Private Office',
                    },
                ]}
                onChange={(val) => setFormData((p) => ({ ...p, plan: val }))}
            />

            <Textarea
                placeholder="Message"
                id="message"
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
