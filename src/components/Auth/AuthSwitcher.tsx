import { useState, useEffect } from "react";
import { registerAdmin, loginAdmin, checkAdminExists } from "../../api/AuthApi";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import modalStyle from "./AuthSwitcher.module.css";

interface AuthSwitcherProps {
  onClose: () => void; 
}

const AuthSwitcher = ({ onClose }: AuthSwitcherProps): JSX.Element => {
  const [isAuthMode, setIsAuthMode] = useState(true); 
  const [adminExists, setAdminExists] = useState(false);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const exists = await checkAdminExists();
        setAdminExists(exists);
      } catch (error) {
        const errorMessage = (error as Error).message || "An unexpected error occurred";
        console.error("Error fetching admin status:", errorMessage);
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
      const errorMessage = (error as Error).message || "An unexpected error occurred";
      alert(`Registration failed: ${errorMessage}`);
    }
  };

  const handleLogin = async (data: { name: string; password: string }) => {
    try {
      await loginAdmin(data);
      alert("Login successful!");
    } catch (error) {
      const errorMessage = (error as Error).message || "An unexpected error occurred";
      alert(`Login failed: ${errorMessage}`);
    }
  };

  return (
    <div className={modalStyle.modalContainer}>
      <div className={modalStyle.modalContent}>
        <h2>{isAuthMode ? "Login" : "Register"}</h2>
        {!isAuthMode && adminExists && <p>An admin account already exists.</p>}
        {isAuthMode ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <RegisterForm onRegister={handleRegister} />
        )}
        <p>
          {isAuthMode ? "Don't have an account?" : "Already registered?"}{" "}
          <button type="button" onClick={() => setIsAuthMode(!isAuthMode)}>
            {isAuthMode ? "Go to Registration" : "Go to Log In"}
          </button>
        </p>
        <button className={modalStyle.close} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AuthSwitcher;


















