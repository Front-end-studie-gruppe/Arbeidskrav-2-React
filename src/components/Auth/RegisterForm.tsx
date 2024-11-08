import authStyle from "./AuthSwitcher.module.css";


import { useState } from "react";

interface RegisterFormProps {
  onRegister: (data: { name: string; password: string }) => void;
}

const RegisterForm = ({ onRegister }: RegisterFormProps): JSX.Element => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister({ name, password });
  };

  return (
    <form style={authStyle} onSubmit={handleSubmit}>
      <label>Username</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button className={authStyle.submit} type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;














