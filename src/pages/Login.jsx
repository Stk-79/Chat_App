import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">We Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <button>Sign In</button>
        </form>
        <p>Don't have an existing account? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
