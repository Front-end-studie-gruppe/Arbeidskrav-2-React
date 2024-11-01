import { Link } from "react-router-dom";
import Logo from "../../assets/React.svg";
import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <Link to="/">
        <img src={Logo} alt="Logo for Javazone" />
      </Link>
      <nav className={headerStyle.navLinks}>
        <Link to="/program">Program</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
