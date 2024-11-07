import { useState } from "react";

interface LoginFormProps {
  onLogin: (data: { name: string; password: string }) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps): JSX.Element => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ name, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;












