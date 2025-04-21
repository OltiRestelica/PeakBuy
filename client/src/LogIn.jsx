import React from "react";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt, FaHome } from "react-icons/fa";
import "./index.css";

function LogIn() {
  return (
    <div className="container">
      <div className="SignUpForm">
        <h1>Log In</h1>
        <form>
          <div className="inputGr">
            <FaEnvelope className="inputIcon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputGr">
            <FaLock className="inputIcon" />
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="registerBtn">
            Log In
          </button>
        </form>
        <p className="loginLink">
          Don't have an account? <a href="?">Register</a>
        </p>
      </div>
    </div>
  );
}

export default LogIn;