import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ count }) {
  return (
    <div className="navbar">
      <div className="left-div">
        <h2>Cart</h2>
      </div>
      <div className="right-div">
        <FaShoppingCart className="icon" />
        {count > 0 && <span className="cart-count">{count}</span>}
      </div>
    </div>
  );
}

export default Navbar;
