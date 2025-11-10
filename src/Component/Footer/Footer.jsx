import React from "react";
import "./footer.css";
import imageQRCode from "../../image/991387c05dd6d44594e01b675513068803e2426d.jpg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section subscribe">
          <h1>Exclusive</h1>
          <h2>Subscribe</h2>
          <p>Get 10% off your first order</p>
          <div className="email-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-section ">
          <h2>Support</h2>
          <p>Ill Bijey sorani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-section account">
          <h2>Account</h2>
          <div className="account-table">
            <div className="account-column">
              <a href="#">My Account</a>
              <a href="#">Login / Register</a>
              <a href="#">Cart</a>
              <a href="#">Wishlist</a>
            </div>
            <div className="account-column">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms Of Use</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-section download-app">
          <h2>Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="app-buttons">
            <img src={imageQRCode} alt="" />
            <div>
              <span className="app-button">Google Play</span>
              <span className="app-button">App Store</span>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        © Copyright Rimel 2022. All right reserved.
      </div>
    </div>
  );
};

export default Footer;
