import React, { useState } from 'react';
import { User } from '../../types/types.ts';

const LoginComponent = ({ toggleMode }: { toggleMode: () => void }): React.ReactNode => {
    const [id, setId] = useState<number | undefined>();
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const validateInputs = () => {
        if (id === undefined || id <= 0) return 'Valid ID is required.';
        if (password.length < 4) return 'Password must be at least 6 characters.';
        return null; // All validations passed
    };

    const handleLogin = async () => {
        const validationError = validateInputs();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/speakers/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            });

            if (response.ok) {
                const speaker: User = await response.json();
                if (speaker.password !== password) {
                    throw new Error('Invalid password.');
                }
                setSuccess(`Welcome back, ${speaker.name}!`);
                return;
            }

            const adminResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/admin/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            });

            if (!adminResponse.ok) {
                throw new Error('Login failed. Check your ID and password.');
            }

            const admin: User = await adminResponse.json();
            if (admin.password !== password) {
                throw new Error('Invalid password.');
            }

            setSuccess(`Welcome back, Admin ${admin.username}!`);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred during login.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <input
                type="text"
                placeholder="ID"
                value={id || ''}
                onChange={(e) => setId(Number(e.target.value))}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={toggleMode}>Switch to Register</button>
        </div>
    );
};

export default LoginComponent;
