'use client';

import styles from './login.module.css';
import { Formik, Form, Field } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { signInSchema, SignInFormData } from '@/schema/login';
import { signInWithCredentials } from '@/actions/sign-in';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Toast from '@/components/toast/Toast';
import Button from '@/components/button/Button';

const initialValues: SignInFormData = {
    email: '',
    password: '',
};

export default function LoginForm() {
    const router = useRouter();
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(signInSchema)}
                onSubmit={async (values, { setSubmitting }) => {
                    const formData = new FormData();

                    Object.entries(values).forEach(([key, value]) => {
                        formData.append(key, value);
                    });

                    const result = await signInWithCredentials(
                        { ok: false },
                        formData
                    );

                    setSubmitting(false);

                    if (result.ok) {
                        setShowSuccessToast(true);
                        setTimeout(() => {
                            setShowSuccessToast(false);
                            router.push('/');
                        }, 1500);
                    } else {
                        setShowErrorToast(true);
                        setTimeout(() => {
                            setShowErrorToast(false);
                        }, 3000);
                    }
                }}
            >
                {({ errors, submitCount, isSubmitting }) => (
                    <Form
                        className={styles.login}
                        noValidate
                        autoComplete="off"
                    >
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            className={`${styles.input} ${
                                errors.email && submitCount > 0
                                    ? styles.error
                                    : ''
                            }`}
                        />

                        <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            className={`${styles.input} ${
                                errors.password && submitCount > 0
                                    ? styles.error
                                    : ''
                            }`}
                        />

                        <Button
                            type="submit"
                            text="Log In"
                            color='blue'
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>

            <Toast
                show={showSuccessToast}
                text="Вы успешно вошли ✅"
            />

            <Toast
                show={showErrorToast}
                text="Неверный email или пароль"
            />
        </>
    );
}
