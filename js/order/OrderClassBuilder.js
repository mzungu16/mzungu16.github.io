class OrderClassBuilder {

    setCategoryClass(categoryClass) {
        this.categoryClass = categoryClass;
        return this;
    }

    setOrderDishList(orderDishList) {
        this.orderDishList = orderDishList;
        return this;
    }

    build() {
        return new OrderClass(this.categoryClass, this.orderDishList);
    }
}
