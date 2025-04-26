import React from 'react';
import { Input } from '../Input';
import styles from './registerForm.module.scss';

type RegisterFormUIProps = {
    email: string;
    password: string;
    error: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
};

const RegisterFormUI: React.FC<RegisterFormUIProps> = ({
                                                           email,
                                                           password,
                                                           error,
                                                           onEmailChange,
                                                           onPasswordChange,
                                                           onSubmit,
                                                       }) => {
    return (
        <div className={styles.formWrapper}>
            <form onSubmit={onSubmit} className={styles.registerForm}>
                <h2>Регистрация</h2>
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
                <button type="submit">Зарегистрироваться</button>
                <p>Есть аккаунт? <a href="/">Войти</a></p>
            </form>
        </div>
    );
};

export { RegisterFormUI };