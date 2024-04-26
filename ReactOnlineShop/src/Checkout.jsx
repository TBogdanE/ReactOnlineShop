import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CreateCardElement from "./components/CartElement";
import "./styles/Checkout.css";

export default function Checkout() {
  const [list, updateList] = useState([]);
  const [productList, shoppingCart, updateCart] = useOutletContext();

  useEffect(() => {
    updateList(shoppingCart);
  }, [shoppingCart]);

  return (
    <>
      <div id="checkout-view">
        {list.length === 0 && <div id="empty-cart">Your cart is empty!</div>}
        {list.map((item) => {
          return (
            <CreateCardElement
              item={item}
              cart={shoppingCart}
              updateCart={updateCart}
            />
          );
        })}
      </div>
    </>
  );
}
