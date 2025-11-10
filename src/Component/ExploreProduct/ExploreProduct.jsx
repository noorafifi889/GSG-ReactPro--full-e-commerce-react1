import { TitleSection } from "../TitleSection";
import "./exploreProduct.css";
import ProductCard from "../ExploreProduct/ProductCard";
import { Button } from "../Button";
import { useProducts } from "../Hook/useProducts";
const ExploreProduct = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="exploreProduct">
      <TitleSection subtitle="Our Products" mainTitle="Explore Our Products" />
      <div className="products-grid">
        {products.slice(0, 8).map((product) => (
          <ProductCard product={product} />
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

export default ExploreProduct;
