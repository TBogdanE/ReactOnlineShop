import "./styles/Initial.css";
import CreateCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Initial() {
  const [productData, setProductData] = useState([]);
  const [productList] = useOutletContext();

  useEffect(() => {
    console.log("data1", productList);
    if (productList) {
      console.log("data2", productList);
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
              id={item.id}
              img={item.image}
              name={item.make}
              model={item.model}
              engine={item.engine}
              horsepower={item.horsepower}
              transmission={item.transmission}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
}
