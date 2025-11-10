import React from "react";
import { useState } from "react";
import { useCart } from "../Cart/contexts/useCart";
import "./Checkout.css";
import visa from "../../image/cfb0a6ee01b240273b40dab07f8246ef98aed88a.png";
import masterCard from "../../image/6eefb61d27c754abac218d25d8ea4360de61f8e8.png";
import bKash from "../../image/bacbff99a8fc8e50822cb2d2d168e5d0e8bf7ea6.png";
import card from "../../image/b28e31b9c88d0c9b038b82deeb0523d82cffe267.png";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [couponCode, setCouponCode] = useState("");

  // استخدام الـ Cart Context للحصول على بيانات السلة الحقيقية
  const { items, getCartTotal, getCartItemsCount } = useCart();

  const subtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    // Logic to apply coupon
    console.log("Applying coupon:", couponCode);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Logic to place order
    console.log("Placing order with items:", items);

    // بعد إتمام الطلب، يمكنك تفريغ السلة
    // clearCart();

    // يمكنك إضافة redirect إلى صفحة تأكيد الطلب
    alert("Order placed successfully!");
  };

  // إذا كانت السلة فارغة
  if (items.length === 0) {
    return (
      <div className="checkout">
        <div className="breadcrumb">
          <span>Account</span> / <span>My Account</span> / <span>Product</span>{" "}
          /<span>View Cart</span> / <strong>CheckOut</strong>
        </div>
        <div className="empty-cart-message">
          <h2>Your cart is empty</h2>
          <p>Please add some products to your cart before checkout.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Account</span> / <span>My Account</span> / <span>Product</span> /
        <span>View Cart</span> / <strong>CheckOut</strong>
      </div>

      <div className="checkout-layout">
        {/* Billing Details Form */}
        <div className="billing-details">
          <h2>Billing Details</h2>
          <form className="billing-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input type="text" id="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input type="text" id="lastName" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input type="text" id="company" />
            </div>

            <div className="form-group">
              <label htmlFor="address">Street Address*</label>
              <input type="text" id="address" required />
            </div>

            <div className="form-group">
              <label htmlFor="apartment">
                Apartment, floor, etc. (optional)
              </label>
              <input type="text" id="apartment" />
            </div>

            <div className="form-group">
              <label htmlFor="city">Town/City*</label>
              <input type="text" id="city" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input type="tel" id="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" required />
            </div>

            <div className="save-info">
              <input type="checkbox" id="saveInfo" />
              <label htmlFor="saveInfo">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <div className="order-header">
            <h3>Your Order ({getCartItemsCount()} items)</h3>
          </div>

          <div className="order-items">
            {items.map((item) => (
              <div key={item.id} className="order-item">
                <div className="item-info">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="item-image"
                  />
                  <div className="item-details">
                    <span className="item-name">{item.title}</span>
                    <span className="item-quantity">Qty: {item.quantity}</span>
                  </div>
                </div>
                <span className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
            </div>
            <div className="total-row final-total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="payment-methods">
            <h3>Payment Method</h3>

            <div className="payment-options">
              <label className="payment-option">
                <div className="payment-main">
                  <input
                    type="radio"
                    name="payment"
                    value="visa"
                    checked={paymentMethod === "visa"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  Bank VISA
                </div>
                <div className="way-pay">
                  <img src={visa} alt="Visa" />
                  <img src={masterCard} alt="MasterCard" />
                  <img src={bKash} alt="bKash" />
                  <img src={card} alt="Card" />
                </div>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="radio-custom"></span>
                Cash on delivery
              </label>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="coupon-section">
            <form onSubmit={handleApplyCoupon} className="coupon-form">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button type="submit">Apply Coupon</button>
            </form>
          </div>

          {/* Place Order Button */}
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
