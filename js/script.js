let tg = window.Telegram.WebApp;

let categoryBtnList = document.querySelectorAll(".category_btn");
let foodBtnList = document.querySelectorAll(".food_btn");
let decrFoodBtnList = document.querySelectorAll(".food_decr_btn");
let incrFoodBtnList = document.querySelectorAll(".food_incr_btn");
let foodContainerList = document.querySelectorAll(".food_counter");
let foodCounter = 1;

console.log(tg.version);

const screenMode = new ScreenModeBuilder()
  .setTg(tg)
  .build();

screenMode.defaultScreenMode();

/*Навешивание кликов на кнопки*/
categoryBtnList.forEach((categoryBtnElement) => {
  categoryBtnElement.addEventListener("click", (event) => {
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

function openDivSection(category_txt) {
  switch (category_txt) {
    case "супы":
      screenMode.soupsScreenMode();
      break;
    case "вторые блюда":
      screenMode.dishesScreenMode();
      break;
    case "закуски":
      screenMode.lunchScreenMode();
      break;
    case "напитки":
      screenMode.drinksScreenMode();
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
  ScreenMode.defaultScreenMode();
});
