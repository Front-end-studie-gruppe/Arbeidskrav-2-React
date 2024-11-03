import React, { useState } from 'react';
import { User } from '../../types/types.ts';

interface RegistrationFormProps {
    onRegister: (user: User) => Promise<void>;
    isAdmin: boolean;
}

const RegistrationForm = ({ onRegister, isAdmin }: RegistrationFormProps): React.ReactNode => {
    const [username, setUsername] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const validateInputs = () => {
        if (isAdmin) {
            if (!username) return 'Username is required.';
            if (password.length < 4) return 'Password must be at least 6 characters.';
        } else {
            if (!name) return 'Name is required.';
            if (!email) return 'Email is required.';
            if (!/^\S+@\S+\.\S+$/.test(email)) return 'Email format is invalid.';
            if (password.length < 4) return 'Password must be at least 6 characters.';
        }
        return null; // All validations passed
    };

    const handleRegister = async () => {
        const validationError = validateInputs();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const user: User = {
                id: 0, // La serveren generere ID hvis mulig
                username,
                name: isAdmin ? '' : name,
                role: isAdmin ? 'admin' : 'speaker',
                password,
                email: isAdmin ? '' : email,
            };
            await onRegister(user);
            setSuccess(`User ${isAdmin ? username : name} registered successfully!`);
            setUsername('');
            setName('');
            setEmail('');
            setPassword('');
            setError('');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred during registration.');
        }
    };

    return (
        <div>
            <h2>{isAdmin ? 'Register Admin' : 'Register Speaker'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {!isAdmin && (
                <>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </>
            )}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required={isAdmin}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button onClick={handleRegister}>{isAdmin ? 'Register Admin' : 'Register Speaker'}</button>
        </div>
    );
};

export default RegistrationForm;
