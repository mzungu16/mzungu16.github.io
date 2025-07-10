class AddBtnClass {
  foodBtnList = document.querySelectorAll(".food_btn");
  decrFoodBtnList = document.querySelectorAll(".food_decr_btn");
  foodContainerList = document.querySelectorAll(".food_counter");
  incrFoodBtnList = document.querySelectorAll(".food_incr_btn");
  foodCounter = 1;

  constructor(telegram) {
    this.tg = telegram;
  }

  onAddBtnClickEvent() {
    this.foodBtnList.forEach((foodBtnElement) => {
      foodBtnElement.addEventListener("click", (event) => {
        let index = [...this.foodBtnList].indexOf(foodBtnElement)
        this.handleAddBtnClick(foodBtnElement, this.decrFoodBtnList[index], this.foodContainerList[index], this.incrFoodBtnList[index]);
      })
    });
  }

  onDecrBtnClickEvent() {
    this.decrFoodBtnList.forEach((decrElement) => {
      decrElement.addEventListener("click", (event) => {
        let index = [...this.decrFoodBtnList].indexOf(decrElement);
        this.handleBtnDecrSubmit(this.foodBtnList[index], decrElement, this.foodContainerList[index], this.incrFoodBtnList[index]);
      })
    });
  }

  onIncrBtnClickEvent() {
    this.incrFoodBtnList.forEach((incrElement) => {
      incrElement.addEventListener("click", (event) => {
        let index = [...this.incrFoodBtnList].indexOf(incrElement);
        this.handleBtnIncrSubmit(this.foodBtnList[index], this.decrFoodBtnList[index], this.foodContainerList[index], incrElement)
      })
    });
  }

  handleAddBtnClick(addBtnElement, decrBtnElement, counterTxtElement, incrBtnElement) {
    this.tg.MainButton.show();

    this.foodCounter = 1;

    addBtnElement.style.display = 'none';
    decrBtnElement.style.display = 'inline-block';
    counterTxtElement.style.display = 'inline-block';
    incrBtnElement.style.display = 'inline-block';
  }

  handleBtnDecrSubmit(addBtnElement, decrBtnElement, counterTxtElement, incrBtnElement) {
    if (counterTxtElement.textContent === "1") {
      addBtnElement.style.display = 'inline-block';
      decrBtnElement.style.display = 'none';
      counterTxtElement.style.display = 'none';
      incrBtnElement.style.display = 'none';
    } else {
      counterTxtElement.textContent = this.foodCounter -= 1;
    }
  }

  handleBtnIncrSubmit(addBtnElement, decrBtnElement, counterTxtElement, incrBtnElement) {
    counterTxtElement.textContent = this.foodCounter += 1;
  }
}
