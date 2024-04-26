class Car {
  constructor(id, image, name, model, engine, horsepower, transmission, price) {
    this.id = id;
    this.uniqueID = generateRandomNumber();
    this.image = image;
    this.name = name;
    this.model = model;
    this.engine = engine;
    this.horsepower = horsepower;
    this.transmission = transmission;
    this.price = price;
  }

  buttonPress(cart, updateCart) {
    updateCart([...cart, this]);
    console.log(cart);
  }

  deleteProduct(id, cart, updateCart) {
    const arr = cart.filter((item) => item.uniqueID !== id);
    updateCart(arr);
  }
}

function generateRandomNumber() {
  let randomNumber = "";
  const characters = "0123456789";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomNumber += characters[randomIndex];
  }
  return randomNumber;
}

export { Car };
