import { Link } from "react-router-dom";
import Logo from "../../assets/javazone-logo.jpg";
import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <Link to="/">
        <img src={Logo} alt="Logo for Javazone" />
      </Link>
      <nav className={headerStyle.navContainer}>
        <ul className={headerStyle.navList}>
          <li className={headerStyle.listElement}>
            <a>
              <Link to="/program">Program</Link>
            </a>
          </li>
          <li className={headerStyle.listElement}>
            <a>
              <Link to="/contact">Contact</Link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
