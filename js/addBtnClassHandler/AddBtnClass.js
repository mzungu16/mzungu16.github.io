class AddBtnClass {
  foodBtnList = document.querySelectorAll(".food_btn");
  decrFoodBtnList = document.querySelectorAll(".food_decr_btn");
  foodContainerList = document.querySelectorAll(".food_counter");
  incrFoodBtnList = document.querySelectorAll(".food_incr_btn");

  foodTitleList = document.querySelectorAll(".food_title_txt");
  foodPriceList = document.querySelectorAll(".food_price_txt");
  foodCountList = document.querySelectorAll(".food_counter");
  order = new OrderClassBuilder().build();
  dishBuilder = new DishClassBuilder().build();
  index;
  dishesList = [];

  constructor(telegram) {
    this.tg = telegram;
  }

  onAddBtnClickEvent() {
    this.foodBtnList.forEach((foodBtnElement) => {
      foodBtnElement.addEventListener("click", (event) => {
        this.index = [...this.foodBtnList].indexOf(foodBtnElement);
        this.handleAddBtnClick();
      })
    });
  }

  onDecrBtnClickEvent() {
    this.decrFoodBtnList.forEach((decrElement) => {
      decrElement.addEventListener("click", (event) => {
        this.index = [...this.decrFoodBtnList].indexOf(decrElement);
        this.handleBtnDecrSubmit();
      })
    });
  }

  onIncrBtnClickEvent() {
    this.incrFoodBtnList.forEach((incrElement) => {
      incrElement.addEventListener("click", (event) => {
        this.index = [...this.incrFoodBtnList].indexOf(incrElement);
        this.handleBtnIncrSubmit()
      })
    });
  }

  handleAddBtnClick(dishTitle, dishPrice, dishCount) {
    this.tg.MainButton.show();

    this.foodBtnList[this.index].style.display = 'none';
    this.decrFoodBtnList[this.index].style.display = 'inline-block';
    this.foodContainerList[this.index].style.display = 'inline-block';
    this.incrFoodBtnList[this.index].style.display = 'inline-block';

    this.dishBuilder = new DishClassBuilder()
      .setId(this.index)
      .setElementPos(this.index)
      .setTitle(this.foodTitleList[this.index].textContent)
      .setPrice(this.foodPriceList[this.index].textContent)
      .setCount(this.foodCountList[this.index].textContent)
      .build();

    this.dishesList.push(this.dishBuilder);

    this.order = new OrderClassBuilder()
      .setOrderDishes(this.dishesList)
      .build();

    this.order.dishesList.forEach((item) => {
      console.log(`List dishes in order - ${item.dishTitle} || ${item.dishCount}`);
    });
  }

  handleBtnDecrSubmit() {
    this.dishesList.forEach((item, indexElement) => {
      if (this.index === item.dishPosition) {
        if (this.foodContainerList[item.dishPosition].textContent <= "1") {
          this.showAddBtn(item);
          this.dishesList.splice(indexElement, 1);
        } else {
          let counter = parseInt(item.dishCount);
          item.dishCount = counter - 1;
          this.foodContainerList[item.dishPosition].textContent = item.dishCount;
        }
      }
    });
  }

  handleBtnIncrSubmit() {
    this.dishesList.forEach((item) => {
      if (this.index === item.dishPosition) {
        let counter = parseInt(item.dishCount);
        item.dishCount = counter + 1;
        this.foodContainerList[item.dishPosition].textContent = item.dishCount;
      }
    });
  }

  showAddBtn(item) {
    this.foodBtnList[item.dishPosition].style.display = 'inline-block';
    this.decrFoodBtnList[item.dishPosition].style.display = 'none';
    this.foodContainerList[item.dishPosition].style.display = 'none';
    this.incrFoodBtnList[item.dishPosition].style.display = 'none';
  }
}
