class AddBtnClass {
  foodBtnList = document.querySelectorAll(".food_btn");
  decrFoodBtnList = document.querySelectorAll(".food_decr_btn");
  foodContainerList = document.querySelectorAll(".food_counter");
  incrFoodBtnList = document.querySelectorAll(".food_incr_btn");
  orderTitleId = document.getElementById("order_title_id");
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

  handleAddBtnClick() {
    this.tg.MainButton.text = "Просмотреть корзину";
    this.tg.MainButton.color = this.tg.themeParams.button_color;
    this.tg.MainButton.textColor = this.tg.themeParams.button_text_color;
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

  createElements(orderItem) {
    let orderFoodItem = document.createElement("div");
    orderFoodItem.classList.add("order_food_item");
    this.orderTitleId.append(orderFoodItem);
    console.log(orderFoodItem);
    let orderImageContainer = document.createElement("div");
    orderImageContainer.classList.add("order_image");
    orderFoodItem.append(orderImageContainer);
    let orderImageValue = document.createElement("img");
    orderImageValue.src = "https://i.postimg.cc/9FQ5BHXx/restoran-vietkafe-nametkina-vietcafe-na-nametkina-fb946-full-197793.jpg";
    orderImageContainer.append(orderImageValue);
    let orderFoodTxtContainer = document.createElement("div");
    orderFoodItem.append(orderFoodTxtContainer);
    let orderFoodTitle = document.createElement("p");
    orderFoodTitle.classList.add("order_food_title");
    orderFoodTitle.textContent = orderItem.dishTitle;
    orderFoodTxtContainer.append(orderFoodTitle);
    let orderFoodDesc = document.createElement("p");
    orderFoodDesc.classList.add("order_food_desc");
    orderFoodDesc.textContent = "Description";
    orderFoodTxtContainer.append(orderFoodDesc);
    let orderFoodPriceContainer = document.createElement("div");
    orderFoodPriceContainer.classList.add("order_price_container")
    orderFoodItem.append(orderFoodPriceContainer);
    let orderFoodPriceTxt = document.createElement("p");
    orderFoodPriceTxt.classList.add("order_price_txt");
    orderFoodPriceTxt.textContent = orderItem.dishPrice;
    orderFoodPriceContainer.append(orderFoodPriceTxt);
  }
}

Telegram.WebApp.onEvent('mainButtonClicked', () => {
  screenMode.orderScreenMode();
  this.order.dishesList.forEach((item) => {
    this.createElements(item);
  });
});
