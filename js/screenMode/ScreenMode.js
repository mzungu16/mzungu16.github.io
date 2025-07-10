class ScreenMode {
  categoryContainer = document.getElementById("category_id");
  soupContainer = document.getElementById("food_id");
  dishesContainer = document.getElementById("dishes_id");
  lunchContainer = document.getElementById("lunch_id");
  drinksContainer = document.getElementById("drinks_id");

  constructor(telegram) {
    this.tg = telegram;
  }

  defaultScreenMode() {
    this.tg.lockOrientation();
    this.tg.MainButton.text = "Просмотреть корзину";
    this.tg.MainButton.color = this.tg.themeParams.button_color;
    this.tg.MainButton.textColor = this.tg.themeParams.button_text_color;
    this.tg.BackButton.hide();
    this.tg.MainButton.hide();

    this.categoryContainer.style.display = 'grid';
    this.soupContainer.style.display = 'none';
    this.dishesContainer.style.display = 'none';
    this.lunchContainer.style.display = 'none';
    this.drinksContainer.style.display = 'none';
  }

  soupsScreenMode() {
    this.tg.expand();
    this.tg.BackButton.show();

    this.categoryContainer.style.display = 'none';
    this.soupContainer.style.display = 'grid';
    this.dishesContainer.style.display = 'none';
    this.lunchContainer.style.display = 'none';
    this.drinksContainer.style.display = 'none';
  }

  dishesScreenMode() {
    this.tg.expand();
    this.tg.BackButton.show();

    this.categoryContainer.style.display = 'none';
    this.soupContainer.style.display = 'none';
    this.dishesContainer.style.display = 'grid';
    this.lunchContainer.style.display = 'none';
    this.drinksContainer.style.display = 'none';
  }

  lunchScreenMode() {
    this.tg.expand();
    this.tg.BackButton.show();

    this.categoryContainer.style.display = 'none';
    this.soupContainer.style.display = 'none';
    this.dishesContainer.style.display = 'none';
    this.lunchContainer.style.display = 'grid';
    this.drinksContainer.style.display = 'none';
  }

  drinksScreenMode() {
    this.tg.expand();
    this.tg.BackButton.show();

    this.categoryContainer.style.display = 'none';
    this.soupContainer.style.display = 'none';
    this.dishesContainer.style.display = 'none';
    this.lunchContainer.style.display = 'none';
    this.drinksContainer.style.display = 'grid';
  }
}
