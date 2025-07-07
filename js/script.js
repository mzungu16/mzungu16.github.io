let tg = window.Telegram.WebApp;

tg.expand();
tg.lockOrientation();

let btnSoup = document.getElementById("btnSoup");
let btnDishes = document.getElementById("btnDishes");
let btnLunch = document.getElementById("btnLunch");
let btnDrink = document.getElementById("btnDrink");

let categoryContainer = document.getElementById("category_id");
let orderContainer = document.getElementById("order_id");
orderContainer.style.display = 'none';

btnSoup.addEventListener("click", () => {
  console.log("Click");
  categoryContainer.style.display = 'none';
  tg.BackButton.show();
  orderContainer.style.display = 'grid';
});

Telegram.WebApp.onEvent('backButtonClicked', () => {
  categoryContainer.style.display = 'grid';
  tg.BackButton.hide();
  orderContainer.style.display = 'none';
});
