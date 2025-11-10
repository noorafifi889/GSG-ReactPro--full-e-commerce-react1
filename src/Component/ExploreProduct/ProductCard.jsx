import React from "react";
import "./ProductCard.css";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../Cart/contexts/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  if (!product) {
    return <div className="product-card">Product not available</div>;
  }
  const handleProduct = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    };
    addToCart(productToAdd);
  };

  const { title, price, originalPrice, discount, reviews, image } = product;
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />

        {discount > 0 && <span className="discount-badge">-{discount}%</span>}

        <div className="product-icons">
          <button className="icon-btn" aria-label="Add to wishlist">
            <FaHeart />
          </button>
          <button className="icon-btn" aria-label="Quick view">
            <FaEye />
          </button>
        </div>

        <button className="add-to-cart-btn" onClick={handleProduct}>
          Add To Cart
        </button>
      </div>
      <Link to={`/product/${product.id}`}>
        <div className="product-content">
          <h3 className="product-title">{title}</h3>

          <div className="price-section">
            <span className="current-price">${price}</span>
            {originalPrice > price && (
              <span className="original-price">${originalPrice}</span>
            )}
          </div>

          <div className="rating-section">
            <div className="stars">{"★".repeat(5)}</div>
            <span className="reviews">({reviews})</span>
          </div>
          <div className="color-product">
            <div className="red"></div>
            <div className="green"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
