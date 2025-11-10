import React from "react";
import { FaTruck, FaHeadset, FaMoneyBillWave } from "react-icons/fa";
import "./support.css";

const Support = () => {
  return (
    <div className="support">
      <div className="item">
        <FaTruck className="icon-support" size={30} />
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="item">
        <FaHeadset className="icon-support" size={30} />
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="item">
        <FaMoneyBillWave className="icon-support" size={30} />
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
};
export default Support;