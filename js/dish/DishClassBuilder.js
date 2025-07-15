class DishClassBuilder {
  setId(dishId) {
    this.dishId = dishId;
    return this;
  }

  setElementPos(dishPosition) {
    this.dishPosition = dishPosition;
    return this;
  }

  setTitle(dishTitle) {
    this.dishTitle = dishTitle;
    return this;
  }

  setPrice(dishPrice) {
    this.dishPrice = dishPrice;
    return this;
  }

  setCount(dishCount) {
    this.dishCount = dishCount;
    return this;
  }

  build() {
    return new DishClass(this.dishId, this.dishPosition, this.dishTitle, this.dishPrice, this.dishCount);
  }
}
