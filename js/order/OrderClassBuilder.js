class OrderClassBuilder {
  setTg(tg) {
    this.tg = tg;
    return this;
  }

  setOrderDishes(dishesList) {
    this.dishesList = dishesList;
    return this;
  }

  setOrderComment(orderComment) {
    this.orderComment = orderComment;
    return this;
  }

  build() {
    return new OrderClass(this.tg, this.dishesList, this.orderComment);
  }
}
