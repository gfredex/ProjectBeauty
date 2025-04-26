import { Routes, Route } from 'react-router-dom';
import { LoginForm, RegisterForm } from '../components';
import { Home } from '../pages';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    );
};