import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/MediTrack" className="navbar-home">
        Home
      </Link>
      <FontAwesomeIcon icon={faUser} className="navbar-user-icon" />
    </nav>
  );
};

export default Navbar;
