import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, verifyUser } from "../features/userSlice";
import "./css/signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoading } = useSelector((state) => state.userReducer);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password }))
      .unwrap()
      .then(() => {
        setShowOtpInput(true); // Show OTP input if registration is successful
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    dispatch(verifyUser({ otp }))
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signup-page">
      <div className="form-container">
        <h2 className="form-title">
          {showOtpInput ? "Verify OTP" : "Register"}
        </h2>
        {error && <p className="error-message">{error}</p>}
        {!showOtpInput ? (
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={`submit-btn ${isLoading && "disabled"}`}
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpVerification}>
            <div className="input-group">
              <label htmlFor="otp">Enter OTP</label>
              <input
                type="number"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={`submit-btn ${isLoading && "disabled"}`}
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
        <p className="signup-btn">
          You have already an account? <Link to="/login">sign-in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
