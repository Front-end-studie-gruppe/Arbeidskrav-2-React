import authStyle from "./AuthSwitcher.module.css";

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
    <form style={authStyle} onSubmit={handleSubmit}>
      <label>Username</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      
      <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      
      <button className={authStyle.submit} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;












