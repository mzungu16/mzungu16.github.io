class OrderClass {
    orderContainerId = document.getElementById("order_id")
    orderResultContainerId = document.getElementById("order_result_container_id");
    orderResultId = document.getElementById("order_result_id");
    orderCommentId = document.getElementById("order_comment_id");
    itemList = [];
    priceList = [];


    constructor(categoryClass, orderDishList) {
        this.categoryClass = categoryClass;
        this.orderDishList = orderDishList;
    }

    orderScreenSetup() {
        this.categoryClass.sectionsSetup(sectionList[5]);
        this.orderTgSetup()
        this.createElements();
        this.onOrderBackButtonClick();
    }

    orderTgSetup() {
        tg.BackButton.show();
        tg.MainButton.text = "Оплатить";
    }

    onOrderBackButtonClick() {
        tg.BackButton.onClick(() => {
            console.log("P - Order > backButton");
            this.itemList.forEach((item) => {
                item.remove();
            });
            this.itemList.splice(0, this.itemList.length);
            this.orderDishList.splice(0, this.orderDishList.length);
            console.log(`P order list length - ${this.orderDishList.length}`);
            this.categoryClass.categoryScreenSetup();
        });
    }

    createElements() {
        this.orderDishList.forEach((item) => {
            this.elementFunction(item);
        });

        let sum = 0;
        this.priceList.forEach((item) => {
            sum += item;
        });
        this.orderResultId.textContent = `₽ ${sum}`;
    }

    elementFunction(orderItem) {
        let orderFoodItem = document.createElement("div");
        this.itemList.push(orderFoodItem);

        let orderImageContainer = document.createElement("div");
        let orderImageValue = document.createElement("img");
        let orderFoodTxtContainer = document.createElement("div");
        let orderFoodTitle = document.createElement("p");
        let orderFoodDesc = document.createElement("p");
        let orderFoodPriceContainer = document.createElement("div");
        let orderFoodPriceTxt = document.createElement("p");

        orderFoodItem.classList.add("order_food_item");
        orderImageContainer.classList.add("order_image");
        orderFoodTxtContainer.classList.add("order_food_txt_container");
        orderFoodTitle.classList.add("order_food_title");
        orderFoodDesc.classList.add("order_food_desc");
        orderFoodPriceContainer.classList.add("order_price_container")
        orderFoodPriceTxt.classList.add("order_price_txt");

        orderImageValue.src = orderItem.dishPicture;
        orderFoodTitle.textContent = `${orderItem.dishTitle} x${orderItem.dishCount}`;
        orderFoodDesc.textContent = orderItem.dishDesc;
        let priceSplitStr = orderItem.dishPrice.split(" ");
        let foodItemResult = parseInt(orderItem.dishCount) * parseInt(priceSplitStr[1]);
        orderFoodPriceTxt.textContent = `₽ ${foodItemResult}`;
        this.priceList.push(foodItemResult);
        this.orderComment = this.orderCommentId.textContent;

        this.orderContainerId.insertBefore(orderFoodItem, this.orderResultContainerId);
        orderFoodItem.append(orderImageContainer);
        orderImageContainer.append(orderImageValue);
        orderFoodItem.append(orderFoodTxtContainer);
        orderFoodTxtContainer.append(orderFoodTitle);
        orderFoodTxtContainer.append(orderFoodDesc);
        orderFoodItem.append(orderFoodPriceContainer);
        orderFoodPriceContainer.append(orderFoodPriceTxt);
    }
}
