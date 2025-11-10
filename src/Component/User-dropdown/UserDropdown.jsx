import React, { useState } from "react";
import  "./userdropdown.css"
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="user-dropdown">
      <div 
        className="user-icon" 
        onClick={() => setIsOpen(!isOpen)}
      >
        👤
      </div>
      
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/profile">My Profile</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/cancellations">My Cancellations</Link>
          <Link to="/reviews">My Reviews</Link>
          <div className="dropdown-divider"></div>
          <Link to="/logout">Logout</Link>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;