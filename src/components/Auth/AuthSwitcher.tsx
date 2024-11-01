/* Plannlegger hvordan jeg skal Autorisering.
Skal bygge videre på den med api fetching, andre logikk
 */


import { AuthSwitcherTypes } from "../../types/AuthSwitcher.types";
import modalStyle from "./AuthSwitcher.module.css";
import { useState } from "react";

const AuthSwitcher = ({ onClose, onLogin }: AuthSwitcherTypes): React.ReactNode => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginMode) {
      onLogin();
    }
    onClose();
  };

  return (
    <div className={modalStyle.modalContainer}>
      <div className={modalStyle.modalContent}>
        <h2>{isLoginMode ? "Log In" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
            {/* Test skjema/Skal byttes ut */}
          <div>
            <label>Speaker Name</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label>Email</label>
            <input type="text" id="email" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">{isLoginMode ? "Log In" : "Register"}</button>
        </form>
        <p>
          {isLoginMode ? "Don't have an account?" : "Already registered?"}{" "}
          <button type="button" onClick={() => setIsLoginMode(!isLoginMode)}>
            {isLoginMode ? "Go to Registration" : "Go to Log In"}
          </button>
        </p>
        <button className={modalStyle.close} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AuthSwitcher;



