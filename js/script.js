let tg = window.Telegram.WebApp;
let categoryContainer = document.getElementById("category_id");
let soupContainer = document.getElementById("food_id");
let dishesContainer = document.getElementById("dishes_id");
let buttonList = document.querySelectorAll(".category_btn");

defaultScreenSettings();
tg.lockOrientation();

buttonList.forEach(function (i) {
  i.addEventListener("click", (e) => {
    console.log(`id: ${e.target.textContent}`);
    openDivSection(e.target.textContent.toLowerCase());
  })
});

function defaultScreenSettings() {
  categoryContainer.style.display = 'grid';
  soupContainer.style.display = 'none';
  dishesContainer.style.display = 'none';
}

function soupsScreenSettings() {
  tg.expand();
  tg.BackButton.show();
  categoryContainer.style.display = 'none';
  soupContainer.style.display = 'grid';
  dishesContainer.style.display = 'none';
}

function dishesScreenSettings() {
  tg.expand();
  tg.BackButton.show();
  categoryContainer.style.display = 'none';
  soupContainer.style.display = 'none';
  dishesContainer.style.display = 'grid';
}

function openDivSection(category_txt) {
  switch (category_txt) {
    case "супы":
      soupsScreenSettings();
      break;
    case "вторые блюда":
      dishesScreenSettings();
      break;
    case "закуски":
      break;
    case "напитки":
      break;
  }
}

Telegram.WebApp.onEvent('backButtonClicked', () => {
  tg.BackButton.hide();
  defaultScreenSettings();
});
