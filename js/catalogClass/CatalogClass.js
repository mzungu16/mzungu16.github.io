class CatalogClass {
    addCardBtnList = document.querySelectorAll(".food_btn");
    decrementBtnList = document.querySelectorAll(".food_decr_btn");
    incrementBtnList = document.querySelectorAll(".food_incr_btn");
    counterList = document.querySelectorAll(".food_counter");
    cardIndex;
    dishBuilder = new DishClassBuilder().build();
    dishesList = [];
    STATES = {
        DEFAULT: "default",
        ADD_CARD: "addCard",
        DECREASE_CARD: "decrementCard"
    };

    itemPictureList = document.querySelectorAll(".food_image")
    itemTitleList = document.querySelectorAll(".food_title_txt");
    itemDescList = document.querySelectorAll(".food_desc_txt");
    itemPriceList = document.querySelectorAll(".food_price_txt");
    order = new OrderClassBuilder().build();

    constructor(tg, categoryClass) {
        this.tg = tg;
        this.categoryClass = categoryClass;
    }

    catalogScreenSetup() {
        this.telegramSetup(this.STATES.DEFAULT);
        this.onBackButtonClick();
        this.onAddCardClick();
        this.onDecrementBtnClick();
        this.onIncrementBtnClick();
    }

    telegramSetup(state) {
        switch (state) {
            case "default":
                console.log("₽ DEFAULT");
                this.tg.expand();
                this.tg.BackButton.show();
                break;
            case "addCard":
                console.log("₽ ADD_CARD");
                this.tg.MainButton.text = "Просмотреть корзину";
                this.tg.MainButton.color = this.tg.themeParams.button_color;
                this.tg.MainButton.textColor = this.tg.themeParams.button_text_color;
                this.tg.MainButton.show();
                this.dishesList.length >= 1 ? this.tg.enableClosingConfirmation() : null;
                break;
            case "decrementCard":
                console.log("₽ DECREASE_CARD");
                this.tg.MainButton.hide();
                this.tg.disableClosingConfirmation();
                break;
        }
    }

    onBackButtonClick() {
        Telegram.WebApp.onEvent('backButtonClicked', () => {
            this.categoryClass.categoryScreenSetup();
        });
    }

    onAddCardClick() {
        this.addCardBtnList.forEach(addBtn => {
            addBtn.onclick = () => {
                this.cardIndex = [...this.addCardBtnList].indexOf(addBtn);
                this.telegramSetup(this.STATES.ADD_CARD);
                this.removeAddCardBtn(this.cardIndex);
                this.addDishItemToList(this.cardIndex);
            }
        });
    }

    onDecrementBtnClick() {
        this.decrementBtnList.forEach(decrementBtn => {
            decrementBtn.onclick = () => {
                this.cardIndex = [...this.decrementBtnList].indexOf(decrementBtn);
                this.decrementDishItem(this.cardIndex);
            }
        });
    }

    onIncrementBtnClick() {
        this.incrementBtnList.forEach(incrementBtn => {
            incrementBtn.onclick = () => {
                this.cardIndex = [...this.incrementBtnList].indexOf(incrementBtn);
                this.incrementDishItem(this.cardIndex);
            }
        });
    }

    removeAddCardBtn(index) {
        this.addCardBtnList[index].style.display = "none";
        this.decrementBtnList[index].style.display = "inline-block";
        this.incrementBtnList[index].style.display = "inline-block";
        this.counterList[index].style.display = "inline-block";
    }

    addAddCardBtn(index) {
        this.addCardBtnList[index].style.display = "inline-block";
        this.decrementBtnList[index].style.display = "none";
        this.incrementBtnList[index].style.display = "none";
        this.counterList[index].style.display = "none";
    }

    addDishItemToList(index) {
        this.dishBuilder = new DishClassBuilder()
            .setId(index)
            .setDishPicture(this.itemPictureList[index].getElementsByTagName('img')[0].src)
            .setTitle(this.itemTitleList[index].textContent)
            .setDescription(this.itemDescList[index].textContent)
            .setPrice(this.itemPriceList[index].textContent)
            .setCount(this.counterList[index].textContent)
            .build();
        this.dishesList.push(this.dishBuilder);
        console.log("₽ local list is - ", this.dishesList);
    }

    decrementDishItem(index) {
        this.dishesList.forEach((dish, indexElement) => {
            if (dish.dishId === index) {
                console.log(`₽ decr || dish id is - ${dish.dishId} || index - ${index} `);
                if (this.counterList[index].textContent <= "1") {
                    this.addAddCardBtn(index);
                    this.dishesList.splice(indexElement, 1);
                    this.dishesList.length === 0 ? this.telegramSetup(this.STATES.DECREASE_CARD) : null;
                } else {
                    let counter = parseInt(dish.dishCount);
                    dish.dishCount = counter - 1;
                    this.counterList[dish.dishId].textContent = dish.dishCount;
                }
            }
        })
    }

    incrementDishItem(index) {
        this.dishesList.forEach(dish => {
            if (dish.dishId === index) {
                console.log(`₽ incr || dish id is - ${dish.dishId} || index - ${index} `);
                let counter = parseInt(dish.dishCount);
                dish.dishCount = counter + 1;
                this.counterList[dish.dishId].textContent = dish.dishCount;
            }
        });
    }

    /*onAddBtnClickEvent() {

    onMainButtonClickEvent() {
      Telegram.WebApp.onEvent('mainButtonClicked', () => {
        this.order = new OrderClassBuilder()
          .setTg(this.tg)
          .setOrderDishes(this.dishesList)
          .build();
        this.screenMode.orderScreenMode();
        this.order.createElements();
      });
    }*/
}
