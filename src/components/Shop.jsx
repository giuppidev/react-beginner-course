import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { useFetch } from "../useFetch";

export default function Shop() {
  const [items, setItems] = useFetch("https://fakestoreapi.com/products");
  const [cartItems, setCartItems] = useState([]);

  function addToCart(id) {
    console.log("CLICK", id);
    const newItem = items.find((item) => {
      return item.id === id;
    });
    if (newItem) {
      setCartItems((prevCartItems) => {
        const alreadyExist = cartItems.some((item) => {
          return item.id === id;
        });
        if (!alreadyExist) {
          return [...prevCartItems, { ...newItem, quantity: 1 }];
        }
        return prevCartItems;
      });
    }
  }

  return (
    <div>
      <h1>SHOPPIIING</h1>
      <div className="grid grid-cols-[60fr_40fr] gap-8">
        <ProductList products={items} addToCart={addToCart} />
        <Cart products={cartItems} />
      </div>
    </div>
  );
}
