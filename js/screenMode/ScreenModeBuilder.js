class ScreenModeBuilder {

  setTg(tg) {
    this.tg = tg;
    return this;
  }

  build() {
    return new ScreenMode(this.tg);
  }
}
