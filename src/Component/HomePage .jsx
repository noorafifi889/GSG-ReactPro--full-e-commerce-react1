import React from 'react'
import "../assets/Containar.css";
import { Navbar } from "./Navbar";
import { SideNav } from "./SideNav";
import MainContent from "./MainContent";
import FlashSales from "./FlashSales/FlashSales";
import Category from "./Category/Category";
import BestProducts from "./BestProduct/BestProducts";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import ExploreProduct from "./ExploreProduct/ExploreProduct";
// import { featuredProducts } from "./ExploreProduct/featuredProducts";
import Featured from "./Featured/Featured";
import Support from "./Support";

const HomePage  = () => {
  return (
      <div>
      
      <div className="mainSection">
        <SideNav />
        <MainContent />
      </div>
      <FlashSales />
      <hr />
      <Category />
      <hr />
      <BestProducts />
      <CategoriesSection />
      <ExploreProduct  />
      <Featured />
      <Support />
      
      </div>
  )
}

export default HomePage 