import { useState, useEffect } from "react";
import { registerAdmin, loginAdmin, checkAdminExists } from "../../api/authApi";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import authStyle from "./AuthSwitcher.module.css";
import cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

interface AuthSwitcherProps {
  onClose: () => void; 
} 

const AuthSwitcher = ({ onClose }: AuthSwitcherProps): JSX.Element => {
  const [isAuthMode, setIsAuthMode] = useState(true); 
  const [adminExists, setAdminExists] = useState(false); 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const exists = await checkAdminExists();
        setAdminExists(exists);
      } catch (error) {
        console.error("Error fetching admin status:", (error as Error).message); 
      }
    };

    fetchAdminStatus();
  }, []);

  const handleRegister = async (data: { name: string; password: string }) => {
    try {
      await registerAdmin(data);
      alert("Registration successful!");
      setAdminExists(true);
    } catch (error) {
      alert(`Registration failed: ${(error as Error).message}`);
    }
  };

  const handleLogin = async (data: { name: string; password: string }) => {
    try {
      const { username, role } = await loginAdmin(data);
      cookie.set("username", username); 
      cookie.set("role", role); 
      dispatch(login({ username, role })); 
      onClose();
    } catch (error) {
      alert(`Login failed: ${(error as Error).message}`);
    }
  };

  return (
    <div className={authStyle.modalContainer}>
      <div className={authStyle.modalContent}>
        <h2 className={authStyle.heroAuthText}>{isAuthMode ? "Sign in" : "Sign up"}</h2>
        {!isAuthMode && adminExists && <p>An admin account already exists.</p>}
        {isAuthMode ? (
          <LoginForm onLogin={handleLogin} /> 
        ) : (
          !adminExists &&  <RegisterForm onRegister={handleRegister} /> 
        )}
          {isAuthMode ? "Don't have an account?" : ""}{" "}
          <div className={authStyle.switchButton}>
          <button className={authStyle.switchBtn} type="button" onClick={() => setIsAuthMode(!isAuthMode)}>
            {isAuthMode ? "Sign up" : "Sign In"} 
          </button>
        <button className={authStyle.close} onClick={onClose}>Close</button> 
          </div>
      </div>
    </div>
  );
};

export default AuthSwitcher;



















