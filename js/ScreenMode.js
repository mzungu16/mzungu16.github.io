class ScreenMode {
  static telegram;

  set setTgValue(tg) {
    ScreenMode.telegram = tg;
  }

  static defaultScreenMode(categoryContainer, soupContainer, dishesContainer, lunchContainer, drinksContainer) {
    this.telegram.MainButton.text = "Просмотреть корзину";
    this.telegram.MainButton.color = this.telegram.themeParams.button_color;
    this.telegram.MainButton.textColor = this.telegram.themeParams.button_text_color;
    categoryContainer.style.display = 'grid';
    soupContainer.style.display = 'none';
    dishesContainer.style.display = 'none';
    lunchContainer.style.display = 'none';
    drinksContainer.style.display = 'none';
  }
}
