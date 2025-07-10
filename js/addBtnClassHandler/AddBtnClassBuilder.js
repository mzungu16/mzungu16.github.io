class AddBtnClassBuilder {
  setTg(tg) {
    this.tg = tg;
    return this;
  }

  build() {
    return new AddBtnClass(this.tg);
  }
}
