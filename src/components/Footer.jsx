import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-row">
      <div className="footer-column">
        <p>Home</p>
        <p>Product</p>
        <p>About Us</p>
        <p>Contacts</p>
      </div>
      <div className="footer-column">
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
      </div>
      <div className="footer-column footer-icons">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
    </div>
    <p className="footer-copyright">© 2024 MediTrack. All rights reserved.</p>
  </footer>
);

export default Footer;
