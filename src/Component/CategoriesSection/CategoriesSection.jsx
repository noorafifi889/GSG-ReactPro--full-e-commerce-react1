import React from 'react'
import "./CategoriesSection.css"
import { Button } from '../Button'
import bluetooth from "../../image/bluetooth (2).png";
const CategoriesSection = () => {
    return (
      <div className="categoriesSection">
        <div className="container-section">
          <p className="subTitle-section">Categories</p>
          <h1 className="mainTitle-section">Enhance Your Music Experience</h1>
          <div className="fullTime">
            <div className="hour">
              <h4>23</h4>
              Hours
            </div>
            <div className="days">
              <h4>03</h4>
              Days
            </div>
            <div className="minutes">
              <h4>59</h4>
              Minutes
            </div>
            <div className="seconds">
              <h4>59</h4>
              Seconds
            </div>
          </div>
          <div className="btn-buy-now">
            <a href="#">Buy Now</a>
          </div>
        </div>

        <div className="basic-img">
          <img src={bluetooth} alt="" />
          <div className="glow-effect"></div>
        </div>
      </div>
    );
}

export default CategoriesSection