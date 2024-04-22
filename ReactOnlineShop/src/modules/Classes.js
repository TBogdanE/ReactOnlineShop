class Car {
  constructor(id, image, name, model, engine, horsepower, transmission, price) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.model = model;
    this.engine = engine;
    this.horsepower = horsepower;
    this.transmission = transmission;
    this.price = price;
  }

  buttonPress(cart, updateCard) {
    updateCard([...cart, this]);
  }
}

export { Car };
