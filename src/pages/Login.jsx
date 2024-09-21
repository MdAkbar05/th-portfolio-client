import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./css/login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.authReducer);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((res) => {
      if (res.type === "auth/loginUser/fulfilled") {
        navigate("/");
      }
    });
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <p className="signup-btn">
          You haven't account? <Link to="/signup">sign-up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
