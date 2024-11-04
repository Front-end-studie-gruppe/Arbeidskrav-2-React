//npm install @fortawesome/react-fontawesome

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/javazone-logo.jpg";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={Logo} alt="Logo for Javazone" />
      </Link>
      <nav>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
      <div className="social-links">
        <a
          href="https://www.facebook.com/javazoneconference"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://x.com/search?q=javazone&src=typed_query"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/company/javazone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Javazone.</p>
    </footer>
  );
};

export default Footer;

