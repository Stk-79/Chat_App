import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">We Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/1374509/pexels-photo-1374509.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        ></img>
        <span>Sarthak</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
