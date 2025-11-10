import React from "react";
import { TitleSection } from "../TitleSection";
import ProductCard from "../ExploreProduct/ProductCard";
import { useProducts } from "../Hook/useProducts";
import "./bestProduct.css";
const BestProducts = () => {
  const { products, loading, error } = useProducts();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="bestProduct">
      <TitleSection
        subtitle="This Month"
        mainTitle="Best Selling Products"
        showNavigation={false}
        buttonTitle="View All"
      />
      <div className="products-grid">
        {products.slice(10, 14).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div> //
  );
};

export default BestProducts;
