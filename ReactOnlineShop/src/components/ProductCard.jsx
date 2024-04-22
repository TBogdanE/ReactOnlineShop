import { Car } from "../modules/Classes";
import "../styles/ProductCard.css";
export default function CreateCard({ obj, cart, updateCart }) {
  return (
    <>
      <div className="card">
        <img id="image" className="text" src={obj.image} />
        <div id="name" className="text">
          {obj.name}
        </div>
        <div id="model" className="text">
          {obj.model}
        </div>
        <div id="engine" className="text">
          {obj.engine}
        </div>
        <div id="horsepower" className="text">
          {obj.horsepower} hp
        </div>
        <div id="transmission" className="text">
          {obj.transmision}
        </div>
        <button
          id="buy"
          className="text"
          onClick={() => obj.buttonPress(cart, updateCart)}
        >
          {obj.price}
        </button>
      </div>
    </>
  );
}
