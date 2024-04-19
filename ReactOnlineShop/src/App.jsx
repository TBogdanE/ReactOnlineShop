import { useEffect, useState } from "react";
import getItems from "./modules/fakeStoreApi";

import "./styles/App.css";

function App() {
  const [productList, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItems();
        setData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);
  return;
}

export default App;
