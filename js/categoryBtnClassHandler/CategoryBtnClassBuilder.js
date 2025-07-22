class CategoryBtnClassBuilder {
  setTg(tg) {
    this.tg = tg;
    return this;
  }

  setScreenMode(screenMode) {
    this.screenMode = screenMode;
    return this;
  }

  setAddBtnClass(buyBtn) {
    this.buyBtn = buyBtn;
    return this;
  }

  build() {
    return new CategoryBtnClass(this.tg, this.screenMode, this.buyBtn);
  }
}
