'use client';

import styles from './register.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { registerSchema, RegisterFormData } from '@/schema/register';
import { registerUser } from '@/actions/register';
import Toast from '@/components/toast/Toast';
import Button from '@/components/button/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const initialValues: RegisterFormData = {
    name: '',
    login: '',
    password: '',
    confirmPassword: '',
};

export default function RegisterForm() {
    const [showToast, setShowToast] = useState(false);
    const router = useRouter();

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(registerSchema)}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    const formData = new FormData();

                    Object.entries(values).forEach(([key, value]) => {
                        formData.append(key, value);
                    });

                    const result = await registerUser({ ok: false }, formData);

                    setSubmitting(false);

                    if (result.ok) {
                        setShowToast(true);
                        resetForm();

                        setTimeout(() => {
                            setShowToast(false);
                            router.push('/login');
                        }, 2000);
                    }
                }}
            >
                {({ isSubmitting, errors, submitCount }) => (
                    <Form
                        className={styles.register}
                        noValidate
                        autoComplete="off"
                    >
                        <Field
                            name="name"
                            placeholder="Full name"
                            className={`${styles.input} ${
                                errors.name && submitCount > 0
                                    ? styles.error
                                    : ''
                            }`}
                        />

                        <Field
                            name="login"
                            placeholder="Email"
                            className={`${styles.input} ${
                                errors.login && submitCount > 0
                                    ? styles.error
                                    : ''
                            }`}
                        />

                        <Field
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            className={`${styles.input} ${
                                errors.password && submitCount > 0
                                    ? styles.error
                                    : ''
                            }`}
                        />

                        <Field
                            name="confirmPassword"
                            type="password"
                            placeholder="Повторите пароль"
                            className={`${styles.input} ${
                                errors.confirmPassword && submitCount > 0
                                    ? styles.error
                                    : ''
                            }`}
                        />

                        <Button
                            type="submit"
                            text="Sign Up"
                            color='blue'
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>

            <Toast
                show={showToast}
                text="Регистрация успешна 🎉"
            />
        </>
    );
}
