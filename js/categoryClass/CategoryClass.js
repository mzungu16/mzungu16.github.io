class CategoryClass {
    sectionList = document.querySelectorAll("section");

    categoryBtnList = document.querySelectorAll(".category_btn");

    categoryScreenSetup() {
        this.telegramSetup();
        this.sectionsSetup(this.sectionList[0]);
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
            .setTg(tg)
            .setCategoryClass(this)
            .build();

        catalogClass.catalogScreenSetup();

        switch (categoryTxt) {
            case "супы":
                this.sectionsSetup(this.sectionList[1]);
                break;
            case "вторые блюда":
                this.sectionsSetup(this.sectionList[2]);
                break;
            case "закуски":
                this.sectionsSetup(this.sectionList[3]);
                break;
            case "напитки":
                this.sectionsSetup(this.sectionList[4]);
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
        this.sectionList.forEach((item) => {
            item.id === htmlElement.id ? item.style.display = "grid" : item.style.display = "none";
        });
    }
}
