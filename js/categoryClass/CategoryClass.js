console.log("₽ Category launch time");
let isSoupActive, isDishActive, isLunchActive, isDrinksActive = false;
window.categorySection = document.getElementById("category_id");
window.soupsSection = document.getElementById("soups_id");
window.dishSection = document.getElementById("dishes_id");
window.lunchSection = document.getElementById("lunch_id");
window.drinksSection = document.getElementById("drinks_id");
window.orderSection = document.getElementById("order_id");
window.dishesList = [];

class CategoryClass {
    categoryBtnList = document.querySelectorAll(".category_btn");
    catalogClass = new CatalogClassBuilder()
        .setCategoryClass(this)
        .build();

    categoryScreenSetup() {
        console.log("₽ Category screen setup");
        this.telegramSetup();
        categorySection.style.display = "grid";
        switch (true) {
            case isSoupActive:
                console.log("Soup active");
                soupsSection.style.display = "grid";
                dishSection.style.display = "none";
                lunchSection.style.display = "none";
                drinksSection.style.display = "none";
                orderSection.style.display = "none";
                break;
            case isDishActive:
                soupsSection.style.display = "none";
                dishSection.style.display = "grid";
                lunchSection.style.display = "none";
                drinksSection.style.display = "none";
                orderSection.style.display = "none";
                break;
            case isLunchActive:
                soupsSection.style.display = "none";
                dishSection.style.display = "none";
                lunchSection.style.display = "grid";
                drinksSection.style.display = "none";
                orderSection.style.display = "none";
                break;
            case isDrinksActive:
                soupsSection.style.display = "none";
                dishSection.style.display = "none";
                lunchSection.style.display = "none";
                drinksSection.style.display = "grid";
                orderSection.style.display = "none";
                break;
            default:
                soupsSection.style.display = "none";
                dishSection.style.display = "none";
                lunchSection.style.display = "none";
                drinksSection.style.display = "none";
                orderSection.style.display = "none";
                break;
        }
        this.onCategoryClick();
    }

    onCategoryClick() {
        this.categoryBtnList.forEach((categoryBtnElement) => {
            categoryBtnElement.onclick = () => {
                console.log(`₽ button ${categoryBtnElement.textContent.toLowerCase()} is clicked`);
                this.openClickedSection([...this.categoryBtnList].indexOf(categoryBtnElement));
            }
        });
    }

    openClickedSection(categoryBtnElement) {
        switch (categoryBtnElement) {
            case 0:
                if (!isSoupActive) {
                    soupsSection.style.display = "grid";
                    isSoupActive = true;
                    this.categoryBtnList[categoryBtnElement].textContent = '\u{2191}';
                } else {
                    soupsSection.style.display = "none";
                    isSoupActive = false;
                    this.categoryBtnList[categoryBtnElement].textContent = '\u{2193}';
                }
                break;
            case 1:
                if (!isDishActive) {
                    dishSection.style.display = "grid";
                    isDishActive = true;
                    this.categoryBtnList[categoryBtnElement].textContent = '\u{2191}';
                } else {
                    dishSection.style.display = "none";
                    isDishActive = false;
                    this.categoryBtnList[categoryBtnElement].textContent = '\u{2193}';
                }
                break;
            case 2:
                if (!isLunchActive) {
                    lunchSection.style.display = "grid";
                    isLunchActive = true;
                    this.categoryBtnList[categoryBtnElement].textContent = '\u{2191}';
                } else {
                    lunchSection.style.display = "none";
                    isLunchActive = false;
                    this.categoryBtnList[categoryBtnElement].textContent = '\u{2193}';
                }
                break;
            case 3:
                if (!isDrinksActive) {
                    drinksSection.style.display = "grid";
                    isDrinksActive = true;
                    this.categoryBtnList[categoryBtnElement].textContent = '\u{2191}';
                } else {
                    drinksSection.style.display = "none";
                    isDrinksActive = false;
                    this.categoryBtnList[categoryBtnElement].textContent = '\u{2193}';
                }
                break;
        }
        this.catalogClass.catalogScreenSetup();
    }

    telegramSetup() {
        console.log("₽ - telegram setup - ", true);
        if (tg.MainButton.isVisible) {
            tg.MainButton.text = "Просмотреть корзину";
        }
    }
}
