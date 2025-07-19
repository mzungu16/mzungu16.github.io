class OrderClass {
  orderTitleId = document.getElementById("order_title_id");
  orderItemList = [];


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

  onBackButtonClickEvent() {
    Telegram.WebApp.onEvent('backButtonClicked', () => {
      this.orderItemList.forEach((item) => {
        item.remove();
      });
      this.orderItemList.slice(0, this.orderItemList.length);
      this.tg.MainButton.text = "Просмотреть корзину";
    });
  }

  elementFunction(orderItem) {
    let orderFoodItem = document.createElement("div");
    this.orderItemList.push(orderFoodItem);

    let orderImageContainer = document.createElement("div");
    let orderImageValue = document.createElement("img");
    let orderFoodTxtContainer = document.createElement("div");
    let orderFoodTitle = document.createElement("p");
    let orderFoodDesc = document.createElement("p");
    let orderFoodPriceContainer = document.createElement("div");
    let orderFoodPriceTxt = document.createElement("p");

    orderFoodItem.classList.add("order_food_item");
    orderImageContainer.classList.add("order_image");
    orderFoodTitle.classList.add("order_food_title");
    orderFoodDesc.classList.add("order_food_desc");
    orderFoodPriceContainer.classList.add("order_price_container")
    orderFoodPriceTxt.classList.add("order_price_txt");

    orderImageValue.src = "https://i.postimg.cc/9FQ5BHXx/restoran-vietkafe-nametkina-vietcafe-na-nametkina-fb946-full-197793.jpg";
    orderFoodTitle.textContent = orderItem.dishTitle;
    orderFoodDesc.textContent = "Description";
    orderFoodPriceTxt.textContent = orderItem.dishPrice;

    this.orderTitleId.append(orderFoodItem);
    orderFoodItem.append(orderImageContainer);
    orderImageContainer.append(orderImageValue);
    orderFoodItem.append(orderFoodTxtContainer);
    orderFoodTxtContainer.append(orderFoodTitle);
    orderFoodTxtContainer.append(orderFoodDesc);
    orderFoodItem.append(orderFoodPriceContainer);
    orderFoodPriceContainer.append(orderFoodPriceTxt);
  }
}
