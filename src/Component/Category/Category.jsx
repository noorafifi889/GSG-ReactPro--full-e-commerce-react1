import React from "react";
import { TitleSection } from "../TitleSection";
import "./Category.css";
// استيراد الأيقونات
import { FaMobileAlt, FaLaptop, FaHeadphones, FaGamepad } from "react-icons/fa";
import { IoWatch, IoCamera } from "react-icons/io5";

const Category = () => {
  return (
    <div className="category">
      <TitleSection subtitle="Categories" mainTitle="Browse By Category"  />
      <div className="category-container">
        <div className="box">
          <FaMobileAlt size={40} />
          <p>Phones</p>
        </div>
        <div className="box">
          <FaLaptop size={40} />
          <p>Computers</p>
        </div>
        <div className="box">
          <IoWatch size={40} />
          <p>SmartWatch</p>
        </div>
        <div className="box">
          <IoCamera size={40} />
          <p>Camera</p>
        </div>
        <div className="box">
          <FaHeadphones size={40} />
          <p>Headphones</p>
        </div>
        <div className="box">
          <FaGamepad size={40} />
          <p>Gaming</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
