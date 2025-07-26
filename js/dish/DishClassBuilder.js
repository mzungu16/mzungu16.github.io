class DishClassBuilder {
  setId(dishId) {
    this.dishId = dishId;
    return this;
  }

  setDishPicture(dishPicture) {
    this.dishPicture = dishPicture
    return this;
  }

  setTitle(dishTitle) {
    this.dishTitle = dishTitle;
    return this;
  }

  setDescription(dishDesc) {
    this.dishDesc = dishDesc
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
    return new DishClass(this.dishId, this.dishPicture, this.dishTitle, this.dishDesc, this.dishPrice, this.dishCount);
  }
}
