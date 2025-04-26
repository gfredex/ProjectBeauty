import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getUsers } from '../../../mocks/users.ts';
import { LoginFormUI } from '../../../components';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const registered = location.state?.registered;
    const [showSuccess] = useState(registered ?? false);

    useEffect(() => {
        if (showSuccess) {
            const timeout = setTimeout(() => {
                navigate(location.pathname, { replace: true, state: {} });
            }, 0);

            return () => clearTimeout(timeout);
        }
    }, [showSuccess, navigate, location.pathname]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            navigate('/home');
        } else {
            setError('Неверный email или пароль');
        }
    };

    return (
        <LoginFormUI
            email={email}
            password={password}
            error={error}
            showSuccess={showSuccess}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleSubmit}
        />
    );
};

export { LoginForm };