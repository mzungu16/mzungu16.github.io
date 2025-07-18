class AddBtnClassBuilder {
  setTg(tg) {
    this.tg = tg;
    return this;
  }

  setScreenMode(screenMode) {
    this.screenMode = screenMode;
    return this;
  }

  build() {
    return new AddBtnClass(this.tg, this.screenMode);
  }
}
