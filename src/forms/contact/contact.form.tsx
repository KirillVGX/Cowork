'use client';

import styles from './contact.module.css';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { contactSchema, ContactFormData } from '@/schema/contact';
import { ContactUser } from '@/actions/contactUs';
import { useState } from 'react';

import Button from '@/components/button/Button';
import Toast from '@/components/toast/Toast';
import FormikInput from '@/components/formikActions/FormikInput';
import FormikSelect from '@/components/formikActions/FormikSelect';
import FormikTextarea from '@/components/formikActions/FormikTextarea';

const initialValues: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    plan: '',
    message: '',
};

export default function ContactForm() {
    const [successToast, setSuccessToast] = useState(false);
    const [errorToast, setErrorToast] = useState(false);
    const [errorText, setErrorText] = useState('');

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(contactSchema)}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    const formData = new FormData();

                    Object.entries(values).forEach(([key, value]) => {
                        formData.append(key, value ?? '');
                    });

                    const result = await ContactUser({ ok: false }, formData);

                    setSubmitting(false);

                    if (result.ok) {
                        resetForm();

                        setSuccessToast(true);

                        setTimeout(() => {
                            setSuccessToast(false);
                        }, 3000);
                    } else {
                        setErrorText(result.error ?? 'Failed to send message');
                        setErrorToast(true);

                        setTimeout(() => {
                            setErrorToast(false);
                        }, 3000);
                    }
                }}
            >
                <Form
                    className={styles.form}
                    autoComplete="off"
                    noValidate
                >
                    <div className={styles.names}>
                        <FormikInput
                            name="firstName"
                            placeholder="First Name"
                            isRequired
                        />

                        <FormikInput
                            name="lastName"
                            placeholder="Last Name"
                            isRequired
                        />
                    </div>

                    <FormikInput
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        isRequired
                    />

                    <FormikInput
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        isRequired
                    />

                    <FormikSelect
                        name="plan"
                        ariaLabel="Select a plan"
                        options={[
                            { value: 'HOT', label: 'Hot Desk' },
                            { value: 'DEDICATED', label: 'Dedicated Desk' },
                            { value: 'PRIVATE', label: 'Private Office' },
                        ]}
                    />

                    <FormikTextarea
                        name="message"
                        placeholder="Message"
                    />

                    <Button
                        type="submit"
                        text="Submit"
                    />
                </Form>
            </Formik>

            <Toast
                show={successToast}
                text="Message successfully sent 🎉"
                variant="success"
            />

            <Toast
                show={errorToast}
                text={errorText}
                variant="error"
            />
        </>
    );
}
