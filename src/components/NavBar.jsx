import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar/NavBar.css";

const NavBar = ({cartCount}) => {

    const [menu, setMenu] = useState("home")
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
      <Link to='./cart' className="cart-button" >
      🛒 Cart ({cartCount})
      </Link>
     </div>

  )
}


  

export default NavBar;
