import React from "react";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt, FaHome } from "react-icons/fa";
import "./index.css";

// #27ea66

function SignUp() {
  return (
    <div className="container">
      <div className="SignUpForm">
        <h2>Create your account</h2>
        <form>
          <div className="name">
            <div className="inputGr">
              <FaUser className="inputIcon" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="inputGr">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="inputGr">
            <FaEnvelope className="inputIcon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputGr">
            <FaLock className="inputIcon" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="inputGr">
            <FaPhoneAlt className="inputIcon" />
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="inputGr">
            <FaHome className="inputIcon" />
            <input type="text" placeholder="Address" />
          </div>
          <button type="submit" className="registerBtn">
            Register
          </button>
        </form>
        <p className="loginLink">
          Already have an account? <a href="?">Login</a>
        </p>
      </div>
    </div>
  );
}
export default SignUp;
