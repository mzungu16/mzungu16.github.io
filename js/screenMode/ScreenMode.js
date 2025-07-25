class ScreenMode {
  categoryContainer = document.getElementById("category_id");
  soupContainer = document.getElementById("food_id");
  dishesContainer = document.getElementById("dishes_id");
  lunchContainer = document.getElementById("lunch_id");
  drinksContainer = document.getElementById("drinks_id");
  orderContainer = document.getElementById("order_id");

  viewList = [this.categoryContainer, this.soupContainer, this.dishesContainer,
    this.lunchContainer, this.drinksContainer, this.orderContainer];

  constructor(telegram) {
    this.tg = telegram;
  }

  defaultScreenMode() {
    this.telegramSetup();
    this.sectionsSetup(this.categoryContainer);
  }

  /*
   soupsScreenMode() {
      this.telegramEditing();

      this.categoryContainer.style.display = 'none';
      this.soupContainer.style.display = 'grid';
      this.dishesContainer.style.display = 'none';
      this.lunchContainer.style.display = 'none';
      this.drinksContainer.style.display = 'none';
      this.orderContainer.style.display = 'none';
    }

    dishesScreenMode() {
      this.telegramEditing();

      this.categoryContainer.style.display = 'none';
      this.soupContainer.style.display = 'none';
      this.dishesContainer.style.display = 'grid';
      this.lunchContainer.style.display = 'none';
      this.drinksContainer.style.display = 'none';
      this.orderContainer.style.display = 'none';
    }

    lunchScreenMode() {
      this.telegramEditing();

      this.categoryContainer.style.display = 'none';
      this.soupContainer.style.display = 'none';
      this.dishesContainer.style.display = 'none';
      this.lunchContainer.style.display = 'grid';
      this.drinksContainer.style.display = 'none';
      this.orderContainer.style.display = 'none';
    }

    drinksScreenMode() {
      this.telegramEditing();

      this.categoryContainer.style.display = 'none';
      this.soupContainer.style.display = 'none';
      this.dishesContainer.style.display = 'none';
      this.lunchContainer.style.display = 'none';
      this.drinksContainer.style.display = 'grid';
      this.orderContainer.style.display = 'none';
    }

    orderScreenMode() {
      this.telegramEditing();
      this.tg.MainButton.text = "Оплатить";

      this.categoryContainer.style.display = 'none';
      this.soupContainer.style.display = 'none';
      this.dishesContainer.style.display = 'none';
      this.lunchContainer.style.display = 'none';
      this.drinksContainer.style.display = 'none';
      this.orderContainer.style.display = 'grid';
    }

    telegramEditing() {
      this.tg.expand();
      this.tg.BackButton.show();
    }*/

  telegramSetup() {
    console.log("₽ - telegram setup - ", true);
    this.tg.BackButton.hide();
    if (this.tg.MainButton.isVisible) {
      this.tg.MainButton.text = "Просмотреть корзину";
    }
  }

  sectionsSetup(htmlElement) {
    this.viewList.forEach((item) => {
      console.log(`₽ - section setup || item.id - ${item.id} || htmlElement.id - ${htmlElement.id}`);
      if (item.id === htmlElement.id) {
        console.log("₽ - check of item is valid - ", true);
        htmlElement.style.display = 'grid';
        console.log(`₽ ${htmlElement.style.display}`);
      } else {
        htmlElement.style.display = 'none';
        console.log(`₽ ${htmlElement.style.display}`);
      }
    });
  }
}
