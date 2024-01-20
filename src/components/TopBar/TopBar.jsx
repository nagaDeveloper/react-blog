import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
        <i className="top-icon fa-brands fa-pinterest"></i>
        <i className="top-icon fa-brands fa-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/">About</Link>
          </li>
          <li className="list-item">
            <Link to="/">Contact</Link>
          </li>
          <li className="list-item">
            <Link to="/write">Write</Link>
          </li>
          <li className="list-item">
            {user && <Link to="/logout">Logout</Link>}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-img"
            alt="profile"
            src="data:image/jpeg;base64,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"
          />
        ) : (
          <ul className="top-list">
            <li className="list-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="list-item">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
        <i className="top-search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
