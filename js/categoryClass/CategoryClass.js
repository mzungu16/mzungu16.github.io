class CategoryClass {
    categoryContainer = document.getElementById("category_id");
    soupContainer = document.getElementById("food_id");
    dishesContainer = document.getElementById("dishes_id");
    lunchContainer = document.getElementById("lunch_id");
    drinksContainer = document.getElementById("drinks_id");
    orderContainer = document.getElementById("order_id");

    viewList = [this.categoryContainer, this.soupContainer, this.dishesContainer,
        this.lunchContainer, this.drinksContainer, this.orderContainer];

    categoryBtnList = document.querySelectorAll(".category_btn");

    constructor(telegram) {
        this.tg = telegram;
    }

    categoryScreenSetup() {
        this.telegramSetup();
        this.sectionsSetup(this.categoryContainer);
        this.onCategoryClick();
    }

    onCategoryClick() {
        this.categoryBtnList.forEach((categoryBtnElement) => {
            categoryBtnElement.addEventListener("click", (event) => {
                this.openClickedSection(event.target.textContent.toLowerCase());
            })
        });
    }

    openClickedSection(categoryTxt) {
        console.log(`₽ button ${categoryTxt} is clicked`);
        let catalogClass = new CatalogClassBuilder()
            .setTg(this.tg)
            .setCategoryClass(this)
            .build();

        catalogClass.catalogScreenSetup();

        switch (categoryTxt) {
            case "супы":
                this.sectionsSetup(this.soupContainer);
                break;
            case "вторые блюда":
                this.sectionsSetup(this.dishesContainer);
                break;
            case "закуски":
                this.sectionsSetup(this.lunchContainer);
                break;
            case "напитки":
                this.sectionsSetup(this.drinksContainer);
                break;
        }
    }

    telegramSetup() {
        console.log("₽ - telegram setup - ", true);
        this.tg.BackButton.hide();
        if (this.tg.MainButton.isVisible) {
            this.tg.MainButton.text = "Просмотреть корзину";
        }
    }

    sectionsSetup(htmlElement) {
        this.viewList.forEach((item) => {
            item.id === htmlElement.id ? item.style.display = "grid" : item.style.display = "none";
        });
    }
}
