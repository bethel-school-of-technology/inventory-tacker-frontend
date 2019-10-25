import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="text-center">
    <h1>
      <a href="/#/"> Money Time</a>
    </h1>

    <ul className="nav-menu">
      <li className="lead">
        <Link to="/inventory">Inventory</Link>
      </li>
    </ul>
  </div>
);

export default Header;
