import { FaShippingFast } from "react-icons/fa";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Hook/useProducts";
import "./ProductDetails.css";
import { MdArrowBack } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TitleSection } from "../TitleSection";
import ProductCard from "../ExploreProduct/ProductCard";

import { Link } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id == id);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product)
    return <div className="not-found">Product not found - ID: {id}</div>;

  const colors = ["black", "red", "blue", "green"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <>
      <div className="product-details">
        <div className="breadcrumb">
          <span>Account</span> / <span>Gaming</span> /
          <strong>{product.title}</strong>
        </div>

        <div className="product-layout">
          <div className="product-gallery" style={{ display: "flex" }}>
            <div className="thumbnail-images">
              <img src={product.image} alt="Thumbnail 1" />
              <img src={product.image} alt="Thumbnail 2" />
              <img src={product.image} alt="Thumbnail 3" />
              <img src={product.image} alt="Thumbnail 4" />
            </div>
            <div className="main-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          <div className="product-info">
            <h1>{product.title}</h1>

            <div className="rating-section">
              <div className="stars">
                {"★".repeat(5)}
                <span className="reviews">({product.reviews} Reviews)</span>
              </div>
              <span className="stock-status">In Stock</span>
            </div>

            <div className="price-section">
              <span className="current-price">${product.price}</span>
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice}</span>
              )}
            </div>

            <p className="description">{product.description}</p>

            <div className="color-selection">
              <h4>Colors:</h4>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`color-btn ${
                      selectedColor === color ? "active" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="size-selection">
              <h4>Size:</h4>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="purchase-section">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <Link to="/checkout">
                {" "}
                <button className="buy-now-btn">Buy Now</button>
              </Link>
              <button style={{ padding: "5px" }}>
                <FaHeart size="20px" />
              </button>
            </div>

            <div className="delivery-info">
              <div
                className="delivery-item"
                style={{ borderBottom: "1px solid #c8bdbd" }}
              >
                <strong>
                  <FaShippingFast size="25px" /> Free Delivery
                </strong>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
              <div className="delivery-item">
                <strong>
                  <MdArrowBack size="25px" />
                  Return Delivery
                </strong>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-section">
        <TitleSection
          subtitle="Related Item"
          mainTitle=""
          showNavigation={false}
        />
        <div className="products-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
