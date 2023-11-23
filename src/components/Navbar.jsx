import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">We Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1374509/pexels-photo-1374509.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        <span>Sarthak</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
