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
    const [showToast, setShowToast] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(subscribeSchema)}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    setServerError(null);

                    const formData = new FormData();
                    formData.append('emailFooter', values.emailFooter);

                    const result = await emailFooterUser(
                        { ok: false },
                        formData
                    );

                    setSubmitting(false);

                    if (result.ok) {
                        resetForm();
                        setShowToast(true);
                        setTimeout(() => setShowToast(false), 3000);
                    } else {
                        setServerError(result.error ?? 'Error');
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
                show={showToast}
                text="Successfully subscribed 🎉"
            />

            <Toast
                show={!!serverError}
                text={serverError ?? ''}
            />
        </>
    );
}
