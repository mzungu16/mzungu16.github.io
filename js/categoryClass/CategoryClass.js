let isSoupActive, isDishActive, isLunchActive, isDrinksActive = false;

class CategoryClass {

    categoryBtnList = document.querySelectorAll(".category_btn");
    categorySection = document.getElementById("category_id");
    soupsSection = document.getElementById("soups_id");
    dishSection = document.getElementById("dishes_id");
    lunchSection = document.getElementById("lunch_id");
    drinksSection = document.getElementById("drinks_id");

    orderSection = document.getElementById("order_id");
    catalogClass = new CatalogClassBuilder()
        .setCategoryClass(this)
        .build();

    categoryScreenSetup() {
        this.telegramSetup();
        this.categorySection.style.display = "grid";
        this.soupsSection.style.display = "none";
        this.dishSection.style.display = "none";
        this.lunchSection.style.display = "none";
        this.drinksSection.style.display = "none";
        this.orderSection.style.display = "none";
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
                    this.soupsSection.style.display = "grid";
                    isSoupActive = true;
                    this.categoryBtnList[categoryBtnElement].textContent = "🡡";
                } else {
                    this.soupsSection.style.display = "none";
                    isSoupActive = false;
                    this.categoryBtnList[categoryBtnElement].textContent = "🡣";
                }
                break;
            case 1:
                if (!isDishActive) {
                    this.dishSection.style.display = "grid";
                    isDishActive = true;
                    this.categoryBtnList[categoryBtnElement].textContent = "🡡";
                } else {
                    this.dishSection.style.display = "none";
                    isDishActive = false;
                    this.categoryBtnList[categoryBtnElement].textContent = "🡣";
                }
                break;
            case 2:
                if (!isLunchActive) {
                    this.lunchSection.style.display = "grid";
                    isLunchActive = true;
                    this.categoryBtnList[categoryBtnElement].textContent = "🡡";
                } else {
                    this.lunchSection.style.display = "none";
                    isLunchActive = false;
                    this.categoryBtnList[categoryBtnElement].textContent = "🡣";
                }
                break;
            case 3:
                if (!isDrinksActive) {
                    this.drinksSection.style.display = "grid";
                    isDrinksActive = true;
                    this.categoryBtnList[categoryBtnElement].textContent = "🡡";
                } else {
                    this.drinksSection.style.display = "none";
                    isDrinksActive = false;
                    this.categoryBtnList[categoryBtnElement].textContent = "🡣";
                }
                break;
        }
    }

    telegramSetup() {
        console.log("₽ - telegram setup - ", true);
        if (tg.MainButton.isVisible) {
            tg.MainButton.text = "Просмотреть корзину";
        }
    }
}
