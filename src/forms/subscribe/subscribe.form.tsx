'use client';

import styles from './subscribe.module.css';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { subscribeSchema, SubscribeFormData } from '@/schema/subscribe';
import { emailFooterUser } from '@/actions/subscribe';
import { useState } from 'react';

import Button from '@/components/button/Button';
import Toast from '@/components/toast/Toast';
import FormikInput from '@/components/formikActions/FormikInput';

const initialValues: SubscribeFormData = {
    emailFooter: '',
};

export default function SubscribeForm() {
    const [successToast, setSuccessToast] = useState(false);
    const [errorToast, setErrorToast] = useState(false);
    const [errorText, setErrorText] = useState('');

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(subscribeSchema)}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    const formData = new FormData();
                    formData.append('emailFooter', values.emailFooter);

                    const result = await emailFooterUser(
                        { ok: false },
                        formData
                    );

                    setSubmitting(false);

                    if (result.ok) {
                        resetForm();

                        setSuccessToast(true);

                        setTimeout(() => {
                            setSuccessToast(false);
                        }, 3000);
                    } else {
                        setErrorText(result.error ?? 'Subscription error');
                        setErrorToast(true);

                        setTimeout(() => {
                            setErrorToast(false);
                        }, 3000);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form
                        className={styles.subscribe}
                        noValidate
                    >
                        <FormikInput
                            name="emailFooter"
                            type="email"
                            placeholder="Enter your email"
                        />

                        <Button
                            type="submit"
                            text="Subscribe"
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>

            <Toast
                show={successToast}
                text="Successfully subscribed 🎉"
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
