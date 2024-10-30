import { Link } from "react-router-dom";
import Logo from "../../assets/React.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo for Javazone" />
      </Link>
      <nav>
        <Link to="/program">Program</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
    </header>
  );
};

export default Header;