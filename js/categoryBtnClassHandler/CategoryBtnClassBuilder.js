class CategoryBtnClassBuilder {
  setTg(tg) {
    this.tg = tg;
    return this;
  }

  setScreenMode(screenMode) {
    this.screenMode = screenMode;
    return this;
  }

  build() {
    return new CategoryBtnClass(this.tg, this.screenMode);
  }
}
