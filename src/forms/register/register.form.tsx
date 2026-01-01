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

type ToastState = {
    show: boolean;
    text: string;
    variant: 'success' | 'error';
};

export default function RegisterForm() {
    const router = useRouter();
    const [successToast, setSuccessToast] = useState(false);
    const [errorToast, setErrorToast] = useState(false);
    const [redirectToast, setRedirectToast] = useState(false);

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
                        setSuccessToast(true);

                        resetForm();

                        setTimeout(() => {
                            setSuccessToast(false);
                            setRedirectToast(true);
                        }, 1500);

                        setTimeout(() => {
                            setRedirectToast(false);
                            router.push('/login');
                        }, 3000);
                    } else {
                        setErrorToast(true);

                        setTimeout(() => {
                            setErrorToast(false);
                        }, 3000);
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
                            color="blue"
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>

            <Toast
                show={successToast}
                text="Регистрация успешна 🎉"
                variant="success"
            />

            <Toast
                show={redirectToast}
                text="Перенаправляем на страницу входа…"
                variant="loading"
            />

            <Toast
                show={errorToast}
                text="Ошибка регистрации"
                variant="error"
            />
        </>
    );
}
