import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/javazone-logo.jpg";
import headerStyle from "./Header.module.css";
import globalStyle from "../../index.module.css";
import AuthSwitcher from "../Auth/AuthSwitcher";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleLogin = (name: string) => {
    setUsername(name);
    console.log("User has logged in");
  };

  const handleLogout = () => {
    setUsername(null);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // lukke dropdown når du klikker utenfor den
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className={headerStyle.header}>
        <Link to="/">
          <img
            src={Logo}
            className={globalStyle.logo}
            alt="Logo for Javazone"
          />
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
              {username ? (
                <>
                  <p onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                    {username}
                  </p>
                  {isDropdownOpen && (
                    <div ref={dropdownRef} className={headerStyle.dropdown}>
                      <Link to="/mypage" onClick={() => setDropdownOpen(false)}>
                        My Page
                      </Link>
                      <button onClick={handleLogout}>Log out</button>
                    </div>
                  )}
                </>
              ) : (
                <Link to="#" onClick={toggleModal}>
                  My Account
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      {isModalOpen && (
        <AuthSwitcher onClose={toggleModal} onLogin={handleLogin} />
      )}
    </>
  );
};

export default Header;
