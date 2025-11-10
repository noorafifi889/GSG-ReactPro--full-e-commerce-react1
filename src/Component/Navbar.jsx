import React from "react";
import "../assets/Navbar.css";
import { Containar } from "./Containar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserDropdown from "./User-dropdown/UserDropdown";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import {
  faSearch,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const Navbar = ({ showUserAccount = true }) => {
  return (
    <nav>
      <Link to="/">
        {" "}
        <div className="logo">Exclusive</div>{" "}
      </Link>
      <div className="item">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="controlSection">
        <div className="lookInput">
          <input type="text" placeholder="What are you looking for?" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="icon" />
        </Link>
        {showUserAccount ? <FaUser onShow="" /> : null}
      </div>
    </nav>
  );
};
