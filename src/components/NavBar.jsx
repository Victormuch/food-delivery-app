
import React, { useState } from "react";
import "./NavBar/NavBar.css";


const NavBar = () => {
  const [menu, setMenu] = useState("home");

  return (
    
    <div className="navbar">
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
     </div>
  )
}

export default NavBar;
