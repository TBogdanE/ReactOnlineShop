import { Car } from "./Classes";

export default async function getItems() {
  try {
    const response = await fetch("https://freetestapi.com/api/v1/cars?limit=6");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return createList(data);
  } catch (error) {
    console.error("Error fetching from server:", error);
  }
}

function createList(data) {
  let list = [];
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
  return list;
}
