import RegisterForm from '@/forms/register/register.form';

export default function RegisterPage() {
    return (
        <div style={{ padding: 24, maxWidth: 400 }}>
            <h1>Регистрация</h1>
            <RegisterForm />
        </div>
    );
}
