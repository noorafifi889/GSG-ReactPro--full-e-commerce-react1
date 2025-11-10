
import React from 'react'
import { TitleSection } from '../TitleSection'
import Timer from './Timer'
import './FlashSales.css'
import ProductCard from "../ExploreProduct/ProductCard";
import { Button } from "../Button";
import NavigationArrows from "../NavigationArrows";
import { useProducts } from "../Hook/useProducts";
import { BsJustify } from "react-icons/bs";
// import NavigationArrows from '../NavigationArrows';
const FlashSales = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flashSales">
      <TitleSection subtitle="Today's" mainTitle="Flash Sales" />

      <Timer />
      <div className="products-grid">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Button
        title="View All Products"
        style={{
          display: "flex",
          margin: "30px auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  );
};

export default FlashSales