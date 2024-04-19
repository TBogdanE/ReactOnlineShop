export default async function getItems() {
  try {
    const response = await fetch("https://freetestapi.com/api/v1/cars");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching from server:", error);
  }
}
