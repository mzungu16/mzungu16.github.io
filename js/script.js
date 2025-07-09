let tg = window.Telegram.WebApp;
let categoryContainer = document.getElementById("category_id");
let soupContainer = document.getElementById("food_id");
let dishesContainer = document.getElementById("dishes_id");
let categoryBtnList = document.querySelectorAll(".category_btn");
let foodBtnList = document.querySelectorAll(".food_btn");
let decrFoodBtnList = document.querySelectorAll(".food_decr_btn");
let incrFoodBtnList = document.querySelectorAll(".food_incr_btn");
let foodContainerList = document.querySelectorAll(".food_counter");

let foodCounter = 1;

defaultScreenSettings();
tg.lockOrientation();

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

function showFoodCounterSection(element, decrBtnEl, foodCounterEl, incrBtnEl) {
  element.style.display = 'none';
  decrBtnEl.style.display = 'inline-block';
  foodCounterEl.style.display = 'inline-block';
  incrBtnEl.style.display = 'inline-block';
}

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

Telegram.WebApp.onEvent('backButtonClicked', () => {
  tg.BackButton.hide();
  defaultScreenSettings();
});
