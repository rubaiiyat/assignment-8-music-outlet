import React from "react";
import "../Header/Header.css";
import Logo from "../../Images/MUSIC.png";
const Header = () => {
  return (
    <div className="navbar">
      <div>
        <img src={Logo} alt="" />
      </div>

      <div className="shopName">
        <h1>MUSIC STRING OUTLET</h1>
        <p>Choose 4 Clothes</p>
      </div>
      <div className="navAccount">
        <a href="">My Account</a>
        <a href="">Cart</a>
      </div>
    </div>
  );
};

export default Header;
