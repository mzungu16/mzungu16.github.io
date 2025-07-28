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
                this.catalogClass.catalogScreenSetup();
                break;
            case "вторые блюда":
                this.sectionsSetup(sectionList[2]);
                this.catalogClass.catalogScreenSetup();
                break;
            case "закуски":
                this.sectionsSetup(sectionList[3]);
                this.catalogClass.catalogScreenSetup();
                break;
            case "напитки":
                this.sectionsSetup(sectionList[4]);
                this.catalogClass.catalogScreenSetup();
                break;
        }
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
