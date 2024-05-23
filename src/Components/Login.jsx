import React from "react";
import { Link } from "react-router-dom";
import Return from "../assets/return.png";
import Default from "./Default.jsx";
import "./Signup.css";
import Signup from "./Signup.jsx";

function Login() {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary backdrop-blur-md">
      <div className="40-w p-5 rounded border border-danger bg-white form_container">
        <form action="">
          <Link to="/" element={<Default />}>
            <img src={Return} alt="" className="return" />
          </Link>
          <h3 className="text-center text-black">Log In</h3>
          <div className="mb-2">
            <label htmlFor="email" className="text-black">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-black">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label
              htmlFor="check"
              className="custom-label-input text-black p-2"
            >
              Remember Me
            </label>
          </div>
          <div className="d-grid d-flex justify-content-center">
            <button className="btn btn-primary">Log In</button>
          </div>
          <p className="p-3 text-black text-end mt-2 d-flex justify-content-center">
            <a
              href=""
              style={{ textDecoration: "none" }}
              className="text-black"
            >
              Forgot Password?
            </a>
            <Link
              to="/signin"
              element={<Signup />}
              style={{ textDecoration: "none", paddingLeft: "2px" }}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
