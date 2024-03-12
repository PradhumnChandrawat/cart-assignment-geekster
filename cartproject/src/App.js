import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung S24",
      quantity: 1,
      price: 80000,
    },
    {
      id: 2,
      name: "Iphone 15",
      quantity: 1,
      price: 70000,
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      quantity: 1,
      price: 100000,
    },
    {
      id: 4,
      name: "Samsung S24 Ultra",
      quantity: 1,
      price: 130000,
    },
    {
      id: 5,
      name: "Nothing Phone 2",
      quantity: 1,
      price: 40000,
    },
  ]);

  const clearCart = () => {
    setProducts([]);
  };

  return (
    <div className="App">
      <Navbar />
      <Cart
        products={products}
        setProducts={setProducts}
        clearCart={clearCart}
      />
    </div>
  );
}

export default App;
