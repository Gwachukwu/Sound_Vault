import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [alert, setAlert] = useState({ message: "", color: "red" });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setAlert({ ...alert, message: "" });
  };

  return (
    <div className="form-area">
      <h3>Sign im to continue</h3>
      <form className="form-area_form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
      <p>
        New user?{" "}
        <Link to="/signup" className="form-area_links">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
