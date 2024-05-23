import React from "react";
import { Link } from "react-router-dom";
import Return from "../assets/return.png";
import Default from "./Default.jsx";
import Login from "./Login.jsx";
import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary backdrop-blur-md">
        <div className="40-w p-5 rounded border border-danger bg-white form_container">
          <form action="">
            <Link to="/" element={<Default />}>
              <img src={Return} alt="" className="return" />
            </Link>
            <h3 className="text-center text-black">Sign In</h3>
            <div className="mb-2">
              <label htmlFor="name" className="text-black">
                Name
              </label>
              <input
                type="email"
                placeholder="Name"
                className="form-control"
                required
              />
            </div>
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
              <label htmlFor="password" className="text-black">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                required
              />
            </div>
            <div className="d-grid d-flex justify-content-center">
              <button className="btn btn-primary">SignIn</button>
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
                element={<Login />}
                style={{ textDecoration: "none", paddingLeft: "3px" }}
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
