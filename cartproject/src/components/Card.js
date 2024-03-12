import React from "react";
import "./Card.css";
import { FaMobileAlt } from "react-icons/fa";

function Card({ product, setProducts }) {
  const removeItem = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };
  const decreaseQuantity = () => {
    setProducts((currentProduct) =>
      currentProduct.map((item) => {
        if (item.id === product.id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const increaseQuantity = () => {
    setProducts((currentProduct) =>
      currentProduct.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  return (
    <div className="cart-item">
      <div className="rightcart-div">
        <div className="img-div">
          <FaMobileAlt className="mob-img" />
        </div>
        <div className="details-div">
          <h4>Name: {product.name}</h4>
          <span>Price: {product.price}</span>
          <button className="remove-btn" onClick={() => removeItem(product.id)}>
            Remove
          </button>
        </div>
      </div>
      <div className="leftcart-div">
        <button className="increase-btn" onClick={increaseQuantity}>
          +
        </button>
        <span>{product.quantity}</span>
        <button className="decrease-btn" onClick={decreaseQuantity}>
          -
        </button>
      </div>
    </div>
  );
}

export default Card;
