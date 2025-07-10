class CategoryBtnClass {
  categoryBtnList = document.querySelectorAll(".category_btn");

  constructor(telegram, screenMode) {
    this.tg = telegram;
    this.screenMode = screenMode;
  }

  onCategoryBtnClickEvent() {
    this.categoryBtnList.forEach((categoryBtnElement) => {
      categoryBtnElement.addEventListener("click", (event) => {
        this.openDivSection(event.target.textContent.toLowerCase());
      })
    });
  }

  openDivSection(category_txt) {
    switch (category_txt) {
      case "супы":
        this.screenMode.soupsScreenMode();
        break;
      case "вторые блюда":
        this.screenMode.dishesScreenMode();
        break;
      case "закуски":
        this.screenMode.lunchScreenMode();
        break;
      case "напитки":
        this.screenMode.drinksScreenMode();
        break;
    }
  }
}
