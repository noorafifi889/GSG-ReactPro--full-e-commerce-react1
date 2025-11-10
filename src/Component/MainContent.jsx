import React from "react";
import "../assets/MainContant.css";
import appleLogo from "../image/download.png";
import iphon14 from "../Image/iphone14.png";

const MainContent = () => {
  return (
    <main>
      <div className="content">
        <div className="textContent">
          <div className="logoContent">
            <div className="apple-logo">
              <img src={appleLogo} alt="Apple Logo" />
            </div>
            <p>iPhone 14 Series</p>
          </div>
          <h1>
            Up to 10%
            <br />
            off Voucher
          </h1>
          <a href="#" className="shop-link">
            Shop Now <span className="arrow">→</span>
          </a>
        </div>
        <div className="imageContent">
          <img className="iphone" src={iphon14} alt="iPhone 14 Pro" />
        </div>
      </div>

      <div className="slider-dots">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </main>
  );
};

export default MainContent;
