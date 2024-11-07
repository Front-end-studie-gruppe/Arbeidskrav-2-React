import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/javazone-logo.jpg";
import headerStyle from "./Header.module.css";
import globalStyle from "../../index.module.css";
import AuthSwitcher from "../Auth/AuthSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reduxStore";
import { logout } from "../../redux/authSlice";
import cookie from "js-cookie"; 

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state: RootState) => state.auth.username); 

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    
    cookie.remove("username");
    cookie.remove("role");
    dispatch(logout()); 
    setDropdownOpen(false);
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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
                  <p className={headerStyle.userName} onClick={toggleDropdown}>
                    {username}
                  </p>
                  {isDropdownOpen && (
                    <div ref={dropdownRef} className={headerStyle.dropdown}>
                      <Link to="/mypage" onClick={() => setDropdownOpen(false)}>
                       <p>My Page</p>
                      </Link>
                      <button onClick={handleLogout}>Log out</button>
                    </div>
                  )}
                </>
              ) : (
                <Link to="#" onClick={toggleModal}>
                  <p>My Account</p>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      {isModalOpen && (
        <AuthSwitcher onClose={toggleModal} />
      )}
    </>
  );
};

export default Header;
