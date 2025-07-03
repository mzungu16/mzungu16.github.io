let tg = window.Telegram.WebApp;

tg.expand();

tg.setHeaderColor("--tg-theme-header-bg-color");
tg.setBackgroundColor("--tg-theme-bg-color");
tg.lockOrientation();

let btnSoup = document.getElementById("btnSoup");
let btnDishes = document.getElementById("btnDishes");
let btnLunch = document.getElementById("btnLunch");
let btnDrink = document.getElementById("btnDrink");

btnSoup.addEventListener("click", function () {
    window.location.href = "soups.html";
});
