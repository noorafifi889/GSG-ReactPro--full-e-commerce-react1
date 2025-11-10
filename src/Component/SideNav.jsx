import React, { useState } from "react";
import { Containar } from "./Containar";
import "../assets/SideNav.css";

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`side-nav ${isOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ×
        </button>

        <ul>
          <li>
            <details>
              <summary>Woman's Fashion</summary>
            </details>
          </li>
          <li>
            <details>
              <summary>Men's Fashion</summary>
            </details>
          </li>
          <li>Electronics</li>
          <li>Groceries & Pets</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Health & Beauty</li>
        </ul>
      </aside>

      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};
