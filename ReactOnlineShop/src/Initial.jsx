import "./styles/Initial.css";
import CreateCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Initial() {
  const [productData, setProductData] = useState([]);
  const [productList, shoppingCart, updateCart] = useOutletContext();

  useEffect(() => {
    if (productList) {
      setProductData(productList);
    }
  }, [productList]);
  return (
    <>
      <p>{productData.make}</p>
      <div id="product-view">
        {productData.map((item) => {
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
