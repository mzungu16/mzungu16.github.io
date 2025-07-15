class OrderClassBuilder {
  setOrderDishes(dishesList) {
    this.dishesList = dishesList;
    return this;
  }

  setOrderComment(orderComment) {
    this.orderComment = orderComment;
    return this;
  }

  build() {
    return new OrderClass(this.dishesList, this.orderComment);
  }
}
