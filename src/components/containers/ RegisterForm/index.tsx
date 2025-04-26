import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { getUsers, addUser, User } from '../../../mocks/users.ts';
import { RegisterFormUI } from '../../../components'; // Импортируем UI-компонент

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const users = getUsers();
        const userExists = users.find(u => u.email === email);

        if (userExists) {
            setError('Пользователь уже существует');
        } else {
            const newUser: User = { email, password };
            addUser(newUser);
            navigate('/', { state: { registered: true } });
        }
    };

    return (
        <RegisterFormUI
            email={email}
            password={password}
            error={error}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleSubmit}
        />
    );
};

export { RegisterForm };
