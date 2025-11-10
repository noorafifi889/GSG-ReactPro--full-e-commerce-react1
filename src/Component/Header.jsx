import React from 'react'
import "../assets/header.css"

export const Header = () => {
  return (
    <div className="header">
      Summer sale for All Swim Suits And Free Express Delivery - OFF 50%{" "}
      <a href="#" style={{ fontSize: "13px" }}>
        ShopeNow{" "}
      </a>
      <select
        name=""
        id=""
        style={{
          marginLeft: "70px",
          backgroundColor: "black",
          color: "white",
          border: "none",
        }}
      >
        <option value="English">English</option>
        <option value="Arabic">Arabic</option>
      </select>
    </div>
  );
}
