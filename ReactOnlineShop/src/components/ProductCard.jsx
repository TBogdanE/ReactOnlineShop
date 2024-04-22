import "../styles/ProductCard.css";
export default function CreateCard({
  id,
  img,
  name,
  model,
  engine,
  horsepower,
  transmision,
  price,
}) {
  console.log("data", id);
  return (
    <>
      <div className="card">
        <img id="image" className="text" src={img} />
        <div id="name" className="text">
          {name}
        </div>
        <div id="model" className="text">
          {model}
        </div>
        <div id="engine" className="text">
          {engine}
        </div>
        <div id="horsepower" className="text">
          {horsepower} hp
        </div>
        <div id="transmission" className="text">
          {transmision}
        </div>
        <button id="buy" className="text">
          {price}
        </button>
      </div>
    </>
  );
}
