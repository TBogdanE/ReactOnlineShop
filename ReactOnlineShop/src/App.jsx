import { useEffect, useState } from "react";
import getItems from "./modules/fakeStoreApi";
import "./styles/App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Car } from "./modules/Classes";

function App() {
  const [productList, setData] = useState(null);
  const [shoppingCart, updateCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = [];
        const data = await getItems();
        data.forEach((element) => {
          list.push(
            new Car(
              element.id,
              element.image,
              element.make,
              element.model,
              element.engine,
              element.horsepower,
              element.transmission,
              element.price
            )
          );
        });
        setData(list);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("cart", shoppingCart);
  }, [shoppingCart]);

  return (
    <>
      <Header />
      <Outlet context={[productList, shoppingCart, updateCart]} />
    </>
  );
}

export default App;
