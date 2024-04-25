import "./styles/Initial.css";
import CreateCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Initial() {
  const [productList, shoppingCart, updateCart] = useOutletContext();

  useEffect(() => {
    if (productList) {
      updateCart(productList);
    }
  }, [productList]);
  return (
    <>
      <div id="product-view">
        {productList.map((item) => {
          return (
            <CreateCard
              obj={item}
              cart={shoppingCart}
              updateCart={updateCart}
            />
          );
        })}
      </div>
    </>
  );
}
