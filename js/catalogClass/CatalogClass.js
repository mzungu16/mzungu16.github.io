class CatalogClass {
    addCardBtnList = document.querySelectorAll(".food_btn");
    decrementBtnList = document.querySelectorAll(".food_decr_btn");
    incrementBtnList = document.querySelectorAll(".food_incr_btn");
    counterList = document.querySelectorAll(".food_counter");
    cardIndex;
    dishBuilder = new DishClassBuilder().build();
    STATES = {
        DEFAULT: "default",
        ADD_CARD: "addCard",
        DECREASE_CARD: "decrementCard"
    };
    order = new OrderClassBuilder().build();
    itemPictureList = document.querySelectorAll(".food_image")
    itemTitleList = document.querySelectorAll(".food_title_txt");
    itemDescList = document.querySelectorAll(".food_desc_txt");
    itemPriceList = document.querySelectorAll(".food_price_txt");

    constructor(categoryClass) {
        this.categoryClass = categoryClass;
    }

    catalogScreenSetup() {
        console.log("₽ local list is - ", dishesList);
        this.catalogTgSetup(this.STATES.DEFAULT);
        this.onCatalogBackButtonClick();
        this.onAddCardClick();
        this.onDecrementBtnClick();
        this.onIncrementBtnClick();
        this.onMainBtnClick();
    }

    catalogTgSetup(state) {
        switch (state) {
            case "default":
                console.log("₽ DEFAULT");
                tg.expand();
                tg.BackButton.show();
                break;
            case "addCard":
                console.log("₽ ADD_CARD");
                tg.MainButton.text = "Просмотреть корзину";
                tg.MainButton.color = tg.themeParams.button_color;
                tg.MainButton.textColor = tg.themeParams.button_text_color;
                tg.MainButton.show();
                dishesList.length >= 1 ? tg.enableClosingConfirmation() : null;
                break;
            case "decrementCard":
                console.log("₽ DECREASE_CARD");
                tg.MainButton.hide();
                tg.disableClosingConfirmation();
                break;
        }
    }

    onCatalogBackButtonClick() {
        tg.BackButton.onClick(() => {
            console.log("P - Catalog > back button clicked");
            this.categoryClass.categoryScreenSetup();
            tg.BackButton.hide();
            tg.offClick();
        });
    }

    onAddCardClick() {
        this.addCardBtnList.forEach(addBtn => {
            addBtn.onclick = () => {
                this.cardIndex = [...this.addCardBtnList].indexOf(addBtn);
                this.catalogTgSetup(this.STATES.ADD_CARD);
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
        dishesList.push(this.dishBuilder);
        console.log("₽ local list is - ", dishesList);
    }

    decrementDishItem(index) {
        dishesList.forEach((dish, indexElement) => {
            if (dish.dishId === index) {
                console.log(`₽ decr || dish id is - ${dish.dishId} || index - ${index} `);
                if (this.counterList[index].textContent <= "1") {
                    this.addAddCardBtn(index);
                    dishesList.splice(indexElement, 1);
                    dishesList.length === 0 ? this.catalogTgSetup(this.STATES.DECREASE_CARD) : null;
                } else {
                    let counter = parseInt(dish.dishCount);
                    dish.dishCount = counter - 1;
                    this.counterList[dish.dishId].textContent = dish.dishCount;
                }
            }
        })
    }

    incrementDishItem(index) {
        dishesList.forEach(dish => {
            if (dish.dishId === index) {
                console.log(`₽ incr || dish id is - ${dish.dishId} || index - ${index} `);
                let counter = parseInt(dish.dishCount);
                dish.dishCount = counter + 1;
                this.counterList[dish.dishId].textContent = dish.dishCount;
            }
        });
    }

    onMainBtnClick() {
        tg.MainButton.onClick(() => {
            this.order = new OrderClassBuilder()
                .setCategoryClass(this.categoryClass)
                .setOrderDishList(dishesList)
                .build();
            this.order.orderScreenSetup();
            // tg.BackButton.hide();
        });
    }
}
