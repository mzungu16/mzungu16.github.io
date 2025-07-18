class OrderClass {
  orderTitleId = document.getElementById("order_title_id");

  constructor(tg, dishesList, orderComment) {
    this.tg = tg;
    this.dishesList = dishesList;
    this.orderComment = orderComment;
  }

  createElements() {
    this.dishesList.forEach((item) => {
      this.elementFunction(item);
    });
  }

  handleCommentSection() {

  }

  changeMainButton() {
    this.tg.MainButton.text = "Оплатить";
  }

  elementFunction(orderItem) {
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
