let tg = window.Telegram.WebApp;

let categoryContainer = document.getElementById("category_id");
let soupContainer = document.getElementById("food_id");
let dishesContainer = document.getElementById("dishes_id");
let lunchContainer = document.getElementById("lunch_id");
let drinksContainer = document.getElementById("drinks_id");

let categoryBtnList = document.querySelectorAll(".category_btn");
let foodBtnList = document.querySelectorAll(".food_btn");
let decrFoodBtnList = document.querySelectorAll(".food_decr_btn");
let incrFoodBtnList = document.querySelectorAll(".food_incr_btn");
let foodContainerList = document.querySelectorAll(".food_counter");
let foodCounter = 1;

console.log(tg.version);
defaultScreenSettings();
tg.lockOrientation();

/*Навешивание кликов на кнопки*/
categoryBtnList.forEach((categoryBtnElement) => {
  categoryBtnElement.addEventListener("click", (event) => {
    console.log(`id: ${event.target.textContent}`);
    openDivSection(event.target.textContent.toLowerCase());
  })
});

foodBtnList.forEach((foodBtnElement) => {
  foodBtnElement.addEventListener("click", (event) => {
    let index = [...foodBtnList].indexOf(foodBtnElement)
    showFoodCounterSection(foodBtnElement, decrFoodBtnList[index], foodContainerList[index], incrFoodBtnList[index]);
  })
});

decrFoodBtnList.forEach((decrElement) => {
  decrElement.addEventListener("click", (event) => {
    let index = [...decrFoodBtnList].indexOf(decrElement);
    handleBtnDecrSubmit(foodBtnList[index], decrElement, foodContainerList[index], incrFoodBtnList[index]);
  })
});

incrFoodBtnList.forEach((incrElement) => {
  incrElement.addEventListener("click", (event) => {
    let index = [...incrFoodBtnList].indexOf(incrElement);
    handleBtnIncrSubmit(foodBtnList[index], decrFoodBtnList[index], foodContainerList[index], incrElement)
  })
});

/*Обработчики экранного состояния*/
function defaultScreenSettings() {
  tg.MainButton.setParams(text = "Просмотреть корзину", color = tg.themeParams.button_color, tg.themeParams.button_text_color)
  /* tg.MainButton.text = "Просмотреть корзину";
   tg.MainButton.color = tg.themeParams.button_color;
   tg.MainButton.textColor = tg.themeParams.button_text_color;*/
  categoryContainer.style.display = 'grid';
  soupContainer.style.display = 'none';
  dishesContainer.style.display = 'none';
  lunchContainer.style.display = 'none';
  drinksContainer.style.display = 'none';
}

function soupsScreenSettings() {
  tg.expand();
  tg.BackButton.show();
  categoryContainer.style.display = 'none';
  soupContainer.style.display = 'grid';
  dishesContainer.style.display = 'none';
  lunchContainer.style.display = 'none';
  drinksContainer.style.display = 'none';
}

function dishesScreenSettings() {
  tg.expand();
  tg.BackButton.show();
  categoryContainer.style.display = 'none';
  soupContainer.style.display = 'none';
  dishesContainer.style.display = 'grid';
  lunchContainer.style.display = 'none';
  drinksContainer.style.display = 'none';
}

function lunchScreenSettings() {
  tg.expand();
  tg.BackButton.show();
  categoryContainer.style.display = 'none';
  soupContainer.style.display = 'none';
  dishesContainer.style.display = 'none';
  lunchContainer.style.display = 'grid';
  drinksContainer.style.display = 'none';
}

function drinksScreenSettings() {
  tg.expand();
  tg.BackButton.show();
  categoryContainer.style.display = 'none';
  soupContainer.style.display = 'none';
  dishesContainer.style.display = 'none';
  lunchContainer.style.display = 'none';
  drinksContainer.style.display = 'grid';
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
      lunchScreenSettings();
      break;
    case "напитки":
      drinksScreenSettings();
      break;
  }
}

function showFoodCounterSection(element, decrBtnEl, foodCounterEl, incrBtnEl) {
  element.style.display = 'none';
  decrBtnEl.style.display = 'inline-block';
  foodCounterEl.style.display = 'inline-block';
  incrBtnEl.style.display = 'inline-block';
  tg.MainButton.show();
}


/*Обработчики нажатия инкремента и декремента товаров*/
function handleBtnDecrSubmit(foodBuyBtnEl, decrBtnEl, foodCounterEl, incrBtnEl) {
  if (foodCounterEl.textContent === "1") {
    foodBuyBtnEl.style.display = 'inline-block';
    decrBtnEl.style.display = 'none';
    foodCounterEl.style.display = 'none';
    incrBtnEl.style.display = 'none';
  } else {
    foodCounterEl.textContent = foodCounter -= 1;
  }
}

function handleBtnIncrSubmit(foodBuyBtnEl, decrBtnEl, foodCounterEl, incrBtnEl) {
  foodCounterEl.textContent = foodCounter += 1;
}

/*Обработка нажатия BackButton Telegram*/
Telegram.WebApp.onEvent('backButtonClicked', () => {
  tg.BackButton.hide();
  tg.MainButton.hide();
  defaultScreenSettings();
});
