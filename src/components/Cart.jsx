import React from "react";
import "../cssModules/Cart.css";
function Cart() {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <p className="cart-item-quantity">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p className="total-price">Total: ${getTotalPrice().toFixed(2)}</p>
            <button className="checkout-button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
