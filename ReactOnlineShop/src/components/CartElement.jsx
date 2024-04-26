import "../styles/CartElement.css";

export default function CreateCardElement({ item, cart, updateCart }) {
  // console.log("itemid", item.uniqueID);
  return (
    <div className="cart-element">
      <div className="left-sct">
        <div className="image-box">
          <img src={item.image} alt={item.name} className="image" />
        </div>
        <div className="name">{item.name}</div>
        <div className="model">{item.model}</div>
      </div>
      <div className="middle-sct">
        <div className="price">Price: {item.price}$</div>
      </div>

      <div className="right-sct">
        <button
          className="remove-cart"
          onClick={() => item.deleteProduct(item.uniqueID, cart, updateCart)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
