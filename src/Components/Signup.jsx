import React from "react";
import "./Signup.css";
import "./Signup.js";

function Signup() {
  return (
    <>
      <div className="card">
        <h2>Sign Up</h2>
        <h3>Enter your credentials</h3>
        <form className="form">
          <input
            className="control"
            id="password"
            type="password"
            placeholder="Password"
            on
            input="handleChange()"
          />
          <div id="bars">
            <div></div>
          </div>
          <div className="strength" id="strength"></div>
          <button className="control">Continue</button>
        </form>
      </div>
      <script type="text/javascript" src="Signup.js"></script>
    </>
  );
}

export default Signup;
