import React from 'react';
import { Input } from '../Input';
import styles from './loginForm.module.scss'

type LoginFormUIProps = {
    email: string;
    password: string;
    error: string;
    showSuccess: boolean;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
};

const LoginFormUI: React.FC<LoginFormUIProps> = ({
                                                     email,
                                                     password,
                                                     error,
                                                     showSuccess,
                                                     onEmailChange,
                                                     onPasswordChange,
                                                     onSubmit,
                                                 }) => {
    return (
        <div className={styles.formWrapper}>
            <form onSubmit={onSubmit} className={styles.loginForm}>
                {showSuccess && <p style={{ color: 'green' }}>Успешная регистрация! Теперь войдите.</p>}
                <h2>Вход</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onEmailChange}
                />
                <Input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={onPasswordChange}
                />
                <button type="submit">Войти</button>
                <p>Нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
            </form>
        </div>
    );
};

export { LoginFormUI };
