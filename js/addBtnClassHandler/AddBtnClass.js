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
        this.handleAddBtnClick(this.index, foodBtnElement, this.decrFoodBtnList[this.index], this.foodContainerList[this.index],
          this.incrFoodBtnList[this.index], this.foodTitleList[this.index], this.foodPriceList[this.index], this.foodCountList[this.index]);
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

  handleAddBtnClick(index, addBtnElement, decrBtnElement, counterTxtElement, incrBtnElement, dishTitle, dishPrice, dishCount) {
    this.tg.MainButton.show();

    addBtnElement.style.display = 'none';
    decrBtnElement.style.display = 'inline-block';
    counterTxtElement.style.display = 'inline-block';
    incrBtnElement.style.display = 'inline-block';

    this.dishBuilder = new DishClassBuilder()
      .setId(index)
      .setElementPos(index)
      .setTitle(dishTitle.textContent)
      .setPrice(dishPrice.textContent)
      .setCount(dishCount.textContent)
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
          console.log(true);
          this.foodBtnList[item.dishPosition].style.display = 'inline-block';
          this.decrFoodBtnList[item.dishPosition].style.display = 'none';
          this.foodContainerList[item.dishPosition].style.display = 'none';
          this.incrFoodBtnList[item.dishPosition].style.display = 'none';
          console.log(item.dishTitle);
          this.dishesList.splice(indexElement, 1);
        } else {
          console.log(true);
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
        console.log(true);
        let counter = parseInt(item.dishCount);
        item.dishCount = counter + 1;
        this.foodContainerList[item.dishPosition].textContent = item.dishCount;
      }
    });
  }
}
