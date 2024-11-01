import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/javazone-logo.jpg";
import headerStyle from "./Header.module.css";
import AuthSwitcher from "../Auth/AuthSwitcher";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleLogin = () => {
    console.log("Brukeren har logget inn");
  };

  return (
    <>
      <header className={headerStyle.header}>
        <Link to="/">
          <img src={Logo} alt="Logo for Javazone" />
        </Link>
        <nav className={headerStyle.navContainer}>
          <ul className={headerStyle.navList}>
            <li className={headerStyle.listElement}>
              <Link to="/program">Program</Link>
            </li>
            <li className={headerStyle.listElement}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={headerStyle.listElement}>
              <Link to="#" onClick={toggleModal}>My Account</Link>
            </li>
          </ul>
        </nav>
      </header>
      {isModalOpen && <AuthSwitcher onClose={toggleModal} onLogin={handleLogin} />} 
    </>
  );
};

export default Header;


