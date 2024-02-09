import { Link } from "react-router-dom";
import "../cssModules/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          YourLogo
        </Link>
        <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
        <label htmlFor="navbar-toggle" className="navbar-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Shop" className="navbar-link">
              Shop
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Cart" className="navbar-link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
