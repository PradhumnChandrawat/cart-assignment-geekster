import React from "react";
import "./Cart.css";
import Card from "./Card";

function Cart({ products, setProducts, clearCart }) {
  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <>
      <div className="cart-container">
        {products.map((product) => (
          <Card key={product.id} product={product} setProducts={setProducts} />
        ))}
      </div>
      <div className="cart-total">Total: {total}</div>
      <div className="cart-clear">
        <button className="cartclear" onClick={clearCart}>
          Cart Clear
        </button>
      </div>
    </>
  );
}

export default Cart;
