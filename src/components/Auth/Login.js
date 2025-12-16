import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../Common/InputField';
import Button from '../Common/Button';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Basic validation
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }

        try {
            // In a real app, this would be an API call
            // For demonstration, we'll simulate a successful login
            const success = await login(username, password); // Simulate login process

            if (success) {
                // Redirect based on user role (simplified for now)
                // In a real app, you'd get the role from the login response
                if (username === 'admin') { // Hardcoded role for demo
                    navigate('/admin');
                } else {
                    navigate('/dashboard');
                }
            } else {
                setError('Invalid username or password.');
            }
        } catch (err) {
            console.error("Login error:", err);
            setError('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2 className="page-title">Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit" className="btn-primary" text="Login" />
            </form>
        </div>
    );
};

export default Login;