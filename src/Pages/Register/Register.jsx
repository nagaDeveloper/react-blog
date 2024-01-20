import { Link } from "react-router-dom";
import "./Register.css";
export default function Register() {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your Username"
        />
        <label>Email</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your Email"
        />
        <label>Password</label>
        <input
          type="password"
          className="register-input"
          placeholder="Enter your password"
        />
        <button className="register-button">Register</button>
      </form>
      <button className="register-login">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}
