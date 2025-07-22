class CategoryBtnClass {
  categoryBtnList = document.querySelectorAll(".category_btn");

  constructor(telegram, screenMode, buyBtn) {
    this.tg = telegram;
    this.screenMode = screenMode;
    this.buyBtn = buyBtn;
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
        this.screenMode.soupsScreenMode(this.buyBtn);
        break;
      case "вторые блюда":
        this.screenMode.dishesScreenMode(this.buyBtn);
        break;
      case "закуски":
        this.screenMode.lunchScreenMode(this.buyBtn);
        break;
      case "напитки":
        this.screenMode.drinksScreenMode(this.buyBtn);
        break;
    }
  }
}
