class OrderClass {
  orderTitleId = document.getElementById("order_title_id");
  orderResultId = document.getElementById("order_result_id");
  orderItemList = [];
  orderResultSumList = [];


  constructor(tg, dishesList, orderComment) {
    this.tg = tg;
    this.dishesList = dishesList;
    this.orderComment = orderComment;
  }

  createElements() {
    this.dishesList.forEach((item) => {
      this.elementFunction(item);
    });

    let sum = 0;
    this.orderResultSumList.forEach((item) => {
      sum += item;
    });
    this.orderResultId.textContent = `${sum} ₽`;
  }

  handleCommentSection() {

  }

  onBackButtonClickEvent2() {
    Telegram.WebApp.onEvent('backButtonClicked', () => {
      this.orderItemList.forEach((item) => {
        item.remove();
      });
      this.orderItemList.slice(0, this.orderItemList.length);
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

    orderFoodTxtContainer.style.width = "200px";
    orderImageValue.src = orderItem.dishPicture;
    orderFoodTitle.textContent = `${orderItem.dishTitle} x${orderItem.dishCount}`;
    orderFoodDesc.textContent = orderItem.dishDesc;
    let priceSplitStr = orderItem.dishPrice.split(" ");
    let foodItemResult = parseInt(orderItem.dishCount) * parseInt(priceSplitStr[2]);
    orderFoodPriceTxt.textContent = `${foodItemResult} ₽`;
    this.orderResultSumList.push(foodItemResult);

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
