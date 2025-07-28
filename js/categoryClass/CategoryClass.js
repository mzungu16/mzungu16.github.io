window.sectionList = document.querySelectorAll("section");

class CategoryClass {

    categoryBtnList = document.querySelectorAll(".category_btn");
    catalogClass = new CatalogClassBuilder()
        .setCategoryClass(this)
        .build();

    categoryScreenSetup() {
        this.telegramSetup();
        this.sectionsSetup(sectionList[0]);
        this.onCategoryClick();
    }

    onCategoryClick() {
        console.log("P -> onCategoryClick");
        this.categoryBtnList.forEach((categoryBtnElement) => {
            categoryBtnElement.addEventListener("click", (event) => {
                this.openClickedSection(event.target.textContent.toLowerCase());
            })
        });
    }

    openClickedSection(categoryTxt) {
        console.log(`₽ button ${categoryTxt} is clicked`);
        switch (categoryTxt) {
            case "супы":
                this.sectionsSetup(sectionList[1]);
                break;
            case "вторые блюда":
                this.sectionsSetup(sectionList[2]);
                break;
            case "закуски":
                this.sectionsSetup(sectionList[3]);
                break;
            case "напитки":
                this.sectionsSetup(sectionList[4]);
                break;
        }
        this.catalogClass.catalogScreenSetup();
    }

    telegramSetup() {
        console.log("₽ - telegram setup - ", true);
        tg.BackButton.hide();
        if (tg.MainButton.isVisible) {
            tg.MainButton.text = "Просмотреть корзину";
        }
    }

    sectionsSetup(htmlElement) {
        sectionList.forEach((item) => {
            item.id === htmlElement.id ? item.style.display = "grid" : item.style.display = "none";
        });
    }
}
