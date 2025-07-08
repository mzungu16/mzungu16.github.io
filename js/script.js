let tg = window.Telegram.WebApp;


tg.lockOrientation();

let btnSoup = document.getElementById("btnSoup");
let btnDishes = document.getElementById("btnDishes");
let btnLunch = document.getElementById("btnLunch");
let btnDrink = document.getElementById("btnDrink");

let categoryContainer = document.getElementById("category_id");
let soupContainer = document.getElementById("order_id");
orderContainer.style.display = 'none';

btnSoup.addEventListener("click", () => {
  tg.expand();
  categoryContainer.style.display = 'none';
  tg.BackButton.show();
  soupContainer.style.display = 'grid';
});

Telegram.WebApp.onEvent('backButtonClicked', () => {
  categoryContainer.style.display = 'grid';
  tg.BackButton.hide();
  soupContainer.style.display = 'none';
});
